let hamburge=document.querySelector('.hamburger');
let close =document.querySelector('.ham');
let closes=document.querySelector('.bi-x-lg');

hamburge.addEventListener('click',()=>{
   close.style.display="block"
})
closes.addEventListener('click',()=>{
   close.style.display="none"
})
