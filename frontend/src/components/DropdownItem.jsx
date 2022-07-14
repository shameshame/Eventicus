import IconButton from '@mui/material/IconButton';
import MenuItem from "@mui/material/MenuItem"
import {Link} from "react-router-dom";
import navbarStyles from "../js/navbarStyles";
import {UserContext} from "../context/UserContext";
import {useContext} from "react";


function DropdownItem(props) {
    
    const {icon,label} = props
    const TheIcon = icon
    const {setLoggedIn}= useContext(UserContext);

    function handleLogout(label){
        if(label ==="Log Out") setLoggedIn({});
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