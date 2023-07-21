function countLetters(str){
    const count = {};
    for(let i = 0; i<str.length; i++)
    {
        if(count[str[i]])
            count[str[i]]++;
        else{
            count[str[i]] = 1;
        }
    }

    return count;
}


const letterCount = countLetters("Anurag");
console.log(letterCount);

