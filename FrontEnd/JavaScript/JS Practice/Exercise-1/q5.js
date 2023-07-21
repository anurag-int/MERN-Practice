function createCounter()
{
    let count = 0;
    
    return function()
    {
        console.log("This is function call " + count);
        count++;
        return count;
    }
    
}

var ans = createCounter();

console.log(ans());
console.log(ans());
console.log(ans());
console.log(ans());
