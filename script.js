const menubtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');

menubtn.addEventListener('click',()=>{
    menubtn.classList.toggle('active');
    nav.classList.toggle('active');
});

const btns=document.querySelectorAll(".nav-btn");
const slides=document.querySelectorAll(".image");
const cont=document.querySelectorAll(".content");
var side=function(manual){
  btns.forEach((btn)=>{
    btn.classList.remove("active");
  });

  slides.forEach((slide)=>{
    slide.classList.remove("active");
  });
  cont.forEach((conta)=>{
    conta.classList.remove("active");
  });
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    cont[manual].classList.add("active");
  }
  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      side(i);
    });
  });