"use strict";
const darkThemePreference = window.matchMedia('(prefers-color-scheme: dark)');
const darkmodeState = localStorage.getItem('darkmode');
let currentTheme = 'light';
if (darkmodeState === 'dark system preference' ||
    darkmodeState === 'enabled' ||
    (darkThemePreference.matches && darkmodeState !== 'disabled')) {
    const style = document.getElementById('lightmode');
    style.href = 'styles/darkmode.css';
    style.id = 'darkmode';
    currentTheme = 'dark';
    localStorage.setItem('darkmode', 'dark system preference');
}
