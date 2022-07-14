import ErrorIcon from '@mui/icons-material/Error';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography"
import { createTheme,ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
    typography:{
        fontFamily: ["Playfair Display", "serif"].join(','),
        fontSize: 50,
        fontWeight:500
    },
   
});


function NotFoundPage() {
    return (
        <Box sx={{display:'flex', flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"}}>
            <ErrorIcon sx={{ color:"#f44336"}} fontSize="large"/>
            <ThemeProvider  theme={theme}>
                      <Typography  component="h2"> Error 404. Page not found</Typography>
            </ThemeProvider>
           
        </Box>
    );
}

export default NotFoundPage;