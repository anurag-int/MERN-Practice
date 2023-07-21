let a = function(){
    const meraPromise = new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log("Promise Fullfilled");
            resolve(1323);
        }, 2000);
    })
    return meraPromise;
}

console.log("start");

a().then(()=>{
    console.log("2 second elapsed");
});

console.log("end");
