import React,{useReducer} from "react"


const EventContext= React.createContext();

const initialState = {
    events:[],
    filters:[]
}

const reducer = (state,action)=>{
      
    
    switch(action.type){
         case "FIND_EVENTS":
            return {...state,events:action.payload}
         case "UPDATE_FILTERS":
             return( state.filters.includes(action.payload)
                    ?{...state,filters:state.filters.filter(item=>item!==action.payload)}
                    :{...state,filters:[...state.filters,action.payload]})
         default:return state
      }
}

 

function EventContextProvider ({children}){
   
    const [state,dispatch]=useReducer(reducer,initialState)

    return(<EventContext.Provider value={{state,dispatch}}>
         {children}
   </EventContext.Provider>)

}

export {EventContext,EventContextProvider}