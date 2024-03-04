const menubtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');

menubtn.addEventListener('click',()=>{
    menubtn.classList.toggle('active');
    nav.classList.toggle('active');
});

const btn=document.createElement(".nav-btn");
let slide=function (manual) {
    btn[manual].classList.add('active');
  }
  btn.forEach((btns,i) => {
    btns.addEventListener("click",() => {
        slide(i);
    });
  });