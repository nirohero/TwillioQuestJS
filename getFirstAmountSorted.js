function getFirstAmountSorted(array1,num1){
    //first sort and then slice
    
    let newArr = array1.sort();
    newArr = array1.slice(0,num1);
    return newArr;
}