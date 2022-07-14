import FormTemplate from "./FormTemplate";
import {useNavigate} from "react-router-dom";
import {useContext,useState} from "react";
import {UserContext} from "../context/UserContext"

function SignUp(props) {
    let navigate=useNavigate();
    let {userAccounts,setUserAccounts}=useContext(UserContext);
    const [newAccount,setNewAccount]=useState({name:"",username:"",password:"",favorites:[]});
    
    function validate(value,regex,error){
        console.log("Input value:",value);
        if(!value.match(regex)) throw Error(error);
     }
 
     function userExists(){
         let exists =  userAccounts.some(account=>account.username===newAccount.username);
         if(exists) throw Error("Username already exists");
     }
 
     function clickHandler(event){
         event.preventDefault();
         
 
         try{
             validate(newAccount.username,/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,"Invalid e-mail");
             validate(newAccount.password,/^[\w]{6,9}$/,
             `Password requirements:contains letters and digits at length 6-9 charachters`);
             userExists();
             setUserAccounts([...userAccounts,newAccount])
             console.log(userAccounts)
            //  toast(`You are logged in as ${credentials.name}`);
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