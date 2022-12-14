"use strict";
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
    currentTheme = 'light';
    swapToggles(currentTheme);
}
function swapToDark() {
    const style = document.getElementById('lightmode');
    style.href = 'styles/darkmode.css';
    style.id = 'darkmode';
    localStorage.setItem('darkmode', 'enabled');
    currentTheme = 'dark';
    swapToggles(currentTheme);
}
function themeSwap(trigger) {
    if (trigger.id === 'dark' && currentTheme === 'light') {
        swapToDark();
    }
    else if (trigger.id === 'light' && currentTheme === 'dark') {
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
function themedCVDownload() {
    if (currentTheme === 'dark') {
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
if (currentTheme === 'dark') {
    swapToggles(currentTheme);
}
addClassListener('mode_toggle', 'click', themeSwap);
const downloadButton = document.getElementById('resume_button');
downloadButton.addEventListener('click', themedCVDownload);
