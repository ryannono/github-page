var darkThemePreference = window.matchMedia("(prefers-color-scheme: dark)");
var darkmodeState = localStorage.getItem("darkmode");
var currentTheme = "light";
// check locale storage and system preferences for page theme
if ((darkThemePreference.matches || darkmodeState === "enabled") && darkmodeState != "disabled") {
    var style = document.getElementById("lightmode");
    style.href = "styles_dark.css";
    style.id = "darkmode";
    currentTheme = "dark";
}
