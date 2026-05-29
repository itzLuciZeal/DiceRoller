const isGitHubPages = window.location.hostname.includes("github.io");
const basePath = isGitHubPages ? "/DiceRoller" : "";

const availableDiceSkins = {
    monotonic: {
        baseName: "Monotonic",
        labelSpanID: "monotonic-diceskin",
        numberOne: { skinpath: `${basePath}/assets/dice-skins/monotonic/dice-no1.png` },
        numberTwo: { skinpath: `${basePath}/assets/dice-skins/monotonic/dice-no2.png` },
        numberThree: { skinpath: `${basePath}/assets/dice-skins/monotonic/dice-no3.png` },
        numberFour: { skinpath: `${basePath}/assets/dice-skins/monotonic/dice-no4.png` },
        numberFive: { skinpath: `${basePath}/assets/dice-skins/monotonic/dice-no5.png` },
        numberSix: { skinpath: `${basePath}/assets/dice-skins/monotonic/dice-no6.png` },
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
        numberOne: { skinpath: `${basePath}/assets/dice-skins/realdice/realdice-no1.png` },
        numberTwo: { skinpath: `${basePath}/assets/dice-skins/realdice/realdice-no2.png` },
        numberThree: { skinpath: `${basePath}/assets/dice-skins/realdice/realdice-no3.png` },
        numberFour: { skinpath: `${basePath}/assets/dice-skins/realdice/realdice-no4.png` },
        numberFive: { skinpath: `${basePath}/assets/dice-skins/realdice/realdice-no5.png` },
        numberSix: { skinpath: `${basePath}/assets/dice-skins/realdice/realdice-no6.png` },
        rollContent: {
            1: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberOneCode'>Number One</span>",
            2: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberTwoCode'>Number Two</span>",
            3: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberThreeCode'>Number Three</span>!",
            4: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberFourCode'>Number Four</span>!",
            5: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberFiveCode'>Number Five</span>!!",
            6: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberSixCode'>Number Six</span>!!!"
        }
    },
    drStone: {
        baseName: "Dr. Stone",
        labelSpanID: "dr-stone-diceskin",
        numberOne: { skinpath: `${basePath}/assets/dice-skins/drstone/xeno-wingfield.png` },
        numberTwo: { skinpath: `${basePath}/assets/dice-skins/drstone/stanley-snyder.png` },
        numberThree: { skinpath: `${basePath}/assets/dice-skins/drstone/gen-asagiri.png` },
        numberFour: { skinpath: `${basePath}/assets/dice-skins/drstone/ryusui-nanami.png` },
        numberFive: { skinpath: `${basePath}/assets/dice-skins/drstone/sai-nanami.png` },
        numberSix: { skinpath: `${basePath}/assets/dice-skins/drstone/senku-ishigami.png` },
        rollContent: {
            1: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberOneCode'>Dr. Xeno</span>",
            2: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberTwoCode'>Stanley Sniper</span>",
            3: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberThreeCode'>Gen Mentalist</span>!",
            4: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberFourCode'>Captain Ryusui</span>!",
            5: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberFiveCode'>Math Prodigy Sai</span>!!",
            6: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberSixCode'>Dr. Senku</span>!!!"
        }
    },
    danganronpaV1: {
        baseName: "Danganronpa V1",
        labelSpanID: "danganronpav1-diceskin",
        numberOne: { skinpath: `${basePath}/assets/dice-skins/danganronpav1/celestia-ludenberg.png` },
        numberTwo: { skinpath: `${basePath}/assets/dice-skins/danganronpav1/byakuya-togami.png` },
        numberThree: { skinpath: `${basePath}/assets/dice-skins/danganronpav1/toko-fukawa.png` },
        numberFour: { skinpath: `${basePath}/assets/dice-skins/danganronpav1/makoto-naegi.png` },
        numberFive: { skinpath: `${basePath}/assets/dice-skins/danganronpav1/kyoko-kirigiri.png` },
        numberSix: { skinpath: `${basePath}/assets/dice-skins/danganronpav1/junko-enoshima.png` },
        rollContent: {
            1: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberOneCode'>Celestia Ludenberg</span>",
            2: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberTwoCode'>Byakuya Togami</span>",
            3: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberThreeCode'>Toko Fukawa</span>!",
            4: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberFourCode'>Makoto Naegi</span>!",
            5: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberFiveCode'>Kyoko Kirigiri</span>!!",
            6: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberSixCode'>Junko Enoshima</span>!!!"
        }
    },
    danganronpaV2: {
        baseName: "Danganronpa V2",
        labelSpanID: "danganronpav2-diceskin",
        numberOne: { skinpath: `${basePath}/assets/dice-skins/danganronpav2/kazuichi-soda.png` },
        numberTwo: { skinpath: `${basePath}/assets/dice-skins/danganronpav2/sonia-nevermind.png` },
        numberThree: { skinpath: `${basePath}/assets/dice-skins/danganronpav2/mikan-tsumiki.png` },
        numberFour: { skinpath: `${basePath}/assets/dice-skins/danganronpav2/chiaki-nanami.png` },
        numberFive: { skinpath: `${basePath}/assets/dice-skins/danganronpav2/hajime-hinata.png` },
        numberSix: { skinpath: `${basePath}/assets/dice-skins/danganronpav2/nagito-komaeda.png` },
        rollContent: {
            1: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberOneCode'>Kazuichi Soda</span>",
            2: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberTwoCode'>Sonia! Nevermind...</span>",
            3: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberThreeCode'>Mikan Tsumiki</span>!",
            4: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberFourCode'>Chiaki Nanami</span>!",
            5: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberFiveCode'>Hajime Hinata</span>!!",
            6: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberSixCode'><b>Nagito Komaeda</b></span>!!!"
        }
    },
    danganronpaV3: {
        baseName: "Danganronpa V3",
        labelSpanID: "danganronpav3-diceskin",
        numberOne: { skinpath: `${basePath}/assets/dice-skins/danganronpav3/kaede-akamatsu.png` },
        numberTwo: { skinpath: `${basePath}/assets/dice-skins/danganronpav3/kaito-momota.png` },
        numberThree: { skinpath: `${basePath}/assets/dice-skins/danganronpav3/maki-harukawa.png` },
        numberFour: { skinpath: `${basePath}/assets/dice-skins/danganronpav3/miu-iruma.png` },
        numberFive: { skinpath: `${basePath}/assets/dice-skins/danganronpav3/shuichi-saihara.png` },
        numberSix: { skinpath: `${basePath}/assets/dice-skins/danganronpav3/kokichi-ouma.png` },
        rollContent: {
            1: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberOneCode'>Kaede Akamatsu</span>",
            2: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberTwoCode'>Kaito Momota</span>",
            3: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberThreeCode'>Maki Roll</span>!",
            4: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberFourCode'>Miu Iruma</span>!",
            5: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberFiveCode'>... Shuichi Saihara</span>!!",
            6: "<span class='userAccentCode' id='notifTxt'>You Got <span id='numberSixCode'>... <b>Kokichi Ouma</b></span>!!!"
        }
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

saveDiceSkinBTN.addEventListener('click', () => {
    notificationDiv.style.opacity = 0;
    notificationDiv.style.transform = 'translateY(-7rem)';
    const selectedDiceSkinRadio = document.querySelector('input[name="diceSkin"]:checked');
    if (selectedDiceSkinRadio) {
        currentDiceSkin = selectedDiceSkinRadio.value;
        updateDiceSkinUI(currentDiceSkin);
        applyDiceSkin(currentDiceSkin);
    }
});

resetDiceSkinBTN.addEventListener('click', () => {
    notificationDiv.style.opacity = 0;
    notificationDiv.style.transform = 'translateY(-7rem)';
    currentDiceSkin = defaultDiceSkin;
    updateDiceSkinUI(currentDiceSkin);
    applyDiceSkin(currentDiceSkin);
});

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
