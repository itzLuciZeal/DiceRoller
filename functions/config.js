const availableThemes = {
    mocha: {
        "--main-bg-clr": "#1e1e2e",
        "--card-bg-clr": "#313244",
        "--light-bg-clr": "#45475a",
        "--main-txt-clr": "#cdd6f4",
        "--sub-txt-clr": "#bac2de",
        "--muted-txt-clr": "#6c7086",
        "--border-clr": "#7f849c",
        "--purple-clr-accent": "#cba6f7",
        "--lightblue-clr-accent": "#74c7ec",
        "--blue-clr-accent": "#89b4fa",
        "--orange-clr-accent": "#fab387",
        "--green-clr-accent": "#a6e3a1",
        "--pink-clr-accent": "#f5c2e7",
        "--red-clr-accent": "#f38ba8",
        "--yellow-clr-accent": "#f9e2af",
    },
    macchiato: {
        "--main-bg-clr": "#24273a",
        "--card-bg-clr": "#363a4f",
        "--light-bg-clr": "#494d64",
        "--main-txt-clr": "#cad3f5",
        "--sub-txt-clr": "#a5adcb",
        "--muted-txt-clr": "#5b6078",
        "--border-clr": "#6e738d",
        "--purple-clr-accent": "#c6a0f6",
        "--lightblue-clr-accent": "#7dc4e4",
        "--blue-clr-accent": "#8aadf4",
        "--orange-clr-accent": "#f5a97f",
        "--green-clr-accent": "#a6da95",
        "--pink-clr-accent": "#f5bde6",
        "--red-clr-accent": "#ed8796",
        "--yellow-clr-accent": "#eed49f",
    },
    frappe: {
        "--main-bg-clr": "#303446",
        "--card-bg-clr": "#414559",
        "--light-bg-clr": "#51576d",
        "--main-txt-clr": "#c6d0f5",
        "--sub-txt-clr": "#b5bfe2",
        "--muted-txt-clr": "#737994",
        "--border-clr": "#838ba7",
        "--purple-clr-accent": "#ca9ee6",
        "--lightblue-clr-accent": "#85c1dc",
        "--blue-clr-accent": "#8caaee",
        "--orange-clr-accent": "#ef9f76",
        "--green-clr-accent": "#a6d189",
        "--pink-clr-accent": "#f4b8e4",
        "--red-clr-accent": "#e78284",
        "--yellow-clr-accent": "#e5c890",
    },
    tokyonight: {
        "--main-bg-clr": "#1e2030",
        "--card-bg-clr": "#222436",
        "--light-bg-clr": "#2f334d",
        "--main-txt-clr": "#c8d3f5",
        "--sub-txt-clr": "#a9b1d6",
        "--muted-txt-clr": "#565f89",
        "--border-clr": "#3b4261",
        "--purple-clr-accent": "#c099ff",
        "--lightblue-clr-accent": "#86e1fc",
        "--blue-clr-accent": "#82aaff",
        "--orange-clr-accent": "#ff966c",
        "--green-clr-accent": "#c3e88d",
        "--pink-clr-accent": "#fca7ea",
        "--red-clr-accent": "#ff757f",
        "--yellow-clr-accent": "#ffc777",
    }
}

const themesDisplayNames = {
    mocha: "Mocha",
    macchiato: "Macchiato",
    frappe: "Frappe",
    tokyonight: "Tokyonight",
}

const defaultTheme = "mocha";
let currentTheme = defaultTheme;

// SAVE CHANGES OF THEME
const saveThemeBTN = document.querySelector('button.saveChanges#save-bth');
// RESET CHANGES OF THEME
const resetThemeBTN = document.querySelector('button.resetChanges#reset-bth');

function updateThemeUI(activeValue) {
    const themeRadios = document.querySelectorAll('input[name="theme"]');

    themeRadios.forEach(radio => {
        const value = radio.value;
        const labelRadio = document.querySelector(`span#${value}`);
        if (!labelRadio) return;

        const baseName = themesDisplayNames[value];

        if (value === activeValue) {
            radio.checked = true;
            labelRadio.textContent = `${baseName} (Using)`;
        } else {
            labelRadio.textContent = baseName;
        }
    });
}

function applyTheme(themeName) {
    const themeSelected = availableThemes[themeName];
    if (!themeSelected) return;

    let spanCodeCSS = document.querySelectorAll('span.codeCSS');
    let spanPRCodeCSS = document.querySelectorAll('span.pr');
    let spanDegreeCodeCSS = document.querySelectorAll('span.degreeCSSCode');

    for (const [property, value] of Object.entries(themeSelected)) {
        document.documentElement.style.setProperty(property, value);
    }

    if (themeName === "tokyonight") {
        spanCodeCSS.forEach(eachSpanCodeCSS => {
            eachSpanCodeCSS.style.fontStyle = 'normal';
            eachSpanCodeCSS.style.color = 'var(--lightblue-clr-accent)';
        });
        spanPRCodeCSS.forEach(span => { span.classList.add('tokyoNightTheme'); });
        spanDegreeCodeCSS.forEach(span => { span.style.color = 'var(--red-clr-accent)'; });
    }
    else {
        spanCodeCSS.forEach(eachSpanCodeCSS => { eachSpanCodeCSS.style.fontStyle = 'italic'; eachSpanCodeCSS.style.color = ''; });
        spanPRCodeCSS.forEach(span => { span.classList.remove('tokyoNightTheme'); });
        spanDegreeCodeCSS.forEach(span => { span.style.color = 'var(--purple-clr-accent)'; });
    }
}

saveThemeBTN.addEventListener('click', () => {
    const selectedRadio = document.querySelector('input[name="theme"]:checked');
    if (selectedRadio) {
        currentTheme = selectedRadio.value;
        updateThemeUI(currentTheme);
        applyTheme(currentTheme);
    }
});

resetThemeBTN.addEventListener('click', () => {
    currentTheme = defaultTheme;
    updateThemeUI(currentTheme);
    applyTheme(currentTheme);
});

updateThemeUI(currentTheme);
applyTheme(currentTheme);
