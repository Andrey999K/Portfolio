"use strict";
document.addEventListener("DOMContentLoaded", () => {

    const menu_ = document.querySelector('.nav__list');
    const scrollspy = new VanillaScrollspy(menu_);
    scrollspy.init();

    var wow = new WOW({
        mobile: false,
    }).init();

    const menu = document.querySelector(".header__menu");
    let header = document.querySelector(".header");
    let nav = document.querySelector(".nav__list");
    let header_lang = document.querySelector(".header__lang");
    const listProject = document.querySelector(".portfolio__list");
    const listSkill = document.querySelector(".skills__list")
    const bannerButton = document.querySelectorAll(".banner__lang button");
    const headerButton = document.querySelectorAll(".header__lang button");
    let languageTexts;
    const navTexts = document.querySelectorAll(".nav__link");
    const blockTitles = document.querySelectorAll("h2");
    const paragraphs = document.querySelectorAll("p:not(.skill__name)");
    const buttonSend = document.querySelector(".contacts__send");
    const nav__link = document.querySelectorAll(".nav__link");

    // CLOSING THE MENU
    function menuOpenClose() {
        nav.classList.toggle("visibile");
        header.classList.toggle("header_white");
        header.classList.toggle("header_height");
        header_lang.classList.toggle("lang_visibile");
        menu.classList.toggle("header__menu-close");
        document.body.classList.toggle("no-scroll");
    };

    // CLOSING THE MENU
    menu.addEventListener("click", () => {
        menuOpenClose();
    });

    // CLOSING THE MENU
    if (window.innerWidth <= 768) {
        nav__link.forEach(item => {
            item.addEventListener("click", () => {
                menuOpenClose();
            });
        });
    }

    // FUNCTION TO EXTRACT DATA FROM JSON FILES
    const getData = async function (url) {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(
                `Ошибка по адресу ${url}, статус ошибки ${response.status}!`
            );
        }
        return await response.json();
    };

    // OUTPUT OF PROJECTS ON THE PAGE
    function addProject({
        name,
        link,
        image,
        alt
    }) {
        const project = document.createElement("li");
        if (listProject.childElementCount % 2 == 0) {
            project.className = "portfolio__list-item wow bounceInLeft";
        } else {
            project.className = "portfolio__list-item wow bounceInRight";
        }

        // project.className = "portfolio__list-item wow bounceInLeft"; // lightSpeedInLeft bounceInLeft zoomInDown
        // project.setAttribute("data-wow-delay", `2s`);
        const imageJpg = image.replace("webp", "jpg");
        project.insertAdjacentHTML(
            "beforeend",
            `
            <article class="portfolio-proect">
                <a href="${link}">
                    <picture>
                        <source srcset="${image}" type="image/webp">
                        <img class="portfolio-layout" src="${imageJpg}" alt="${alt}">
                    </picture>
                </a>
                <a class="portfolio__link" href="${link}">${name}</a>
            </article>
            `
        );
        listProject.insertAdjacentElement("beforeend", project);
    }

    // OUTPUT OF SKILLS ON THE PAGE
    function addSkill({
        name,
        rating
    }) {
        const skill = document.createElement("li");
        skill.className = "skill wow bounceInDown"; // flip rubberBand jello bounceInDown
        skill.setAttribute("data-wow-delay", `${listSkill.childElementCount / 4}s`)
        // skill.insertAdjacentHTML("beforeend", `
        // <img src="images/${name.toLowerCase()}-logo.svg" alt="${name.toLowerCase()}"
        //     class="skill__logo">
        // <p class="skill__name">${name}</p>
        // <img src="images/rating-${rating}.svg" alt="stars"
        //     class="skill__rating">
        // `);
        skill.insertAdjacentHTML("beforeend", `
        <img src="images/${name.toLowerCase()}-logo.svg" alt="${name.toLowerCase()}"
            class="skill__logo">
        <p class="skill__name">${name}</p>
        `);
        listSkill.insertAdjacentElement("beforeend", skill);
    }

    // SWITCH LANGUAGE
    function switchLanguage(item, lang) {
        if (item.classList.contains("selected")) {
            return;
        }
        bannerButton[1].classList.toggle("selected");
        bannerButton[0].classList.toggle("selected");
        headerButton[0].classList.toggle("selected");
        headerButton[1].classList.toggle("selected");
        document.title = languageTexts[0].title;
        for (let i = 0; i < navTexts.length; i++) {
            navTexts[i].innerHTML = languageTexts[lang].nav[i];
        }
        for (let i = 0; i < blockTitles.length; i++) {
            blockTitles[i].innerHTML = languageTexts[lang].block_titles[i];
        }
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].innerHTML = languageTexts[lang].block_text[i];
        }
        buttonSend.innerHTML = languageTexts[lang].button_send;
    }

    // EXTRACTION OF PROJECTS DATA
    getData("data/projects.json").then(function (data) {
        data.forEach(addProject);
    });

    // EXTRACTING TEXTS
    getData("data/languages.json").then(function (data) {
        languageTexts = data;
    });

    // EXTRACTING OF SKILLS DATA
    getData("data/skills.json").then(function (data) {
        data.forEach(addSkill);
    });

    // SWITCH LANGUAGE
    // RUSSIAN LANGUAGE
    bannerButton[0].addEventListener("click", event => {
        switchLanguage(event.target, 1);
    });

    // ENGLISH LANGUAGE
    bannerButton[1].addEventListener("click", event => {
        switchLanguage(event.target, 0);
    });

    // RUSSIAN LANGUAGE
    headerButton[0].addEventListener("click", event => {
        switchLanguage(event.target, 1);
    });

    // ENGLISH LANGUAGE
    headerButton[1].addEventListener("click", event => {
        switchLanguage(event.target, 0);
    });

    // SWITCH OF ELEMENTS IN HEADER WHEN PAGE SCROLL
    window.addEventListener("scroll", () => {
        // if (nav.classList.contains("visibile")) {
        //     if (y == 0) {
        //         y = window.scrollY;
        //     }
        //     document.body.classList.add("scrollDisabled");
        //     document.body.style.marginTop = `${-y}px`;
        //     return;
        // } else {
        //     console.log("ggggg");
        //     document.body.classList.remove("scrollDisabled");
        //     document.body.style.marginTop = `0px`;
        // }
        nav__link.forEach((item, index) => {
            if (document.querySelector(item.hash).offsetTop - window.pageYOffset <= 200) {
                nav__link.forEach(elem => {
                    elem.classList.remove("selected")
                });
                nav__link[index].classList.add("selected");
            }
            if (document.querySelector("#contacts").offsetTop - window.pageYOffset <= window.outerHeight / 2) {
                nav__link.forEach(elem => {
                    elem.classList.remove("selected")
                });
                nav__link[index].classList.add("selected");
            }
        });
    });

});