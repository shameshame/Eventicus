import {UserContext} from "../context/UserContext"
import {useContext,useState} from "react";
import {useNavigate} from "react-router-dom"
import FormTemplate from "./FormTemplate";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../config/firebase-config.js"
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Login(props) {
    
    const [account,setAccount]=useState({email:"",password:""});
    let navigate=useNavigate();
    
    
    const clickHandler =async (event)=>{
        event.preventDefault();

        try{
          await signInWithEmailAndPassword(auth,account.email,account.password)
          navigate("/profile");
          
        }catch(error){
           toast.error("One or more credentials are incorrect",{
            position: toast.POSITION.BOTTOM_CENTER,
            theme:"colored",
            hideProgressBar: true
        });
        
        }
   }
    
    
    return (
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
             <FormTemplate account={account} setAccount={setAccount} clickHandler={clickHandler} />
             <Typography sx={{mt:6}} variant="caption" component="p">Still don't have account ?</Typography>
             <Button onClick={()=>navigate("/register")} sx={{mt:1}} variant="contained">Create Account</Button>
        </Box>
    );
}

export default Login;