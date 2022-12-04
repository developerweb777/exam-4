"use strict";
// let show = document.querySelector(".show");
// let password=document.querySelector('#password')
// let nameinput=document.querySelector('#nameinput')
// let emailinput=document.querySelector('#emailinput')
// show.addEventListener("click", (e) => {
//   if (password.getAttribute("type") == "password") {
//    password.setAttribute("type", "text");
   
//   }
//   else {
//     password.setAttribute("type", "password");
//   }
// });


(function(){
let loginname=localStorage.getItem("user");
let token=localStorage.getItem("token");
let userlogin=document.querySelector('#userlogin');
let logout=document.querySelector('#userlogin');
userlogin.innerHTML=`${loginname}`
if(!token){
    location.replace('./login.html')
}
}())
logout.addEventListener('click',()=>{
    localStorage.clear();
    location.reload();
})




