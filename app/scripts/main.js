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
    const bannerButton = document.querySelectorAll(".banner__lang button");
    let languageTexts;
    const navTexts = document.querySelectorAll(".nav__link");
    const blockTitles = document.querySelectorAll("h2");
    const paragraphs = document.querySelectorAll("p:not(.skill__name)");
    const buttonSend = document.querySelector(".contacts__send");

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

    getData("data/data.json").then(function (data) {
        data.forEach(addProject);
    });

    getData("data/languages.json").then(function (data) {
        languageTexts = data;
    });

    bannerButton[0].addEventListener("click", () => {
        bannerButton[1].classList.remove("selected");
        bannerButton[0].classList.add("selected");
        document.title = languageTexts[0].title;
        for (let i = 0; i < navTexts.length; i++) {
            navTexts[i].innerHTML = languageTexts[1].nav[i];            
        }
        for (let i = 0; i < blockTitles.length; i++) {
            blockTitles[i].innerHTML = languageTexts[1].block_titles[i];            
        }
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].innerHTML = languageTexts[1].block_text[i];            
        }
        buttonSend.innerHTML = languageTexts[1].button_send;
    });

    bannerButton[1].addEventListener("click", () => {
        bannerButton[0].classList.remove("selected");
        bannerButton[1].classList.add("selected");
        document.title = languageTexts[1].title;
        for (let i = 0; i < navTexts.length; i++) {
            navTexts[i].innerHTML = languageTexts[0].nav[i];            
        }
        for (let i = 0; i < blockTitles.length; i++) {
            blockTitles[i].innerHTML = languageTexts[0].block_titles[i];            
        }
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].innerHTML = languageTexts[0].block_text[i];            
        }
        buttonSend.innerHTML = languageTexts[0].button_send;
    });

});