import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import navbarStyles from "../js/navbarStyles";
import {UserContext} from "../context/UserContext"
import {useContext,useState} from "react";
import {dropdownUser} from "../js/dropdown"
import Menu from '@mui/material/Menu'
import {useNavigate} from "react-router-dom"
import DropdownItem from "./DropdownItem"


function DesktopNav(props) {
    const {loggedIn}= useContext(UserContext);
    const [anchorEl,setAnchorEl]=useState(undefined);
    const userMenuOpen=Boolean(anchorEl)
    const navigate=useNavigate();

    
    function clickAccountIcon(event){
        if(loggedIn.username){
            setAnchorEl(event.currentTarget)
        }
          
        else
          navigate("/login")
    }

    function handleClose(){
        setAnchorEl(undefined)
    }
    
    return (
        <Box sx={navbarStyles.navlinks}>
            <IconButton id="account-button" style={navbarStyles.link} onClick={(event)=>clickAccountIcon(event)}
                        aria-haspopup ='true' aria-expanded={userMenuOpen ? "true":undefined}>
                 <AccountCircleIcon  style={navbarStyles.accountIcon}/>
                  Hello, {loggedIn.name? loggedIn.name: `SignIn`}
            </IconButton>
            <Menu open={userMenuOpen} 
              anchorEl={anchorEl} 
              id="account-menu" 
              MenuListProps={{"aria-labelledby":"account-button",
              
              }}
              PaperProps={{sx: navbarStyles.drawerPaper}}

              onClose={handleClose}
              anchorOrigin={{
                vertical:"bottom",
                horizontal:"right"
              }}

              transformOrigin={{
                  vertical:"top",
                  horizontal:"right"
              }}
             >
                  {dropdownUser.map((item,index)=>
                     <DropdownItem key={index} icon={item.icon} label={item.label}/>
                  )}
            </Menu>
       </Box>
    );
}

export default DesktopNav;