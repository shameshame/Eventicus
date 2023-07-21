import {Box,Typography,Button,Grid,IconButton,Tooltip} from "@mui/material"
import {useNavigate,useLocation} from "react-router-dom"
import {UserContext} from "../context/UserContext";
import DeleteIcon from '@mui/icons-material/Delete';
import { createTheme, responsiveFontSizes,ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import StarIcon from '@mui/icons-material/Star';
import {useContext} from "react";
import { db } from "../config/firebase-config.js";
import {collection,addDoc,query,getDocs
        ,deleteDoc,where
       } 
        from "firebase/firestore";
import Paper from '@mui/material/Paper';
import eventStyle from "../js/eventStyle";

function Event(props) {
   
    const {description,imageurl,largeimageurl,title,id}=props
    const {loggedIn}=useContext(UserContext);
    const location= useLocation()
    const navigate=useNavigate();
    let theme = createTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'))
    theme = responsiveFontSizes(theme);
    const favsCollectionRef = collection(db, "favorites");

   
    const choosePic = ()=>{
        return isMobile ? imageurl :largeimageurl
    }

    
    const textStyle={
      margin: theme.spacing(1.2, 'auto') 
    }

    const showMoreHandler=()=>{
       navigate(`/events/${props.id}`)
    }

    const addToFavorites = async()=>{
          
      
         if(loggedIn.email){
           try{
                let favEvent ={imageurl,largeimageurl,description,title,id,owner:`${loggedIn.email}`};
                await addDoc(favsCollectionRef,favEvent)
              }catch(error){
                console.log(error.message)
             } 
          }

          else navigate("/login")
    }

    const removeFromFavorites = async ()=>{
     try{
          const userFavs_query = query(favsCollectionRef, where('owner','==',`${loggedIn.email}`))
          const eventsToDelete= await getDocs(query(userFavs_query,where('id','==',`${props.id}`)))
          eventsToDelete.forEach( (event)=>{deleteDoc(event.ref)})
       }catch(error){
          console.log(error.message)
        } 
      }
    
    return (
      <Paper elevation={3} sx={{height: "100%",p:"20px"}}>
       
       <Grid sx={{ flexGrow: 1}}   container spacing = {2}>
           <Grid sx={{margin:"auto"}} item  md={5}>
              <Box style={eventStyle.image}   component="img"  src={choosePic()}/>
           </Grid>
            
            <Grid  style={{textAlign:"center"}} item xs={12} md={6} lg={4}>
               <ThemeProvider theme={theme}>
                  <Typography style={textStyle}  variant="h6" component="h6">{title}</Typography>
                  <Typography style={textStyle} variant="caption" component="p">{description}</Typography>
                </ThemeProvider>
            </Grid>
            <Grid  item xs={12} md={3} >
                 <Grid direction="column" container >
                    <Button size="small" onClick={showMoreHandler}  sx={{mt:2,backgroundColor:"#BB0A21",color:"white",":hover":{"bgcolor":"#F31634"}}} >
                      Show more
                    </Button>

                    {location.pathname==="/"
                     ? <Tooltip  title="Add to Favorites"> 
                           <IconButton onClick={addToFavorites}>
                             <StarIcon color="warning" sx={{mx:"auto",mt:2}} />
                          </IconButton>
                       </Tooltip>
                     : <Tooltip  title="Remove from favorites"> 
                        <IconButton onClick={removeFromFavorites}>
                         <DeleteIcon/>
                       </IconButton>
                    </Tooltip>}
                  </Grid>
            </Grid>
         </Grid>
       
      </Paper>
    );
}

export default Event;