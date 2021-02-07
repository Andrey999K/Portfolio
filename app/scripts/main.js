document.addEventListener("DOMContentLoaded", () => {
    const menu_ = document.querySelector('.nav__list');
    const scrollspy = new VanillaScrollspy(menu_);
    scrollspy.init();

    let i = 0;

    const menu = document.querySelector(".header__menu");
    let header = document.querySelector(".header");
    let nav = document.querySelector(".nav__list");
    let header_lang = document.querySelector(".header__lang");
    const listProject = document.querySelector(".portfolio__list");


    menu.addEventListener("click", item => {

        if (i == 0) {
            nav.classList.add("visibile");
            header.classList.add("header_white", "header_height");
            menu.classList.add("header__menu-close");
            header_lang.classList.add("lang_visibile");
            i++;
        } else {

            nav.classList.remove("visibile");
            header.classList.remove("header_white", "header_height");
            header_lang.classList.remove("lang_visibile");
            menu.classList.remove("header__menu-close");
            i--;
        }

    });

    const nav__link = document.querySelectorAll(".nav__link");

    // ЗАКРЫТИЕ МЕНЮ
    nav__link.forEach(item => {
        item.addEventListener("click", e => {
            if (i == 1) {
                nav.classList.remove("visibile");
                header.classList.remove("header_white", "header_height");
                header_lang.classList.remove("lang_visibile");
                menu.classList.remove("header__menu-close");
                i--;
            }
        });
    });


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

    const getData = async function (url) {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(
                `Ошибка по адресу ${url}, статус ошибки ${response.status}!`
            );
        }
        return await response.json();
    };

    function addProject({
        name,
        link,
        image,
        alt
    }) {
        const project = document.createElement("li");
        project.className = "portfolio__list-item";
        project.insertAdjacentHTML(
            "beforeend",
            `
            <article class="portfolio-proect">
                <a href="${link}">
                    <img class="portfolio-layout"
                        src="${image}" alt="${alt}">
                </a>
                <a class="portfolio__link" href="${link}">${name}</a>
            </article>
            `
        );
        listProject.insertAdjacentElement("beforeend", project);
    }

    getData("../data/data.json").then(function (data) {
        data.forEach(addProject)
    });

});