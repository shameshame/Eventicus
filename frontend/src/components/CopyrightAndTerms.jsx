import Grid from '@mui/material/Grid';
import ThemeProvider  from '@mui/material/styles/ThemeProvider';
import Typography from "@mui/material/Typography"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Link} from "react-router-dom"
import {bottomNavTheme,logoTheme} from "./Themes"
import footerStyles from '../js/footerStyles';
import eventStyle from '../js/eventStyle';



function CopyrightAndTerms() {
    
    
    
    
    return (
     
        <Grid sx={{textAlign:{xs:"center",md:"left"}}}  container spacing={1} >
            <Grid item xs={12} md={3}>
               <ThemeProvider theme={logoTheme}>
                  <Typography sx={{color:"secondary.main"}} variant="h5" component={Link} style={footerStyles.logo} to="/">EVENTI</Typography>
                  <Typography sx={{color: "primary.light"}} variant="h5" component={Link} style={footerStyles.logo} to="/">CUS</Typography>
               </ThemeProvider>
            </Grid>
            
            <Grid  item xs={12} md={3}> 
                <ThemeProvider theme={bottomNavTheme}>
                   <Typography variant="p" sx={{color:"primary.main"}}> ©Eventicus Ltd {new Date().getFullYear()} </Typography>
                </ThemeProvider>
            </Grid>
            <Grid sx={{color:"white"}} item xs={12} md={2}>
                <ThemeProvider theme={bottomNavTheme}>
                   <Typography variant="p" component={Link} to="/" sx={{color:"primary.main"}} style={footerStyles.link}> Terms of use </Typography>
                </ThemeProvider>
            </Grid>
            <Grid sx={{color:"white"}} item xs={12} md={4} >
                <FacebookIcon style={footerStyles.icon}/>
                <InstagramIcon style={footerStyles.icon}/>
                <LinkedInIcon style={footerStyles.icon}/>
            </Grid>
        </Grid>
       
    );
}

export default CopyrightAndTerms;