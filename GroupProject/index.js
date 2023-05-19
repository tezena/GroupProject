
var slides=document.querySelectorAll(".slider");
var dotBtn=document.querySelectorAll(".dot");
var currIndex=0;

// manual sliding

var slideShow=function(index){
slides.forEach((item, i) => {
 item.classList.remove("Active");
});
dotBtn.forEach((item, i) => {
 item.classList.remove("ActiveBtn");
});



slides[index].classList.add("Active");
dotBtn[index].classList.add("ActiveBtn");
}

dotBtn.forEach((dot, i) => {
dot.addEventListener("click",()=>{
    slideShow(i);
    currIndex=i;
});
});


// for auto display

var repeat=function(){
let i=1;
var repeater=()=>{
  setTimeout(function(){
     slideShow(i);
     i++;
     if(slides.length==i){
       i=0;
     }
     if(i>=slides.length){
       return;
     }
     repeater();
  },5000) ;
}
repeater();
}
repeat();
