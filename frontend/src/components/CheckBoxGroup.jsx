
import {EventContext} from "../context/EventContext";
import {useContext} from "react";
import {Container,
    FormControl,FormGroup,
    FormControlLabel, Checkbox} from '@mui/material';
import {filterMap} from "../js/filters"


function CheckBoxGroup(props) {
   const {dispatch,state} = useContext(EventContext);
   const {filters,events} = state;
   const filterKeys=Object.keys(filterMap);
     
    return (
        <Container maxWidth="xs" sx={{mt:2}} >
               <FormControl >
                 <FormGroup row>
                   {filterKeys.map(key=>
                    <FormControlLabel key={key}
                       label={filterMap[key].label}
                       control={<Checkbox size="small" name={filterMap[key].attribute} value={key} 
                                 checked={filters.includes(key)} 
                                 onChange={
                                 (event)=>dispatch({type:"UPDATE_FILTERS",payload:event.target.value})} 
                                />}
                     />
                     )}
                    </FormGroup>
              </FormControl>
        </Container>
    );
}

export default CheckBoxGroup;