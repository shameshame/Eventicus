import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import navbarStyles from "../js/navbarStyles";
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";
import Drawer from "@mui/material/Drawer"
import DropdownItem from "./DropdownItem"
import dropdownMobile from "../js/dropdown.js"

function MobileNav(props) {
    const [isMobileOpen,setIsMobileOpen]=useState(false)
    
    return (
     <>
        <IconButton size="large" edge="start" aria-label="menu" color="inherit" onClick={()=>setIsMobileOpen(!isMobileOpen)}>
          <MenuIcon/>
        </IconButton>
        <Drawer  anchor="top" open={isMobileOpen} onClose={()=>setIsMobileOpen(false)}
           PaperProps={{sx: navbarStyles.drawerPaper}}>
               {dropdownMobile.map((item,index)=>
                 <DropdownItem key={index} label={item.label} icon={item.icon}/>
                )}
               <CloseIcon fontSize="large" onClick={()=>setIsMobileOpen(false)} style={navbarStyles.closeButton}/>
        </Drawer>
      </>
    );
}

export default MobileNav;