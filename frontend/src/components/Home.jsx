import Box from "@mui/material/Box";
import Search from './Search';
import DisplayEvents from './DisplayEvents';
import {useEffect,useContext,useCallback} from "react";
import {EventContext} from "../context/EventContext";
import CheckBoxGroup from './CheckBoxGroup';
import {filterMap,trueStatement} from "../js/filters"
import axios from "axios";



function Home(props) {
    const {state,dispatch}= useContext(EventContext);
    const {events,filters}=state;
    
    
    useEffect(()=>{
       const loadMostPopularEvents =  async()=>{
          
          let response= await axios.get(`/`)
        //   let response = await axios.get(`http://www.skiddle.com/api/v1/events/search/?api_key=${process.env.REACT_APP_SKIDDLE_API_KEY}&order=bestselling&imagefilter=1&description=1`);
          dispatch({type:"FIND_EVENTS",payload:response.data.results})
          
       }
       loadMostPopularEvents();
    },[])

    const eventSubset = useCallback(()=>events.filter(event=>runSearch(event))
    ,[filters,events])
    
    function runSearch (event){
        return filters.every(key=>trueStatement(event,filterMap[key].attribute,
                                                filterMap[key].value)) 
    }
    
    return (
       <Box  sx={{my:6}}>
            <Search/>
            <CheckBoxGroup />
            <DisplayEvents events={eventSubset()}/>
            
        </Box>
       
    );
}

export default Home;