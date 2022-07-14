export const filterMap = {
    ticketsavailable:{label:"tickets available ",attribute:"tickets"},
    under18:{label:"under 18",attribute:"minage",value:"18"}
};


export function trueStatement(event,attribute,value=true){
   return attribute==="minage"? event[attribute]<Number(value)
                              : event[attribute]===value;
}