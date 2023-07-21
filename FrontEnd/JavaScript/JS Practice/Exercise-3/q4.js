function checkNo(n)
{
    if(typeof n !== Number)
    {
        console.error("Its not a Number");
    }
    else
    {
        console.log("Its a error");
    }
}

console.log(checkNo(5),()=>{
    
});
console.log(checkNo("Hello"));