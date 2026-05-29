const settingIcon = document.querySelector('span#st');
const settingDisplay = document.querySelector('aside#settings');
const exitIcon = document.querySelector('span#exit');
const themes = document.querySelector('span#th');
const contentThemes = document.querySelector('div.dropdown-content#dth');
const accents = document.querySelector('span#ac');
const contentAccents = document.querySelector('div.dropdown-content#dac');
const diceSkins = document.querySelector('span#diceSkins');
const contentDiceSkins = document.querySelector('div.dropdown-content#ddiceSkins');
let isDiceSkinsVisile = false;
let isAccentVisible = false;
let isThemeVisible = false;
let isVisible = false;

settingIcon.addEventListener('click', () => {
    let darkOverlay = document.querySelector('div#overlay');
    if (!isVisible) {
        settingDisplay.classList.add('active');
        isVisible = true;
        darkOverlay.style.display = 'block';
    }
});

exitIcon.addEventListener('click', () => {
    let darkOverlay = document.querySelector('div#overlay');
    if (isVisible) {
        settingDisplay.classList.remove('active');
        isVisible = false;
        darkOverlay.style.display = 'none';
    }
    settingDisplay.addEventListener('transitionend', () => {
        themes.classList.remove('show');
        contentThemes.classList.remove('show');
        accents.classList.remove('show');
        contentAccents.classList.remove('show');
        diceSkins.classList.remove('show');
        contentDiceSkins.classList.remove('show');
    }, {once : true});
});

themes.addEventListener('click', () => {
    if (!isThemeVisible) {
        contentThemes.classList.add('show');
        themes.classList.add('show');
        isThemeVisible = true;
    } else {
        contentThemes.classList.remove('show');
        themes.classList.remove('show');
        isThemeVisible = false;
    }
});

accents.addEventListener('click', () => {
    if (!isAccentVisible) {
        contentAccents.classList.add('show');
        accents.classList.add('show');
        isAccentVisible = true;
    } else {
        contentAccents.classList.remove('show');
        accents.classList.remove('show');
        isAccentVisible = false;
    }
});

diceSkins.addEventListener('click', () => {
    if (!isDiceSkinsVisile) {
        contentDiceSkins.classList.add('show');
        diceSkins.classList.add('show');
        isDiceSkinsVisile = true;
    } else {
        contentDiceSkins.classList.remove('show');
        diceSkins.classList.remove('show');
        isDiceSkinsVisile = false;
    }
});