let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")
let box3 = document.querySelector(".box3")
let box4 = document.querySelector(".box4")
let background = document.querySelector(".wrapper")
let btn = document.querySelector(".submitbtn")
let input = document.querySelector(".textbox")
let p = document.querySelector(".textarea")

box1.addEventListener("click",()=>{
    background.style.backgroundColor = "red";
})
box2.addEventListener("click",()=>{
    background.style.backgroundColor = "blue";
})
box3.addEventListener("click",()=>{
    background.style.backgroundColor = "green";
})
box4.addEventListener("click",()=>{
    background.style.backgroundColor = "rgb(211, 117, 245)";
})
btn.addEventListener("click", ()=> {
    p.innerText = input.value;
    input.value = "";
});