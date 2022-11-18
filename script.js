function swapToLight(darkmodeToggle, lightmodeToggle, toggleText) {
    if (currentTheme === "dark") {
        var style = document.getElementById("darkmode");
        style.href = "styles_light.css";
        style.id = "lightmode";
        darkmodeToggle.src = "Images/DarkMode-off.svg";
        lightmodeToggle.src = "Images/LightMode-on.svg";
        toggleText.textContent = "Toggle to dark mode";
        localStorage.setItem("darkmode", "disabled");
        currentTheme = "light";
    }
}
function swapToDark(darkmodeToggle, lightmodeToggle, toggleText) {
    if (currentTheme === "light") {
        var style = document.getElementById("lightmode");
        style.href = "styles_dark.css";
        style.id = "darkmode";
        darkmodeToggle.src = "Images/DarkMode-on.svg";
        lightmodeToggle.src = "Images/LightMode-off.svg";
        toggleText.textContent = "Toggle to light mode";
        localStorage.setItem("darkmode", "enabled");
        currentTheme = "dark";
    }
}
// on button click for each respective toggle switch swap
var darkmodeToggle = document.getElementById("dark");
var lightmodeToggle = document.getElementById("light");
var toggleText = document.getElementById("toggle_text");
// accomplish what loadscript couldn't (because of placement in html)
if (currentTheme === "dark") {
    darkmodeToggle.src = "Images/DarkMode-on.svg";
    lightmodeToggle.src = "Images/LightMode-off.svg";
    toggleText.textContent = "Toggle to light mode";
}
// head was declared in loading script -> refers to html "head" element
// swapToDark change the theme to dark theme (see loadingscript)
darkmodeToggle.addEventListener("click", function () {
    swapToDark(darkmodeToggle, lightmodeToggle, toggleText);
});
lightmodeToggle.addEventListener("click", function () {
    swapToLight(darkmodeToggle, lightmodeToggle, toggleText);
});
