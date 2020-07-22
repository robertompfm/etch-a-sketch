// GLOBL VARIABLES
let MODE_OPTIONS = ['Classic', 'Rainbow', 'Gradient'];

let mode = MODE_OPTIONS[0];


// REOLUTION FUNCTIONS
function increaseInputValue() {
    let input = document.querySelector('#number-input');
    input.value = (+input.value + 1);
}

function decreaseInputValue() {
    let input = document.querySelector('#number-input');
    input.value = (+input.value - 1);
}

function applyNewGrid() {
    let input = document.querySelector('#number-input');
    let resolution = Number(input.value);
    createGridSqrs(resolution);
}

function createGridSqrs(resolution) {
    let grid = document.querySelector('.grid');
    grid.style.cssText = `
        display: grid;
        grid-template-columns: repeat(${resolution}, auto);
        grid-template-rows: repeat(${resolution}, auto);
    `

    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    };

    for (let i = 0; i < (resolution ** 2); i++) {
        let gridSqr = document.createElement('div');
        gridSqr.classList.add('grid__square');
        grid.appendChild(gridSqr);
        gridSqr.addEventListener('mouseover', paintSquare);
    }

    document.querySelector('#number-input').value = resolution;
}

// RESOLUTION EVENTS
let arrowUp = document.querySelector('#arrow-up');
let arrowDown = document.querySelector('#arrow-down');
let apply = document.querySelector('#apply');

arrowUp.addEventListener('click', increaseInputValue);
arrowDown.addEventListener('click', decreaseInputValue);
apply.addEventListener('click', applyNewGrid)



// HOVER FUNCTIONS

function getRandomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

function generateRandomColor() {
    let red = getRandomNumber(0, 255);
    let green = getRandomNumber(0, 255);
    let blue = getRandomNumber(0, 255);
    let color = `rgba(${red}, ${green}, ${blue})`;
    return color;
}

function paintSquare(e) {
    let gridSqr = e.target;
    let color;
    switch (mode) {
        case MODE_OPTIONS[0]:
            color = 'rgba(0, 0, 0, .8)';
            break;
            case MODE_OPTIONS[1]:
                color = generateRandomColor();
                break;
            }
            gridSqr.style.background = color;
        }
        
        
        
        // MODE FUNCTIONS
function setClassicMode() {
    mode = MODE_OPTIONS[0];
    // console.log(mode);
}

function setRainbowMode() {
    mode = MODE_OPTIONS[1];
    // console.log(mode);
}

function setGradientMode() {
    mode = MODE_OPTIONS[2];
    // console.log(mode);
}


// MODE EVENTS
let classicBtn = document.querySelector('#classic');
let rainbowBtn = document.querySelector('#rainbow');
let gradientBtn = document.querySelector('#gradient');

classicBtn.addEventListener('click', setClassicMode);
rainbowBtn.addEventListener('click', setRainbowMode);
// gradientBtn.addEventListener('click', setGradientMode);


// CLEAR FUNCTION
function clearScreen() {
    let gridSquares = document.querySelectorAll('.grid__square');
    gridSquares.forEach(gridSqr => {
        gridSqr.style.background = '';
    });
}

let clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', clearScreen);


// START
createGridSqrs(16);