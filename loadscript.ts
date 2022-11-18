

const darkThemePreference = window.matchMedia("(prefers-color-scheme: dark)") as MediaQueryList;
let darkmodeState = localStorage.getItem("darkmode");
let initial_state: string = "light";

// check locale storage and system preferences for page theme
if (darkThemePreference.matches || darkmodeState === "enabled") {
    initial_state = "dark";

    let style = document.getElementById("lightmode") as HTMLLinkElement;
    
    style.href = "styles_dark.css";
    style.id = "darkmode";
}