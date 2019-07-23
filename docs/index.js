"use strict";
onload = () => document.querySelectorAll("section").forEach(addEventListeners);
const addEventListeners = (element) => {
    element.children[0].addEventListener("click", makeVisible);
    element.children[1].addEventListener("click", makeInvisible);
};
const makeVisible = (event) => {
    const section = event.srcElement
        .parentElement;
    const article = section.children[1];
    article.style.opacity = "1";
    article.style.pointerEvents = "auto";
};
const makeInvisible = (event) => {
    const src = event.srcElement;
    src.style.opacity = "0";
    src.style.pointerEvents = "none";
};
