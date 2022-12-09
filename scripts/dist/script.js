"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loadscript_1 = require("./loadscript");
function swapToggles(themeToMatch) {
    const darkmodeToggle = document.getElementById('dark');
    const lightmodeToggle = document.getElementById('light');
    const toggleText = document.getElementById('toggle_text');
    if (themeToMatch === 'dark') {
        darkmodeToggle.src = 'Images/DarkMode-on.svg';
        lightmodeToggle.src = 'Images/LightMode-off.svg';
        toggleText.textContent = 'Toggle to light mode';
    }
    else {
        darkmodeToggle.src = 'Images/DarkMode-off.svg';
        lightmodeToggle.src = 'Images/LightMode-on.svg';
        toggleText.textContent = 'Toggle to dark mode';
    }
}
function swapToLight() {
    const style = document.getElementById('darkmode');
    style.href = 'styles/lightmode.css';
    style.id = 'lightmode';
    localStorage.setItem('darkmode', 'disabled');
    theme = 'light';
    swapToggles(theme);
}
function swapToDark() {
    const style = document.getElementById('lightmode');
    style.href = 'styles/darkmode.css';
    style.id = 'darkmode';
    localStorage.setItem('darkmode', 'enabled');
    theme = 'dark';
    swapToggles(theme);
}
function themeSwap(trigger) {
    if (trigger.id === 'dark' && theme === 'light') {
        swapToDark();
    }
    else if (trigger.id === 'light' && theme === 'dark') {
        swapToLight();
    }
}
function addClassListener(className, eventName, funtionToExecute) {
    const targetClass = document.getElementsByClassName(className);
    for (let i = 0; i < targetClass.length; i++) {
        targetClass[i].addEventListener(eventName, () => funtionToExecute(targetClass[i]));
    }
}
function swapProfilePic() {
    const resizedView = window.matchMedia('(min-width: 1240px)');
    const profilePic = document.getElementById('profile_pic');
    if (resizedView.matches) {
        profilePic.src = 'Images/Profile_Picture.svg';
    }
    else {
        profilePic.src = 'Images/Profile_Picture_Mobile.png';
    }
}
let theme = loadscript_1.currentTheme;
function themedCVDownload() {
    if (theme === 'dark') {
        downloadButton.href =
            'https://github.com/ryannono/Resume/raw/main/Ryan-Nono-Resume-Winter2023-Dark_compressed.pdf';
    }
    else {
        downloadButton.href =
            'https://github.com/ryannono/Resume/raw/main/Ryan-Nono-Resume-Winter2023-Light_compressed.pdf';
    }
}
swapProfilePic();
window.addEventListener('resize', swapProfilePic);
if (theme === 'dark') {
    swapToggles(theme);
}
addClassListener('mode_toggle', 'click', themeSwap);
const downloadButton = document.getElementById('resume_button');
downloadButton.addEventListener('click', themedCVDownload);
