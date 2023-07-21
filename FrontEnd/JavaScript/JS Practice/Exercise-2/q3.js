function countLetters(str){
    const obj = {};

    for(let i = 0;i<str.length;i++)
    {
        if(obj[str[i]])
        {
            obj[str[i]]++;
        }
        else
        {
            obj[str[i]] = 1;
        }
            
    }
    return obj;
}


var str = "anuragwebdevelopment";

const letterCounts = countLetters(str);

console.log(letterCounts);

const sortable = Object.entries(letterCounts)
    .sort(([,a],[,b]) => a-b)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});


console.log(sortable);