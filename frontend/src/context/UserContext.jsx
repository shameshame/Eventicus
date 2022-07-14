import React,{useState,useEffect} from 'react';

const UserContext= React.createContext();

function UserContextProvider({children}) {
    const [userAccounts,setUserAccounts]=useState([]);
    const [loggedIn,setLoggedIn]=useState({});

    useEffect(()=>{
      setUserAccounts(JSON.parse(localStorage.getItem("userAccounts")) || []);
       
    },[])
   
    useEffect(()=>{
       localStorage.setItem("userAccounts", JSON.stringify(userAccounts));
       
    },[userAccounts])
    
    
    return (
        <UserContext.Provider value={{userAccounts,setUserAccounts,loggedIn,setLoggedIn}}>
            {children}
        </UserContext.Provider>
    );
}

export {UserContextProvider,UserContext};