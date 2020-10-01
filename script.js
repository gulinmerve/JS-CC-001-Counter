const lowerCountBtn = document.querySelector("#lowerCountBtn");
const addCountBtn = document.querySelector("#addCountBtn");
const counter = document.querySelector(".counter");

lowerCountBtn.addEventListener("click", decrease);
addCountBtn.addEventListener("click", increase);

let count = 0;

function increase(){
    count++;
    counter.innerHTML = count;
    if (count>0) {
        counter.style.color = "blue";
    }
    else if (count<0){ 
        counter.style.color = "red";
    } else {
        counter.style.color = "white"
    }
    
};

function decrease() {
    count--;
    counter.innerHTML = count;
    if (count>0) {
        counter.style.color = "blue";
    }
    else if (count<0){ 
        counter.style.color = "red";
    } else {
        counter.style.color = "white"
    }
};
