import {UserContext} from "../context/UserContext"
import {useContext,useState} from "react";
import {useNavigate} from "react-router-dom"
import FormTemplate from "./FormTemplate";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../config/firebase-config.js"


function Login(props) {
    
    const [account,setAccount]=useState({email:"",password:""});
    let navigate=useNavigate();
    const{loggedIn,userAccounts,setLoggedIn}= useContext(UserContext);
    const {email,password}=account;
    
    // function signIn(){
    //     let found =  userAccounts.find(account=>account.username ===username && account.password ===password)
    //     if (!found) throw Error("One or more details are incorrect");
    //     setLoggedIn(found);
    //     return found;

    //     await signInWithEmailAndPassword(auth,account.email,account.password)

    // }
    
    const clickHandler =async (event)=>{
        event.preventDefault();

        try{
          await signInWithEmailAndPassword(auth,account.email,account.password)
          navigate("/profile");
          
        }catch(error){
        //    toast.error(error.message);
        console.log(error.message)
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