import React,{useState,useEffect} from 'react';
import { onAuthStateChanged} from "firebase/auth";
import {auth} from "../config/firebase-config.js"
import { db } from "../config/firebase-config.js";

import { collection, onSnapshot,where,query } from 'firebase/firestore';


const UserContext= React.createContext();

function UserContextProvider({children}) {
    const [favorites,setFavorites]=useState([]);
    const [loggedIn,setLoggedIn]=useState({});
    const favsCollectionRef =  collection(db,"favorites");

   
    

    useEffect(()=>{
       
      
           const favs_Query=query(favsCollectionRef,where('owner','==',`${loggedIn.email}`))
           const unsubscribe= onSnapshot(favs_Query,(querySnapshot)=>{
                   let dataToPush = []
           
                   querySnapshot.forEach((doc) => {
                       dataToPush.push(doc.data());
                   });
                
                   setFavorites(dataToPush);
           })

      

    //    return ()=>{
    //       unsubscribe()
    //    }
      
    },[loggedIn])


    
    
    onAuthStateChanged(auth,(currentUser)=>{
        
        setLoggedIn({...currentUser})
    })
    
    return (
        <UserContext.Provider value={{loggedIn,setLoggedIn,favorites,setFavorites}}>
            {children}
        </UserContext.Provider>
    );
}

export {UserContextProvider,UserContext};