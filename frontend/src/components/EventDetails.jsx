import {useEffect,useState,useContext } from "react";
import { YMaps, Map,Placemark} from 'react-yandex-maps';
import {useParams,useLocation} from "react-router-dom"
import {UserContext} from "../context/UserContext";
import {EventContext} from "../context/EventContext";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress'
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import axios from "axios";
import { createTheme,ThemeProvider } from '@mui/material/styles';

function EventDetails(props) {
    const {eventid}=useParams();
    const location = useLocation()
    const {loggedIn} = useContext(UserContext);
    const {state}=useContext(EventContext);
    const {events}=state;
    const [coords,setCoords]=useState();
    
    let theme = createTheme({
        typography:{
            fontFamily: ["Playfair Display", "serif"].join(','),
            fontSize: 20,
            fontWeight:500
        }
    });
    

    
    const eventToDisplay=()=>{
        let eventList=location.pathname==="/profile"? loggedIn.favorites:events
        return eventList.find(item=>item.id ===eventid);
    }
    const event = eventToDisplay();
    const mapState= {center: [event.venue.latitude, event.venue.longitude], zoom: 11,controls:["zoomControl"]};

    
    useEffect(()=>{
       
        const fetchCoords = async ()=>{
          let address = `${event.venue.town} ${event.venue.name}`;   
          let response = await axios.get(`http://localhost:8000/details?address=${address}&country=${event.venue.country}&region=${event.venue.town}`)
          let {latitude,longitude}=response.data;
          setCoords({latitude:Number(latitude),longitude:Number(longitude)});
        }
       fetchCoords();
       return ()=>setCoords({});
   },[])
  
    
   return (<>
            {coords ? <Stack sx={{display:'flex',justifyContent:"center",alignItems:"center",height:"100vh"}} direction ="row" spacing={4}>
              <YMaps   query={{lang:'en_US',load:'package.full'}}>
                   <Map defaultState={mapState}>
                       <Placemark geometry={[coords.latitude,coords.longitude]}/>
                   </Map>
                   <ThemeProvider theme={theme}>
                      <Typography component="h6">Price: {event.entryprice}</Typography>
                      <Typography component="p" variant="caption">Date and time: {`${event.date},${event.openingtimes.doorsopen}`}</Typography>
                   </ThemeProvider>
              </YMaps>
              
           </Stack>
           : <Box sx={{ display: 'flex',justifyContent:"center",alignItems:"center" ,height:"100vh"}}>
               <CircularProgress />
           </Box>
           }
           
           </>
       
    );
}

export default EventDetails;