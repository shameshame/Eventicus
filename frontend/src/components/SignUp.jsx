import FormTemplate from "./FormTemplate";
import {useNavigate} from "react-router-dom";
import {useContext,useState} from "react";
import {UserContext} from "../context/UserContext"
import {createUserWithEmailAndPassword,updateProfile } from "firebase/auth"
import {auth} from "../config/firebase-config.js"

function SignUp(props) {
    let navigate=useNavigate();
    let {userAccounts,setUserAccounts,loggedIn,setLoggedIn}=useContext(UserContext);
    const [newAccount,setNewAccount]=useState({name:"",email:"",password:"",favorites:[]});
    
    function validate(value,regex,error){
        
        if(!value.match(regex)) throw Error(error);
     }
 
     function userExists(){
         let exists =  userAccounts.some(account=>account.username===newAccount.username);
         if(exists) throw Error("Username already exists");
     }
 
     const clickHandler = async (event)=>{
         event.preventDefault();
         
 
         try{
            //  validate(newAccount.username,/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,"Invalid e-mail");
            //  validate(newAccount.password,/^[\w]{6,9}$/,
            //  `Password requirements:contains letters and digits at length 6-9 charachters`);
            //  userExists();
            //  setUserAccounts([...userAccounts,newAccount])
             const {name,email,password}=newAccount
             await createUserWithEmailAndPassword(auth,email,password)
             await updateProfile(auth.currentUser, {displayName:name})
             
             
             
             navigate("/profile");
         }catch(error){
        //    toast.error(error.message);
             console.log(error.message)
         }
         
     }
 


    
    return (
        <FormTemplate account={newAccount} setAccount={setNewAccount} clickHandler={clickHandler} />
    );
}

export default SignUp;