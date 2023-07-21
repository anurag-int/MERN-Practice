function delay(millseconds){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reject(new Error("Your Promise was Reject"));
        },millseconds);
    });
}

console.log("Before Promise Call");

delay(2000).catch(console.error("Rejection"));




console.log("After promise Call");