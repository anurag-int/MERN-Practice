let obj = {
    "name":"Anurag",
    "id":12,
    "branch": "CSE",
    "Year": 2
}

let myFun = function keysOfObject(obj)
{
    let keys = [];

    for(let key in obj)
    {
        keys.push(key);
    }

    return keys;
}

console.log(myFun(obj));