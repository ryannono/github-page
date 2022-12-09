/**
 * It takes a string as an argument, and if the string is 'dark', it sets the darkmode toggle to 'on'
 * and the lightmode toggle to 'off', and vice versa
 * @param {string} themeToMatch - The theme that the toggle should match.
 */
function swapToggles(themeToMatch: string): void {
  const darkmodeToggle = document.getElementById('dark') as HTMLImageElement;
  const lightmodeToggle = document.getElementById('light') as HTMLImageElement;
  const toggleText = document.getElementById(
    'toggle_text'
  ) as HTMLParagraphElement;

  if (themeToMatch === 'dark') {
    darkmodeToggle.src = 'Images/DarkMode-on.svg';
    lightmodeToggle.src = 'Images/LightMode-off.svg';
    toggleText.textContent = 'Toggle to light mode';
  } else {
    darkmodeToggle.src = 'Images/DarkMode-off.svg';
    lightmodeToggle.src = 'Images/LightMode-on.svg';
    toggleText.textContent = 'Toggle to dark mode';
  }
}

/**
 * It swaps the stylesheet to the lightmode.css file, changes the id of the stylesheet to lightmode,
 * and sets the localStorage item to disabled
 */
function swapToLight(): void {
  const style = document.getElementById('darkmode') as HTMLLinkElement;
  style.href = 'styles/lightmode.css';
  style.id = 'lightmode';

  localStorage.setItem('darkmode', 'disabled');
  currentTheme = 'light';
  swapToggles(currentTheme);
}

/**
 * It swaps the stylesheet to the dark mode stylesheet and sets the localStorage item to 'enabled'
 */
function swapToDark(): void {
  const style = document.getElementById('lightmode') as HTMLLinkElement;
  style.href = 'styles/darkmode.css';
  style.id = 'darkmode';

  localStorage.setItem('darkmode', 'enabled');
  currentTheme = 'dark';
  swapToggles(currentTheme);
}

/**
 * If the trigger is the dark theme button and the current theme is light, swap to dark. If the trigger
 * is the light theme button and the current theme is dark, swap to light
 * @param {HTMLElement} trigger - HTMLElement - the element that was clicked
 */
function themeSwap(trigger: HTMLElement): void {
  if (trigger.id === 'dark' && currentTheme === 'light') {
    swapToDark();
  } else if (trigger.id === 'light' && currentTheme === 'dark') {
    swapToLight();
  }
}

/**
 * "Add an event listener to all elements with a given class name."
 *
 * The function takes three arguments:
 *
 * className: The class name of the elements you want to add the event listener to.
 * eventName: The name of the event you want to listen for.
 * funtionToExecute: The function you want to execute when the event is triggered.
 * The function returns nothing
 * @param {string} className - The class name of the element you want to add the event listener to.
 * @param {string} eventName - The name of the event you want to listen for.
 * @param {Function} funtionToExecute - The function that will be executed when the event is triggered.
 */
function addClassListener(
  className: string,
  eventName: string,
  funtionToExecute: Function
): void {
  const targetClass = document.getElementsByClassName(
    className
  ) as HTMLCollectionOf<HTMLElement>;

  for (let i = 0; i < targetClass.length; i++) {
    targetClass[i].addEventListener(eventName, () =>
      funtionToExecute(targetClass[i])
    );
  }
}

/**
 * If the viewport is greater than 1240px, the profile picture will be the SVG version, otherwise it
 * will be the PNG version
 */
function swapProfilePic(): void {
  const resizedView = window.matchMedia(
    '(min-width: 1240px)'
  ) as MediaQueryList;
  const profilePic = document.getElementById('profile_pic') as HTMLImageElement;

  if (resizedView.matches) {
    profilePic.src = 'Images/Profile_Picture.svg';
  } else {
    profilePic.src = 'Images/Profile_Picture_Mobile.png';
  }
}

/**
 * If the current theme is dark, then the download button's href attribute will be set to the dark
 * theme resume, otherwise it will be set to the light theme resume
 */
function themedCVDownload(): void {
  if (currentTheme === 'dark') {
    downloadButton.href =
      'https://github.com/ryannono/Resume/raw/main/Ryan-Nono-Resume-Winter2023-Dark_compressed.pdf';
  } else {
    downloadButton.href =
      'https://github.com/ryannono/Resume/raw/main/Ryan-Nono-Resume-Winter2023-Light_compressed.pdf';
  }
}

/* Checking if the window is of desktop size on first load, and on window resize; if it is swap image to
desktop optimised one. */
swapProfilePic();
window.addEventListener('resize', swapProfilePic);

/* Checking if the current theme is dark, and if it is, it swaps the toggles to the dark theme.
It then adds an event listener to all elements with the class 'mode_toggle' that listens for a click
event,
and when it is triggered, it executes the themeSwap function. */
if (currentTheme === 'dark') {
  swapToggles(currentTheme);
}
addClassListener('mode_toggle', 'click', themeSwap);

/* Getting the element with the id 'resume_button' and casting it as a HTMLLinkElement.
It then adds an event listener to the element that listens for a click event, and when it is
triggered,
it executes the themedCVDownload function. */
const downloadButton = document.getElementById(
  'resume_button'
) as HTMLLinkElement;
downloadButton.addEventListener('click', themedCVDownload);
