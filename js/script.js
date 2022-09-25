const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".nav");
const link = document.querySelectorAll(".nav__item-link");
const body = document.body;
const blackout = document.querySelector(".blackout");
if (burger && nav) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("_active");
    nav.classList.toggle("_active");
    blackout.classList.toggle("_active");
  });
}
link.forEach((e) => {
  e.addEventListener("click", () => {
    burger.classList.remove("_active");
    nav.classList.remove("_active");
    blackout.classList.remove("_active");
  });
});