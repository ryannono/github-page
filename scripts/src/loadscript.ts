/* Checking if the user has dark mode enabled on their system. If they do, it will load the dark mode
stylesheet. */
const darkThemePreference = window.matchMedia(
  '(prefers-color-scheme: dark)'
) as MediaQueryList;
const darkmodeState = localStorage.getItem('darkmode');
export let currentTheme = 'light';

if (
  darkmodeState === 'dark system preference' ||
  darkmodeState === 'enabled' ||
  (darkThemePreference.matches && darkmodeState !== 'disabled')
) {
  const style = document.getElementById('lightmode') as HTMLLinkElement;

  style.href = 'styles/darkmode.css';
  style.id = 'darkmode';
  currentTheme = 'dark';
  localStorage.setItem('darkmode', 'dark system preference');
}
