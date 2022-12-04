"use strict";

let baseURL = "https://task.samid.uz/v1/user/sign-in";

const registration = (e) => {
  e.preventDefault();
 
 
  const userName = document.querySelector('#nameinput').value.trim();
  const userPassword = document.querySelector('#password').value.trim();

  const params = {
    
    username:userName,
    password: userPassword,
  };
  console.log(params);

  if (
    userName.length === 0 ||
    userPassword.length === 0
  ) {
    alert("MALUMOT TOLIQ EMAS ");
  } else {
    fetch(`https://task.samid.uz/v1/user/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
    .then((e) => e.json())
      .then((e) => {
        console.log(e);
        if (e.code === 1) {
          localStorage.setItem('token', e.data.token);
          localStorage.setItem('user', e.data.username)
          alert(e.message);
          setTimeout(() => {
            window.location.replace("./index.html");
          }, 2000);
        }
      }).catch(e => console.log(e));
  }
};

const reg = document.querySelector("#reg");
console.log(reg);
reg.addEventListener("submit", (e) => {
  registration(e);
});
