var str = "Anurag";

function reverse_string(value)
{   
    var newString = "";
    for(let i =  value.length-1; i>=0; i--)
    {
        newString += value[i];
    }

    return newString;
}


let ans = reverse_string(str);

console.log(ans);