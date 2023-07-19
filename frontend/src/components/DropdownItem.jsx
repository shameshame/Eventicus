import IconButton from '@mui/material/IconButton';
import MenuItem from "@mui/material/MenuItem"
import {Link} from "react-router-dom";
import navbarStyles from "../js/navbarStyles";
import {UserContext} from "../context/UserContext";
import {signOut } from "firebase/auth";
import {auth} from "../config/firebase-config.js"
import {useContext} from "react";


function DropdownItem(props) {
    
    const {icon,label} = props
    const TheIcon = icon
    

    const handleLogout = async (label)=>{
        if(label ==="Log Out") await signOut(auth)
    }  
    

    function getPath(label){
        if(label==="Log Out") return "login"
        
        return label==="Home"?"/":`/${label.toLowerCase()}`
    }

    
    
    return (<MenuItem component={Link} to={getPath(label)} onClick={()=>handleLogout(label)} >
              <IconButton style={navbarStyles.iconButton}><TheIcon {...props}/></IconButton>
              {label}
            </MenuItem>
            );
}

export default DropdownItem;