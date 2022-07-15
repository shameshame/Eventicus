import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import ThemeProvider  from '@mui/material/styles/ThemeProvider';
import Typography from "@mui/material/Typography"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Link} from "react-router-dom"
import {bottomNavTheme,logoTheme} from "./Themes"
import footerStyles from '../js/footerStyles';


function CopyrightAndTerms() {
    return (
     
        <Grid  container >
            <Grid item xs={12} md={3}>
            <ThemeProvider theme={logoTheme}>
               <Typography sx={{color:"secondary.main"}} variant="h5" component={Link} style={footerStyles.logo} to="/">EVENTI</Typography>
               <Typography sx={{color: "primary.light"}} variant="h5" component={Link} style={footerStyles.logo} to="/">CUS</Typography>
            </ThemeProvider>
            </Grid>
            
            <Grid sx={{color:"white"}} item xs={12} md={3}>©Eventicus Ltd {new Date().getFullYear()} </Grid>
            <Grid sx={{color:"white"}} item xs={12} md={2}>Terms of use</Grid>
            <Grid sx={{color:"white"}} item xs={12} md={4} >
                <FacebookIcon/>
                <InstagramIcon/>
                <LinkedInIcon/>
            </Grid>
        </Grid>
       
    );
}

export default CopyrightAndTerms;