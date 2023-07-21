let arr1 = ["Anurag", "Aditya", "Viraj", "Swami", "Pratham","Abhishek"];


var ans = function checkLength(arr1)
{
    let arr2 = [];
    for(let i of arr1)
    {
        if(i.length > 5)
        {
            arr2.push(i);
        }
    }

    return arr2;
}

console.log(ans(arr1));