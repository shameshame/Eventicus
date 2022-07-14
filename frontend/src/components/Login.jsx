import {UserContext} from "../context/UserContext"
import {useContext,useState} from "react";
import {useNavigate} from "react-router-dom"
import FormTemplate from "./FormTemplate";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"


function Login(props) {
    
    const [account,setAccount]=useState({username:"",password:""});
    let navigate=useNavigate();
    const{loggedIn,userAccounts,setLoggedIn}= useContext(UserContext);
    const {username,password}=account;
    
    function signIn(){
        let found =  userAccounts.find(account=>account.username ===username && account.password ===password)
        if (!found) throw Error("One or more details are incorrect");
        setLoggedIn(found);
        return found;
    }
    
    function clickHandler(event){
        event.preventDefault();

        try{
          let loggedIn=signIn();
        //   toast(`You logged in as ${loggedIn.name} `);
          navigate("/profile");
        }catch(error){
        //    toast.error(error.message);
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