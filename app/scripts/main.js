document.addEventListener("DOMContentLoaded", () => {});

function menu() {
  let header = document.getElementsByClassName("header");
  let nav = document.getElementsByClassName("nav__list");
  let menu = document.getElementsByClassName("header__menu");
  let menu_close = document.getElementsByClassName("header__menu-close");
  let header_lang = document.getElementsByClassName("header__lang");
  if (nav[0].style.display == "none") {
    nav[0].style.display = "flex";
    header[0].style.opacity = 0.95;
    header[0].style.background = "#ffffff";
    header[0].style.height = "100vh";
    menu_close[0].style.display = "block";
    menu[0].style.display = "none";
    header_lang[0].style.display = "flex";
  } else {
    nav[0].style.display = "none";
    header[0].style.background = "none";
    header[0].style.height = "19px";
    menu_close[0].style.display = "none";
    menu[0].style.display = "block";
    header_lang[0].style.display = "none";
  }
}
