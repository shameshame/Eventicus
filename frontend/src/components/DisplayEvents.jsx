import Grid from '@mui/material/Grid';
import { createTheme } from '@mui/material/styles';
import Event from "./Event";
import useMediaQuery from '@mui/material/useMediaQuery';

function DisplayEvents(props) {
    
    const theme = createTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'))
  

    const choosePic = (event)=>{
        return isMobile ? event.imageurl :event.largeimageurl
    }

    return (<>
       <Grid  container spacing={1} >
           {props.events.map(event=>
            <Grid sx={{mt:3, mx:"auto"}}  key={event.id} xs={12} md={5} item >
              <Event id={event.id}  title={event.eventname} description={event.description} imageurl={choosePic(event)}/>
           </Grid>)}
       </Grid> 
        </>
    );
}

export default DisplayEvents;