//let nav=document.querySelector("nav")
//console.log(nav)
window.addEventListener("scroll",scrollFunc)
let newnav=document.querySelector("nav")
let aboutrow=document.querySelector("header")

function scrollFunc() {
   
    let aboutrow2=aboutrow.getBoundingClientRect().top
    //console.log(aboutrow2)
   
    if (aboutrow2!==0){
        newnav.classList.add("newnav")
    }
    else {
        newnav.classList.remove("newnav")
    }
}
// let ul= document.querySelector("nav")
// document.querySelector(".fa-solid.fa-bars").addEventListener("click",(e)=>{
   
//         ul.classList.toggle("toggle")
// })
function Domload() {
    let container =document.createElement("div")
    let div=document.createElement("div")
    container.classList.add("lastcon")
    container.style.position="fixed"
    container.style.top="70px"
    container.style.width="100%"
    container.style.zIndex="999"
    container.style.background="transparent"
    div.style.width="90%"
    div.style.margin="0 auto"
    div.style.display="flex"
    div.style.flexDirection="column"
    div.style.alignItems="flex-start"
    div.style.backgroundColor="white"
    container.appendChild(div)
//let section1 =document.querySelector(".section1")
document.querySelector(".hamburgercontan").addEventListener("click",(e)=>{
    //console.log("adsad")
    e.currentTarget.firstElementChild.classList.toggle("toggle")
    e.currentTarget.classList.toggle("toggle")
    if (e.currentTarget.classList.contains("toggle")){
        div.innerHTML=`
        <a href='about.html'  style='width:100%;display:block;border-bottom:1px solid ;text-decoration:none;padding-top:10px;padding-left:10px;color:black;margin-bottom:10px'>About Us</a>
        <a href='products.html' style='width:100%;display:block;border-bottom:1px solid ;text-decoration:none;padding-left:10px;padding-top:0px;color:black;margin-bottom:0px'>Products <i style='color:black' class='fa-solid fa-caret-down'></i></a>
        <a href='contact.html' style='width:100%;display:block;border-bottom:1px solid ;text-decoration:none;color:black;margin-bottom:0px;padding-left:10px;padding-top:10px'>Contact Us</a>
        <a href='#' style='width:100%;display:block;border-bottom:1px solid ;text-decoration:none;color:black;margin-bottom:0px;padding-left:10px;padding-top:10px;padding-bottom:10px'>Certification</a>
        
        `
        //div.classList.add("newmenu")
    
        document.body.appendChild(container)
    }
    else {
         document.body.removeChild(container)
    }
})
}

document.addEventListener("DOMContentLoaded",Domload)


var acc = document.getElementsByClassName("cs-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("cs-active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}