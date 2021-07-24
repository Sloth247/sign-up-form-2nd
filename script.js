const form = document.querySelector(".form");
const firstName = document.querySelector(".first");
const lastName = document.querySelector(".last");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

const warningFirst = document.getElementById("form__warning--first");
const warningLast = document.getElementById("form__warning--last");
const warningEmail1 = document.getElementById("form__warning--email--1");
const warningEmail2 = document.getElementById("form__warning--email--2");
const warningPassword = document.getElementById("form__warning--password");

const iconFirst = document.getElementById("form__icon--first");
const iconLast = document.getElementById("form__icon--last");
const iconEmail = document.getElementById("form__icon--email");
const iconPassword = document.getElementById("form__icon--password");

// set border color change //
firstName.addEventListener("input", function (event) {
  this.style.border = "1px solid hsl(249, 10%, 26%)";
});
lastName.addEventListener("input", function (event) {
  this.style.border = "1px solid hsl(249, 10%, 26%)";
});
email.addEventListener("input", function (event) {
  this.style.border = "1px solid hsl(249, 10%, 26%)";
});
password.addEventListener("input", function (event) {
  this.style.border = "1px solid hsl(249, 10%, 26%)";
});

// validation //
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (email.validity.typeMismatch && !email.validity.valueMissing) {
    // email.setCustomValidity('Please provide a valid email.');
    warningEmail1.classList.remove("hidden");
    warningEmail2.classList.add("hidden");
    iconEmail.style.opacity = "1";
    email.style.border = "1px solid hsl(0, 100%, 74%)";
  } else if (email.validity.valueMissing) {
    warningEmail2.classList.remove("hidden");
    warningEmail1.classList.add("hidden");
    iconEmail.style.opacity = "1";
    email.style.border = "1px solid hsl(0, 100%, 74%)";
  } else {
    email.setCustomValidity("");
    iconEmail.style.opacity = "0";
    warningEmail1.classList.add("hidden");
    warningEmail2.classList.add("hidden");
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (firstName.validity.valueMissing) {
    warningFirst.classList.remove("hidden");
    iconFirst.style.opacity = "1";
    firstName.style.border = "1px solid hsl(0, 100%, 74%)";
  } else {
    firstName.setCustomValidity("");
    iconFirst.style.opacity = "0";
    warningFirst.classList.add("hidden");
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (lastName.validity.valueMissing) {
    warningLast.classList.remove("hidden");
    iconLast.style.opacity = "1";
    lastName.style.border = "1px solid hsl(0, 100%, 74%)";
  } else {
    lastName.setCustomValidity("");
    iconLast.style.opacity = "0";
    warningLast.classList.add("hidden");
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (password.validity.valueMissing) {
    warningPassword.classList.remove("hidden");
    iconPassword.style.opacity = "1";
    password.style.border = "1px solid hsl(0, 100%, 74%)";
  } else {
    password.setCustomValidity("");
    iconPassword.style.opacity = "0";
    warningPassword.classList.add("hidden");
  }
});
