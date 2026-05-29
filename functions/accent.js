const availableAccents = {
    purple: { "--user-clr-accent": "var(--purple-clr-accent)" },
    lightblue: { "--user-clr-accent": "var(--lightblue-clr-accent)" },
    navyblue: { "--user-clr-accent": "var(--blue-clr-accent)" },
    orange: { "--user-clr-accent": "var(--orange-clr-accent)" },
    green: { "--user-clr-accent": "var(--green-clr-accent)" },
    pink: { "--user-clr-accent": "var(--pink-clr-accent)" },
    red: { "--user-clr-accent": "var(--red-clr-accent)" },
    yellow: { "--user-clr-accent": "var(--yellow-clr-accent)" }
};

const accentDisplayNames = {
    purple: "Pastel Purple",
    lightblue: "Pastel Light Blue",
    navyblue: "Pastel Navy Blue",
    orange: "Pastel Orange",
    green: "Pastel Green",
    pink: "Pastel Pink",
    red: "Pastel Red",
    yellow: "Pastel Yellow"
};

const defaultAccent = "purple";
let currentAccent = defaultAccent;

// SAVE CHANGES OF ACCENT
const saveAccentBTN = document.querySelector('button.saveChanges#save-bac');
// RESET CHANGES OF ACCENT
const resetAccentBTN = document.querySelector('button.resetChanges#reset-bac');

function updateAccentUI(activeValue) {
    const accentRadios = document.querySelectorAll('input[name="accent"]');

    accentRadios.forEach(radio => {
        const value = radio.value;
        const labelRadio = document.querySelector(`span#pastel-${value}`);
        if (!labelRadio) return;

        const baseName = accentDisplayNames[value];

        if (value === activeValue) {
            radio.checked = true;
            labelRadio.textContent = `${baseName} (Using)`;
        } else {
            labelRadio.textContent = baseName;
        }
    });
}

function applyAccent(accentName) {
    const accentSelected = availableAccents[accentName];
    if (!accentSelected) return;

    for (const [property, value] of Object.entries(accentSelected)) {
        document.documentElement.style.setProperty(property, value);
    }
}

saveAccentBTN.addEventListener('click', () => {
    const selectedRadio = document.querySelector('input[name="accent"]:checked');
    if (selectedRadio) {
        currentAccent = selectedRadio.value;
        updateAccentUI(currentAccent);
        applyAccent(currentAccent);
    }
});

resetAccentBTN.addEventListener('click', () => {
    currentAccent = defaultAccent;
    updateAccentUI(currentAccent);
    applyAccent(currentAccent);
});

updateAccentUI(currentAccent);
applyAccent(currentAccent);