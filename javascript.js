const main = document.querySelector('#mainContent');
const newBoard = document.querySelector('#createGrid');
const clearBoard = document.querySelector('#clearGrid');
const gridSize = document.querySelector('#size');

let grid = document.createElement('div');
grid.className = "grid";
main.appendChild(grid);

createGrid(16);

newBoard.addEventListener('click', () => {
    if (gridSize.value != null && gridSize.value != "") {

        grid.innerHTML = "";

        createGrid(gridSize.value);

        columnSize.value = "";
        rowSize.value = "";
    }
    else {
        alert("You need to set a grid size between 1 and 64");
    }
})

function createGrid(size) {

    if (size > 0 && size < 65) {
        for (let i = 0; i < size; i++) {
            let column = document.createElement('div');
            column.classList = "column";
            grid.appendChild(column);

            for (let j = 0; j < size; j++) {
                let row = document.createElement('div');
                row.classList = "row";
                column.appendChild(row);

                row.addEventListener('mouseover', () => {
                    row.setAttribute('style', "background-color: black;")
                })
            }
        }


    }
    else {
        alert("Grid sizes must be between 1 and 64");
    }
}

clearBoard.addEventListener('click', () => {
    let cells = document.querySelectorAll('.row');
    cells.forEach(cell => {
        cell.setAttribute('style', "background-color: white;")
    })
})