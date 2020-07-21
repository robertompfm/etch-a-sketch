let color = 'rgba(0, 0, 0, .8)'

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

    }
}

function paintSquare(e) {
    let gridSqr = e.target;
    gridSqr.style.background = color;
}


createGridSqrs(16);

let gridSquares = document.querySelectorAll('.grid__square');
gridSquares.forEach(gridSqr => {
    gridSqr.addEventListener('mouseover', paintSquare);
});