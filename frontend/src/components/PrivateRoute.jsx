import {Navigate} from "react-router-dom"
import {useContext} from "react";
import {UserContext} from "../context/UserContext";


const PrivateRoute = ({children})=>{
    let {loggedIn}=useContext(UserContext);
    
    return loggedIn.name ?children :<Navigate to="/login"/>;
}

export default PrivateRoute;