function addFirstToLast(arrayOfString){
    let firstAndLast ='';
    if(arrayOfString.length>0)
    firstAndLast = arrayOfString[0]+arrayOfString[arrayOfString.length-1];
    return firstAndLast;
}