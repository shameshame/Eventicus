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
import useMediaQuery from '@mui/material/useMediaQuery';

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
    
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    let direction = isMobile?"column":"row"
    
    const eventToDisplay=()=>{
        let eventList=location.pathname==="/profile"? loggedIn.favorites:events
        return eventList.find(item=>item.id ===eventid);
    }
    const event = eventToDisplay();
    const mapState= {center: [event.venue.latitude, event.venue.longitude], zoom: 11,controls:["zoomControl"]};
    const screenWidth = window.innerWidth
    
    useEffect(()=>{
       
        const fetchCoords = async ()=>{
          let {country,town,name}= event.venue 
          let address = `${town} ${name}`; 
        //   let response = axios.get(`http://api.positionstack.com/v1/forward?access_key=${process.env.REACT_APP_positionStack_key}&query=${address}&country=${country}&region=${town}&limit=1`)
          let response = await axios.get(`http://details?address=${address}&country=${event.venue.country}&region=${event.venue.town}`)
          console.log(response)
          let {latitude,longitude}=response.data
          setCoords({latitude:Number(latitude),longitude:Number(longitude)});
        }
       fetchCoords();
       return ()=>setCoords({});
   },[])
  
    
   return (<>
            {coords ? <Stack sx={{display:'flex',justifyContent:"center",alignItems:"center",height:"100vh",mb:1}} direction ={direction} spacing={4}>
             <YMaps   query={{lang:'en_US',load:'package.full'}}>
                    <Map defaultState={mapState} width={isMobile? screenWidth: "auto"}>
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