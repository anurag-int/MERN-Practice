// this is the element from which we want to do changes.
const countValue = document.querySelector('#main_data');

const increment = () => { 
    // get the value from UI and Its gives the result in the String form.  so We are doing pareseInt()
    let value = parseInt(countValue.innerText);
    // update the value
    value = value + 1;
    //set the value in the UI
    countValue.innerText = value;
    
}


const decrement = () => {
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;
}