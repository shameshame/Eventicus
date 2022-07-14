import { createTheme } from '@mui/material/styles';



const theme=createTheme()

const navbarStyles = {
    appbar:{
        backgroundColor:"#071013",
        
    },

    logo: {
        flexGrow: "1",
        textDecoration: "none",
        cursor: "pointer",
        color: "#EF767A"
      },

    accountIcon:{
      
      marginRight: theme.spacing(1)
    },
    
    navlinks: {
      display: "flex",
    },
   
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "16px",
      
      "&:hover": {
        color: "yellow !important",
        borderBottom: "1px solid white",
      },
    },

    drawerPaper:{
     backgroundColor:"#3BC14A",
     opacity:0.9,
     height:"auto",
     
    },

    iconButton:{
        color:"white"
    },
   
    closeButton:{
        color:"white",
        position:"absolute",
        right:"20px",
        top:"10px"
    }
    
  };

  export default navbarStyles;