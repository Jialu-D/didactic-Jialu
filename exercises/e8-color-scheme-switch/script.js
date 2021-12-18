let yellowCircle=document.getElementById("yellowButton");
let blueCircle=document.getElementById("blueButton");
let grayCircle=document.getElementById("grayButton");
let redCircle=document.getElementById("redButton");


yellowCircle.addEventListener("click",turnPageYellow);
blueCircle.addEventListener("click",turnPageBlue);
redCircle.addEventListener("click",turnPageRed);
grayCircle.addEventListener("click",turnPageGray)

function turnPageYellow(){
  console.log("turn me yellow");
  let body=document.querySelector("body");
  body.style.backgroundColor="yellow";
  let heading=document.querySelector("h1");
  heading.style.color="black";
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
  body.style.backgroundColor="red";
  let heading=document.querySelector("h1");
  heading.style.color="black";
}

function turnPageGray(){
    console.log("turn me gray");
    let body=document.querySelector("body");
    body.style.backgroundColor="gray";
    let heading=document.querySelector("h1");
    heading.style.color="white";
  }