//Initial setting 
let color = "black";

//Targeting with variables 
const container = document.querySelector('#etch-content');

//Create a grid 
createGrid(16);

function createGrid(num) {
    for (let i = 0; i < num; i++) {

        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        for (let j = 0; j < num; j++) {

            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');


            rowDiv.appendChild(cellDiv);
        }

        container.appendChild(rowDiv);
    }

    //Give each cell a hover 
    const cellsHover = document.querySelectorAll(".cell");

    const cellSize = 400 / num; 


    cellsHover.forEach(cell => {
        cell.addEventListener('mouseover', e => handleHover(cell, e));
        /*  cell.style.width = '30px'; 
          cell.style.height = '30px';  */
        cell.setAttribute('style', 'height: ' + cellSize + 'px; width: ' + cellSize + 'px');
    })
}

//What to do on hover 
function handleHover(cell, e) {

    if (color === 'rainbow') {

        cell.style.backgroundColor = generateColor();

    } else {

        cell.style.backgroundColor = color;
    }
}

//Button handling 
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener('click', e => handleBtn(btn, e));
})

function handleBtn(btn, e) {

    if (btn.id === 'clear') {

        clearBoard();

    } else {
        color = btn.id;
    }
}

const rainbowColors = ["blue", "red", "yellow", "green", "blue", "indigo", "violet"];

//Generating random colors 
function generateColor() {

    index = Math.floor(Math.random() * rainbowColors.length);

    console.log(index);
    console.log(rainbowColors[index]);

    return rainbowColors[index];

}

//Turns every cell white 
function clearBoard() {

    const cells = document.querySelectorAll(".cell");

    cells.forEach(cell => {
        cell.setAttribute('style', 'background-color: white');
    })
}

//Giving the size button an event listener 
const sizeButton = document.querySelector('#size');

sizeButton.addEventListener('click', e => processPrompt(e))

//Resize board
function processPrompt(elt) {
    let sideLength = prompt("How many squares? (Limit: 30)", 16);

    if (parseInt(sideLength) <= 30) {

        const cells = document.querySelectorAll(".cell");

        cells.forEach(cell => { cell.remove(); })
        createGrid(sideLength);
    }
}

//400 px per side 
