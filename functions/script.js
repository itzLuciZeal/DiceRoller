const availableDiceSkins = {
    monotonic: {
        baseName: "Monotonic",
        labelSpanID: "monotonic-diceskin",
        numberOne: { skinpath: "../assets/dice-skins/monotonic/dice-no1.png" },
        numberTwo: { skinpath: "../assets/dice-skins/monotonic/dice-no2.png" },
        numberThree: { skinpath: "../assets/dice-skins/monotonic/dice-no3.png" },
        numberFour: { skinpath: "../assets/dice-skins/monotonic/dice-no4.png" },
        numberFive: { skinpath: "../assets/dice-skins/monotonic/dice-no5.png" },
        numberSix: { skinpath: "../assets/dice-skins/monotonic/dice-no6.png" },
        rollContent: {
            1: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberOneCode'>Number One</span>",
            2: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberTwoCode'>Number Two</span>",
            3: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberThreeCode'>Number Three</span>!",
            4: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberFourCode'>Number Four</span>!",
            5: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberFiveCode'>Number Five</span>!!",
            6: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberSixCode'>Number Six</span>!!!"
        }
    },
    realdice: {
        baseName: "Real Dice",
        labelSpanID: "real-dice-diceskin",
        1: "One Dot",
        2: "Two Dots",
        3: "Three Dots",
        4: "Four Dots",
        5: "Five Dots",
        6: "Six Dots",
    },
    drStone: {
        baseName: "Dr. Stone",
        labelSpanID: "dr-stone-diceskin",
        1: "One Dot",
        2: "Two Dots",
        3: "Three Dots",
        4: "Four Dots",
        5: "Five Dots",
        6: "Six Dots",
    },
    danganronpaV1: {
        baseName: "Danganronpa V1",
        labelSpanID: "danganronpav1-diceskin",
        1: "One Dot",
        2: "Two Dots",
        3: "Three Dots",
        4: "Four Dots",
        5: "Five Dots",
        6: "Six Dots",
    },
    danganronpaV2: {
        baseName: "Danganronpa V2",
        labelSpanID: "danganronpav2-diceskin",
        1: "One Dot",
        2: "Two Dots",
        3: "Three Dots",
        4: "Four Dots",
        5: "Five Dots",
        6: "Six Dots",
    },
    danganronpaV3: {
        baseName: "Danganronpa V3",
        labelSpanID: "danganronpav3-diceskin",
        1: "One Dot",
        2: "Two Dots",
        3: "Three Dots",
        4: "Four Dots",
        5: "Five Dots",
        6: "Six Dots",
    }
}

const rollDiceBtn = document.querySelector('button#rollDice');
const result = document.querySelector('label#result');
const diceCube = document.querySelector('.cube');
const notificationDiv = document.querySelector('div#notification');
const textNotifSpan = document.querySelector('span#notifTxt');
const defaultDiceSkin = "monotonic";
const defaultRollDiceTxt = rollDiceBtn.textContent;
let currentDiceSkin = defaultDiceSkin;
let currentRotation = "rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
let currentRollNum;

// SAVE CHANGES OF DICE SKIN
const saveDiceSkinBTN = document.querySelector('button.saveChanges#save-bDice');
// RESET CHANGES OF DICE SKIN
const resetDiceSkinBTN = document.querySelector('button.resetChanges#reset-bDice');

function updateNotifUI(activeValue, currentNum) {
    const rollContents = availableDiceSkins[activeValue].rollContent;
    return rollContents[currentNum];
}

function updateDiceSkinUI(activeValue) {
    const diceSkinsRadios = document.querySelectorAll('input[name="diceSkin"]');

    diceSkinsRadios.forEach(radio => {
        const value = radio.value;
        const dictDiceSkin = availableDiceSkins[value];
        const baseName = dictDiceSkin.baseName;
        const labelRadio = document.querySelector(`span#${dictDiceSkin.labelSpanID}`);
        if (!labelRadio) return;

        if (value === activeValue) {
            radio.checked = true;
            labelRadio.textContent = `${baseName} (Using)`;
        } else {
            labelRadio.textContent = baseName;
        }
    });
}

function applyDiceSkin(value) {
    const dictDiceSkin = availableDiceSkins[value];
    const diceFaces = document.querySelectorAll('div.face');

    diceFaces.forEach(face => {
        const cubeFace = document.querySelector(`div#${face.id}`);
        const faceData = dictDiceSkin[face.id];
        cubeFace.style.backgroundImage = `url('${faceData.skinpath}')`;
    });
}

updateDiceSkinUI(currentDiceSkin);
applyDiceSkin(currentDiceSkin);

function getRotation(targetX, targetY, targetZ, targetNum) {
    const isFour = Math.floor(Math.random() * 6) + 1 === 4 ? -1 : 1;
    const isFive = Math.floor(Math.random() * 6) + 1 === 5 ? -1 : 1;
    const isSix = Math.floor(Math.random() * 6) + 1 === 6? -1 : 1;
    const extraSpins = () => (Math.floor(Math.random() * 3) + 6) * 360;

    return `rotateX(${targetX + extraSpins() * targetNum - isSix}deg)
            rotateY(${targetY + extraSpins() * targetNum - isFive}deg)
            rotateZ(${targetZ + extraSpins() * targetNum - isFour}deg)
            translateZ(1.1rem) scale3d(1.2, 1.2, 1.2)`;
}

rollDiceBtn.addEventListener('click', () => {
    let rollNum = Math.floor(Math.random() * 6) + 1;
    currentRollNum = rollNum;
    notificationDiv.style.opacity = 0;
    notificationDiv.style.transform = 'translateY(-7rem)';
    
    const faces = {
        1: [0, 0, 0],
        2: [0, -90, 0],
        3: [-90, 0, 0],
        4: [90, 0, 0],
        5: [0, 90, 0],
        6: [180, 0, 0]
    }

    const [x, y, z] = faces[rollNum];
    currentRotation = getRotation(x, y, z, rollNum)
    diceCube.style.transform = currentRotation;
    rollDiceBtn.disabled = true;
    rollDiceBtn.innerHTML = '<strong>Rolling...</strong>';
    rollDiceBtn.classList.add('animate');
});

diceCube.addEventListener('transitionend', (event) => {
    if (event.propertyName === 'transform') {
        notificationDiv.innerHTML = updateNotifUI(currentDiceSkin, currentRollNum);
        diceCube.style.transform = currentRotation.replace(/scale3d\(.*?\)/, 'scale3d(1, 1, 1)');
        rollDiceBtn.disabled = false;
        rollDiceBtn.classList.remove('animate');
        rollDiceBtn.innerHTML = defaultRollDiceTxt;
        notificationDiv.style.opacity = 1;
        notificationDiv.style.transform = 'translateY(-6rem)';
    }
});
