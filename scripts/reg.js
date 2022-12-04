"use strict";

let baseURL = "https://task.samid.uz/v1/user";

const registration = (e) => {
  e.preventDefault();

  const userName = document.querySelector('#nameinput').value.trim();
  const userEmail = document.querySelector('#emailinput').value.trim();
  const userPassword = document.querySelector('#password').value.trim();

  const params = {
    username: userName,
    email: userEmail,
    password: userPassword,
  };
  console.log(params);

  if (
    userName.length === 0 ||
    userEmail.length === 0 ||
    userPassword.length === 0
  ) {
    alert("MALUMOT TOLIQ EMAS ");
  } else {
    fetch(`https://task.samid.uz/v1/user/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((e) => e.json())
      .then((e) => {
        if (e.code === 1) {
          alert(e.message);
          setTimeout(() => {
            window.location.replace("./login.html");
          }, 2000);
        } else {
          console.log(e);
          alert("OLDIN RO'YXATDAN O'TGAN");
        }
      });
  }
};

const reg = document.querySelector("#registration");
reg.addEventListener("submit", (e) => {
  registration(e);
});
