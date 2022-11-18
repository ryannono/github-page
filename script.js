function swapToLight() {
    var style = document.getElementById("darkmode");
    if (style) {
        style.href = "styles_light.css";
        style.id = "lightmode";
        var darkmodeToggle_1 = document.getElementById("dark");
        darkmodeToggle_1.src = "Images/DarkMode-off.svg";
        var lightmodeToggle_1 = document.getElementById("light");
        lightmodeToggle_1.src = "Images/LightMode-on.svg";
        var toggleText = document.getElementById("toggle_text");
        toggleText.textContent = "Toggle to dark mode";
    }
}
function swapToDark() {
    var style = document.getElementById("lightmode");
    if (style) {
        style.href = "styles_dark.css";
        style.id = "darkmode";
        var darkmodeToggle_2 = document.getElementById("dark");
        darkmodeToggle_2.src = "Images/DarkMode-on.svg";
        var lightmodeToggle_2 = document.getElementById("light");
        lightmodeToggle_2.src = "Images/LightMode-off.svg";
        var toggleText = document.getElementById("toggle_text");
        toggleText.textContent = "Toggle to light mode";
    }
}
// accomplish what loadscript couldn't (because of placement in html)
if (initial_state === "dark") {
    var darkmodeToggle_3 = document.getElementById("dark");
    darkmodeToggle_3.src = "Images/DarkMode-on.svg";
    var lightmodeToggle_3 = document.getElementById("light");
    lightmodeToggle_3.src = "Images/LightMode-off.svg";
    var toggleText = document.getElementById("toggle_text");
    toggleText.textContent = "Toggle to light mode";
}
// on button click for each respective toggle switch swap
var darkmodeToggle = document.getElementById("dark");
var lightmodeToggle = document.getElementById("light");
// head was declared in loading script -> refers to html "head" element
// swapToDark change the theme to dark theme (see loadingscript)
darkmodeToggle.addEventListener("click", function () {
    var style = document.getElementById("lightmode");
    if (style) {
        initial_state = null;
        swapToDark();
        localStorage.setItem("darkmode", "enabled");
    }
});
lightmodeToggle.addEventListener("click", function () {
    var style = document.getElementById("darkmode");
    if (style) {
        initial_state = null;
        swapToLight();
        localStorage.setItem("darkmode", "disabled");
    }
});
