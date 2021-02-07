const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger-icon");
const navMobile = document.querySelector(".burger-menu");

burger.addEventListener("click", () => {
  burgerMenu.classList.toggle("animate");
  navMobile.classList.toggle("active");
});
