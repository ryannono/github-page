var darkThemePreference = window.matchMedia("(prefers-color-scheme: dark)");
var darkmodeState = localStorage.getItem("darkmode");
var initial_state = "light";
// check locale storage and system preferences for page theme
if (darkThemePreference.matches || darkmodeState === "enabled") {
    initial_state = "dark";
    var style = document.getElementById("lightmode");
    style.href = "styles_dark.css";
    style.id = "darkmode";
}
