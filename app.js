const loginBTN = document.querySelector(".login-btn");
const registerBTN = document.querySelector(".register-btn");
const contactForm = document.querySelector(".contact-form");
const theOverlay = document.querySelector(".overlay");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const loginControl = document.querySelector(".login-ctrl");
const registerControl = document.querySelector(".reg-ctrl");

loginBTN.addEventListener("click", () => {
  contactForm.style.display = "block";
  theOverlay.style.display = "block";
  loginControl.style.background = "white";
  loginControl.style.color = "black";
  loginForm.style.display = "flex";
  registerForm.style.display = "none";
});
registerBTN.addEventListener("click", () => {
  contactForm.style.display = "block";
  theOverlay.style.display = "block";
  registerControl.style.background = "white";
  registerControl.style.color = "black";
  loginForm.style.display = "none";
  registerForm.style.display = "flex";
});

loginControl.addEventListener("click", () => {
  loginControl.style.background = "white";
  loginControl.style.color = "black";
  registerControl.style.background = "none";
  registerControl.style.color = "black";
  loginForm.style.display = "flex";
  registerForm.style.display = "none";
});
registerControl.addEventListener("click", () => {
  loginControl.style.background = "none";
  loginControl.style.color = "black";
  registerControl.style.background = "white";
  registerControl.style.color = "black";
  loginForm.style.display = "none";
  registerForm.style.display = "flex";
});

theOverlay.addEventListener("click", () => {
  contactForm.style.display = "none";
  theOverlay.style.display = "none";
    theOverlay.style.cursor = "pointer";
    loginControl.style.background = "none";
    registerControl.style.background = "none";
});
