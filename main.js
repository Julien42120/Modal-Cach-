let togg1 = document.getElementById("togg1");
let box1 = document.getElementById("box1");
let Body = document.querySelector("body");

togg1.addEventListener("click", () => {

  if(box1.style.display != "flex"){
    box1.style.display = "flex";
    Body.style.background ="grey";
    } 
    else {
    box1.style.display = "none";
    Body.style.background = "white";
  }

})

togg1.addEventListener("blur", function(event){
    box1.style.display = "none";
    Body.style.background = "white";

})

