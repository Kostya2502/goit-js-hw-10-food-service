import "./css/styles.css";
import menu from "./menu.json";
import cardsTemplate from './templates/cardsTemplate.hbs';

const refs = {
    body: document.querySelector('body'),
    menuUl: document.querySelector('.js-menu'),
    input: document.querySelector('#theme-switch-toggle')
}

refs.menuUl.innerHTML = cardsTemplate(menu)

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme'
};

if (localStorage.getItem('theme')) {
    refs.body.classList.add(Theme.DARK)
    refs.input.checked = true
}

refs.input.addEventListener('change', onThemeSwitch)

function onThemeSwitch() {
    if (refs.input.checked) {
        refs.body.classList.add(Theme.DARK)
        refs.body.classList.remove(Theme.LIGHT)
        localStorage.setItem('theme', 'DARK')
    }
    else {
        refs.body.classList.remove(Theme.DARK)
        refs.body.classList.add(Theme.LIGHT)
        localStorage.removeItem('theme')
    }
}




