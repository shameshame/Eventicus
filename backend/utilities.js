function formatFilters(moreFilters){
   return moreFilters!==""?`${moreFilters.replaceAll(",","=1&")}=1`:moreFilters;
}


module.exports={
    formatFilters 
}