import {Container,TextField,InputAdornment,
        Button,Grid} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {EventContext} from "../context/EventContext";
import { useContext,useState } from "react";
import axios from 'axios';




function Search(props) {
    const [searchInput, setSearchInput]= useState("");
    const {state,dispatch}= useContext(EventContext);
    const {filters}=state;
    
    

    
const fetchEvents = async()=>{
    try{
        
        let response = await axios.get(`http://localhost:8000/search?city=${searchInput}&moreFilters=${filters}`);
        dispatch({type:"FIND_EVENTS",payload:response.data.results})
          
       }catch(error){
            console.log(error.message)
      }
  }

    
  
  return ( 
        <Container maxWidth="sm" >
           <Grid container >
             <Grid item md={8}>
                <TextField size="small"
                    onChange={(event)=> setSearchInput(event.target.value)}
                    id="standard-search"
                    InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                         <SearchIcon/>
                      </InputAdornment>),
                    }}
                    variant="outlined"
                 />
             </Grid>
          
             <Grid item xs={12} md={4} >
               <Button disabled={searchInput===""}   onClick={fetchEvents} variant="contained" color="secondary">Find events</Button>
             </Grid>
          </Grid>

          
          
          </Container> 
          )
}
export default Search;