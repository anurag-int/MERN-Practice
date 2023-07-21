
function print(){
    console.log("I have clicked one the document");
}

document.addEventListener('click', print);


// remove event listener
document.removeEventListener('click', print);





// The Default Action
var links = document.querySelectorAll('a');
var third_link = links[2];


third_link.addEventListener('click',function(event)
{
    event.preventDefault();
    console.log("Blocked Action for Link-3"); 
});
