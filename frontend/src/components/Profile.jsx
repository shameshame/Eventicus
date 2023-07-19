import {useContext,useEffect,useState} from "react";
import {UserContext} from "../context/UserContext";
import DisplayEvents from './DisplayEvents';
import FestivalIcon from '@mui/icons-material/Festival';
import Box from '@mui/material/Box';
import {notFoundTheme} from "./NotFoundPage"
import {ThemeProvider} from '@mui/material/styles';
import Typography from "@mui/material/Typography";





function Profile(props) {
    const {favorites}= useContext(UserContext);
   

   return (
        <Box>{favorites.length ? <DisplayEvents events = {favorites}/> : 
          
          <Box sx={{display:'flex', flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"}}>
           <FestivalIcon/>
           <ThemeProvider theme = {notFoundTheme}>
              <Typography>Save your fave events here !</Typography>
           </ThemeProvider>
          </Box>
        }

        
        </Box>
    );
}

export default Profile;