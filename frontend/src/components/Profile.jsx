import {useContext} from "react";
import {UserContext} from "../context/UserContext";
import DisplayEvents from './DisplayEvents';

function Profile(props) {
    const {loggedIn}= useContext(UserContext);
   

    return (
        <DisplayEvents events = {loggedIn.favorites}/>
    );
}

export default Profile;