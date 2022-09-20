const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".nav");
const body = document.body;
// const blackout = document.querySelector(".blackout");
if (burger && nav) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("_active");
    nav.classList.toggle("_active");
   //  body.classList.toggle("_disable-skroll");
  });
}