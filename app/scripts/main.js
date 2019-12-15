document.addEventListener("DOMContentLoaded", () => {});
let i = 0;

function menu() {
  let header = document.getElementsByClassName("header");
  let nav = document.getElementsByClassName("nav__list");
  let menu = document.getElementsByClassName("header__menu");
  let menu_close = document.getElementsByClassName("header__menu-close");
  let header_lang = document.getElementsByClassName("header__lang");
  if (i == 0) {
    // nav[0].style.display = "flex";
    nav[0].classList.add("visibile");
    header[0].style.opacity = 0.95;
    header[0].style.background = "#ffffff";
    header[0].style.height = "100vh";
    // menu_close[0].style.display = "block";
    // menu[0].style.display = "none";
    menu[0].className = "header__menu-close";
    header_lang[0].style.display = "flex";
    i++;
  } else {
    // nav[0].style.display = "none";
    nav[0].classList.remove("visibile");
    header[0].style.background = "none";
    header[0].style.height = "initial";
    // menu_close[0].style.display = "none";
    // menu[0].style.display = "block";
    menu_close[0].className = "header__menu";
    header_lang[0].style.display = "none";
    i--;
  }
}