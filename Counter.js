  let count = 0 
function increment(){
    count++;
console.log(count)
 document.getElementById("counter").innerText = count;
}

function decrement(){
    count--;
    console.log(count);
     document.getElementById("counter").innerText = count;
}

function reset(){
    count = 0;
    console.log(count);
     document.getElementById("counter").innerText = count;
}


    

