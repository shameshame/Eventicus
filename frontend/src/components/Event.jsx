import {Box,Typography,Button,Grid,IconButton,Tooltip} from "@mui/material"
import {useNavigate,useLocation} from "react-router-dom"
import {UserContext} from "../context/UserContext";
import {EventContext} from "../context/EventContext";
import DeleteIcon from '@mui/icons-material/Delete';
import { createTheme, responsiveFontSizes,ThemeProvider } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import {useState,useContext} from "react";
import Paper from '@mui/material/Paper';

function Event(props) {
   
   
    const {userAccounts,setUserAccounts,
           loggedIn,setLoggedIn}=useContext(UserContext);
    const {favorites,username}=loggedIn;
    const location= useLocation()
    const {state}=useContext(EventContext);
    const {events}=state;
    const navigate=useNavigate();
    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    const textStyle={
      margin: theme.spacing(1.2, 'auto') 
    }

    const showMoreHandler=()=>{
       navigate(`/events/${props.id}`)
    }

    function addToFavorites(){
          let found = userAccounts.find(user=>user.username===loggedIn.username);
         
      
         if(loggedIn.username){
            let event = events.find(event=>event.id === props.id);
            setLoggedIn((loggedIn)=>{return {...loggedIn,favorites:[...favorites,event]} })
            setUserAccounts((userAccounts)=>{return [...userAccounts.filter(account=>account.username!==found.username),{...loggedIn,favorites:[...favorites,event]}]})
          }

          else navigate("/login")
    }

    function removeFromFavorites(){
      let found = userAccounts.find(user=>user.username===loggedIn.username);
      
      let event = favorites.find(event=>event.id === props.id);
      let afterRemoval = favorites.filter(favorite=>favorite.id!==event.id)
      setLoggedIn(()=>{return {...loggedIn,favorites:afterRemoval} })
      setUserAccounts((userAccounts)=>{return [...userAccounts.filter(account=>account.username!==found.username),{...loggedIn,favorites:afterRemoval}]})
    }
    
    
    
    
    return (
       <Paper elevation={3} sx={{height: "100%",p:"20px"}}>
       
       <Grid sx={{ flexGrow: 1}}   container spacing = {2}>
           <Grid sx={{margin:"auto"}} item  md={5}>
              <Box  component="img"  src={props.imageurl}/>
           </Grid>
            
            <Grid  style={{textAlign:"center"}} item xs={12} md={6} lg={4}>
               <ThemeProvider theme={theme}>
                  <Typography style={textStyle}  variant="h6" component="h6">{props.title}</Typography>
                  <Typography style={textStyle} variant="caption" component="p">{props.description}</Typography>
                </ThemeProvider>
            </Grid>
            <Grid  item xs={12} md={3} >
                 <Grid direction="column" container >
                    <Button size="small" onClick={showMoreHandler}  sx={{mt:2,backgroundColor:"#BB0A21",color:"white",":hover":{"bgcolor":"#F31634"}}} >
                      Show more
                    </Button>
                   <Tooltip  title="Add to Favorites"> 
                      <IconButton onClick={location.pathname==="/" ?addToFavorites:removeFromFavorites}>
                        {location.pathname==="/"?<StarIcon color="warning" sx={{mx:"auto",mt:2}} />:<DeleteIcon/>}
                     </IconButton>
                    </Tooltip>
                 </Grid>
            </Grid>
           
        </Grid>
       
      </Paper>
    );
}

export default Event;