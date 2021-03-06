import {Link} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import navbarStyles from "../js/navbarStyles";
import { createTheme,ThemeProvider } from '@mui/material/styles';
import DesktopNav from "./DesktopNav" 
import MobileNav from "./MobileNav";
import {logoTheme} from "./Themes"

const theme=createTheme()



function Navbar(props) {
   
   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

   return (
        <AppBar sx={navbarStyles.appbar} position="static">
            <CssBaseline />
          <Toolbar>
            <ThemeProvider theme={logoTheme}>
               <Typography  variant="h5" component={Link} to="/" style={navbarStyles.logo}>
                  EVENTICUS
               </Typography>
           </ThemeProvider>
           {isMobile ? <MobileNav/> :<DesktopNav/>}
          </Toolbar>
       </AppBar>
    );
}

export default Navbar;