var arr1 = [1,2,3,4,5];
var arr2 = [3,4,5,6,7];


var arr3 = [];
for(let i =0;i<arr1.length;i++)
{
    for(let j=0;j<arr2.length;j++)
    {
        if(arr1[i] == arr2[j])
        {
            arr3.push(arr1[i]);
        }
    }
}

arr3.sort();

console.log(arr3);