import {useLocation} from "react-router-dom";
import {useState} from "react";
import Container from '@mui/material/Container';
import InputAdornment from "@mui/material/InputAdornment"
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const theme=createTheme()
const formStyle = {
    margin:theme.spacing(2,'auto')
}
const textFieldStyle = {
    margin:theme.spacing(1,0)
}




function FormTemplate(props) {
    const location = useLocation(); 

    const {account,setAccount,clickHandler}=props;
    const [passwordField,setPasswordField]=useState({password:account.password,showPassword:false});
    const {showPassword}=passwordField;
    
    function changeHandler(event){ 
        setAccount({...account,[event.target.name]:event.target.value})
    }

    function handleClickShowPassword() {
        setPasswordField({ ...passwordField, showPassword: !showPassword });
    };
    
    return (
        <Container sx={{display:"flex",flexDirection:"column"}} maxWidth="xs" >
             
            {location.pathname!=="/login" && 
            <TextField onChange={event=>changeHandler(event)} name="name" sx={textFieldStyle} size="small" label="Name"  required/>}
            <TextField sx={textFieldStyle} size="small" name="email"  label="Username" required
                onChange={event=>changeHandler(event)}
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                         <AccountCircleIcon/>
                      </InputAdornment>),
                }}
            />
            <TextField sx={textFieldStyle} name="password" size="small" type={showPassword ? "text" : "password"} 
                 label="Password" required onChange={event=>changeHandler(event)}
                 
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" onClick={handleClickShowPassword} >
                         { showPassword ? <VisibilityIcon /> : <VisibilityOff />}
                      </InputAdornment>),
                }}
            />
            <Button onClick={(event)=>clickHandler(event)} variant="contained" color="warning">Submit</Button>
        </Container>
    );
}

export default FormTemplate;