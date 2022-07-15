import { createTheme } from '@mui/material/styles';

export const logoTheme= createTheme({
    typography:{
        fontFamily: ["Ceviche One", "cursive"].join(','),
        fontSize: 20,
        
    },
    palette:{
       primary:{
         main:"#E97C72",
         light:"#EF767A",
         dark:"#F64740"
       },
  
       secondary:{
         main:"#F7F7F9"
       }
    }
  });

  export const bottomNavTheme = createTheme({
    typography:{
        fontFamily: ["Ibarra Real Nova", "serif"].join(','),
        fontSize: 16,
    },

    palette:{
        primary:{
            main:"#F7F7F9"
        }
    }


  })