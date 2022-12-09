"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentTheme = void 0;
const darkThemePreference = window.matchMedia('(prefers-color-scheme: dark)');
const darkmodeState = localStorage.getItem('darkmode');
exports.currentTheme = 'light';
if (darkmodeState === 'dark system preference' ||
    darkmodeState === 'enabled' ||
    (darkThemePreference.matches && darkmodeState !== 'disabled')) {
    const style = document.getElementById('lightmode');
    style.href = 'styles/darkmode.css';
    style.id = 'darkmode';
    exports.currentTheme = 'dark';
    localStorage.setItem('darkmode', 'dark system preference');
}
