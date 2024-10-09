var largeBtn = document.querySelector(".largeBtn");
var smalBtn = document.querySelector(".smallBtn");
var body = document.querySelector("body");


function largeSize(){
    body.classList.add("large");
    body.classList.remove("small");
}

function smallSize(){
   
    body.classList.add("small");
    body.classList.remove("large");
}

largeBtn.onclick = largeSize;

smalBtn.onclick = smallSize;