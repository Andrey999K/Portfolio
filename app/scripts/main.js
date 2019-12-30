document.addEventListener("DOMContentLoaded", () => {
  const menu_ = document.querySelector('.nav__list');
  const scrollspy = new VanillaScrollspy(menu_);
  scrollspy.init();
});
let i = 0;



function menu() {
  let header = document.getElementsByClassName("header");
  let nav = document.getElementsByClassName("nav__list");
  let menu = document.getElementsByClassName("header__menu");
  let menu_close = document.getElementsByClassName("header__menu-close");
  let header_lang = document.getElementsByClassName("header__lang");
  if (i == 0) {
    nav[0].classList.add("visibile");
    //header[0].style.background = "#ffffff";
    header[0].classList.add("header_white", "header_height");
    menu[0].className = "header__menu-close";
    header_lang[0].classList.add("lang_visibile");
    i++;
  } else {
    nav[0].classList.remove("visibile");
    //header[0].style.background = "none";
    header[0].classList.remove("header_white", "header_height");
    menu_close[0].className = "header__menu";
    header_lang[0].classList.remove("lang_visibile");
    i--;
  }
}
let lang_banner = "en";
document.getElementsByClassName("banner__lang-en")[0].classList.add("selected");
document.getElementsByClassName("header__lang-en")[0].classList.add("selected");

function lang1(element) {
  let banner_lang_en = document.getElementsByClassName("banner__lang-en");
  let banner_lang_ru = document.getElementsByClassName("banner__lang-ru");
  let header_lang_en = document.getElementsByClassName("header__lang-en");
  let header_lang_ru = document.getElementsByClassName("header__lang-ru");
  switch (element) {
    case "banner__lang-en":
      banner_lang_en[0].classList.add("selected");
      banner_lang_ru[0].classList.remove("selected");
      break;
    case "banner__lang-ru":
      banner_lang_ru[0].classList.add("selected");
      banner_lang_en[0].classList.remove("selected");
      break;
    case "header__lang-en":
      header_lang_en[0].classList.add("selected");
      header_lang_ru[0].classList.remove("selected");
      break;
    case "header__lang-ru":
      header_lang_ru[0].classList.add("selected");
      header_lang_en[0].classList.remove("selected");
      break;
  }
}

// function menu_item(element) {
//   let menu_item = document.getElementsByClassName("nav__link");
//   for (let i = 0; i < menu_item.length; i++) {
//     menu_item[i].classList.remove("selected");
//   }
//   switch (element) {
//     case 0:
//       menu_item[0].classList.add("selected");
//       break;
//     case 1:
//       menu_item[1].classList.add("selected");
//       break;
//     case 2:
//       menu_item[2].classList.add("selected");
//       break;
//     case 3:
//       menu_item[3].classList.add("selected");
//       break;
//     case 4:
//       menu_item[4].classList.add("selected");
//       break;
//   }
// }