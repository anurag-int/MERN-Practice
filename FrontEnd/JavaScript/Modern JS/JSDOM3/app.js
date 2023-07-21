// using document fragment

        // let time1 = performance.now();
        // let fragment = document.createDocumentFragment();
        // for(let i=1; i<=100; i++)
        // {
        //     let newElement = document.createElement('p');
        //     newElement.textContent = "This is Para " + i;

        //     fragment.appendChild(newElement);
            
        // }

        // document.body.appendChild(fragment);// 1Reflow 1Repaint
        // let time2 = performance.now();
        // console.log(time2 - time1);


// call stack
//JS is Single Threaded Language ---> Proccessing 1 command at a time.
//JS is Syncronys ---> It means It will Execute Line By LINE.


// event loop

        // console.log('ABCD');

        // let para = document.createElement('p');
        // para.textContent = "Hi world";
        // document.appendChild(para);

        // document.addEventListener('click', function()
        // {
        //     console.log("HEllo EveryOne");
        // })

        // console.log("Last Console");


// setTimeout();

console.log("ABC");

setTimeout(function(){
    console.log("Hello Dosto");
},5000);

console.log("XYz");











