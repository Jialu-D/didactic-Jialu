let yellowCircle=document.getElementById("yellowButton");
let blueCircle=document.getElementById("blueButton");
let whiteCircle=document.getElementById("whiteButon");
let redCircle=document.getElementById("redButon");


yellowCircle.addEventListener("click",turnPageYellow);
blueCircle.addEventListener("click",turnPageBlue);


function turnPageYellow(){
  console.log("turn me yellow");
  let body=document.querySelector("body");
  body.style.backgroundColor="yellow";
}


function turnPageBlue(){
    console.log("turn me blue");
    let body=document.querySelector("body");
    body.style.backgroundColor="blue";
}