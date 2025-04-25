let firstHref = document.getElementById('newsLink');
let secondHref = document.getElementById('companionLink');
let elemf = document.getElementById("newsList");
let elems = document.getElementById("companionList");
let videoPlayer = document.getElementById("videoPlayer");

function openBurgerMenu() {
    let elem = document.getElementById("burgerMenu");
    elem.classList.toggle("opened");
    closeTooltipMenus();
}

function openTooltipMenuf() {
    elemf.classList.toggle("opened");
    elems.classList.remove("opened");
}
function openTooltipMenus() {
    elems.classList.toggle("opened");
    elemf.classList.remove("opened");
}
function closeTooltipMenus() {
    elems.classList.remove("opened");
    elemf.classList.remove("opened");
}

firstHref.addEventListener('mouseover', openTooltipMenuf);
secondHref.addEventListener('mouseover', openTooltipMenus);
videoPlayer.addEventListener('mouseover', closeTooltipMenus);