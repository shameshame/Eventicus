import Grid from '@mui/material/Grid';
import Event from "./Event";


function DisplayEvents(props) {
    
   
    return (<>
       <Grid  container spacing={1} >
           {props.events?.map(event=>
            <Grid sx={{mt:3, mx:"auto"}}  key={event.id} xs={12} md={5} item >
              <Event id={event.id}  title={event.eventname} description={event.description} largeimageurl={event.largeimageurl} imageurl={event.imageurl}/>
           </Grid>)}
       </Grid> 
        </>
    );
}

export default DisplayEvents;