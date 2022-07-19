function scan(arrayOfStrings){
let numberC =0;
for(let i = 0; i<arrayOfStrings.length;i++)
{
    if(arrayOfStrings[i]=="contraband")
    numberC++;
}
return numberC;
}