const PORT = 8000;
const {formatFilters} = require('./utilities');
const axios = require('axios');
const express= require('express');
const cors = require('cors');
require('dotenv').config();
const app=express();




app.use(express.json())
app.use(cors({
    credentials:false
}));




app.get("/",  async (req,res)=>{
    
    let reply = await axios.get(`http://www.skiddle.com/api/v1/events/search/?api_key=
                               ${process.env.REACT_APP_SKIDDLE_API_KEY}&order=bestselling
                               &imagefilter=1&description=1`);
                             
    return res.json(reply.data)
})

app.get("/search",  async (req,res)=>{
   try{
        
    let {moreFilters,city}=req.query;
    let cityGeoResponse = await axios.get(`http://api.positionstack.com/v1/forward?access_key=${process.env.REACT_APP_positionStack_key}&query=${city}&limit=1`);
    let {longitude,latitude} = cityGeoResponse.data.data.shift();
    moreFilters=formatFilters(moreFilters);
    let eventsReq = await axios.get(`http://www.skiddle.com/api/v1/events/search/?api_key=${process.env.REACT_APP_SKIDDLE_API_KEY}&latitude=${latitude}&longitude=${longitude}&radius=5&eventcode=LIVE&order=distance&imagefilter=1&description=1&${moreFilters}`);                        
    return res.json(eventsReq.data)

   }catch(error){
       console.log(error)
   }
})

app.get("/details",async (req,res)=>{
    let {address,country,town}=req.query;
    let response = await axios.get(`http://api.positionstack.com/v1/forward?access_key=${process.env.REACT_APP_positionStack_key}&query=${address}&country=${country}&region=${town}&limit=1`)
    let payload=response.data.data.shift();
    return res.json(payload)
})


app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))