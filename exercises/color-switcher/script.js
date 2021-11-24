let yellowCircle=document.getElementById("yellowButton");
let blueCircle=document.getElementById("blueButton");
let whiteCircle=document.getElementById("whiteButon");
let redCircle=document.getElementById("redButon");


yellowCircle.addEventListener("click",turnPageYellow);
blueCircle.addEventListener("click",turnPageBlue);
whiteCircle.addEventListener("click",turnPageWhite);
redCircle.addEventListener("click",turnPageRed);

function turnPageYellow(){
  console.log("turn me yellow");
  let body=document.querySelector("body");
  body.style.backgroundColor="yellow";
}


function turnPageBlue(){
    let heading=document.querySelector("h1");
    heading.style.color="white";
    console.log("turn me blue");
    let body=document.querySelector("body");
    body.style.backgroundColor="blue";
}

function turnPageRed(){
  console.log("turn me red");
  let body=document.querySelector("body");
  body.style.backgroundColor="tomato";