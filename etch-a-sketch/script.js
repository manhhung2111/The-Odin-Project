
let renderSize = document.querySelector('#render-size');
let sizeOfBoard = document.querySelector('#size');
let board = document.querySelector('.board');
let clearButton = document.querySelector('.clear');

let isInitialized = false;

function initialize() {
    if(isInitialized) return;
    createBoardCells();
}
sizeOfBoard.addEventListener("click", function() {
    isInitialized = true;
    let temp = sizeOfBoard.value;
    renderSize.textContent = `${temp} x ${temp}`;
    reset();
    createBoardCells();
})

clearButton.addEventListener('click', function() {

    for(let i = 0; i < board.children.length; i++){
        if(board.children[i].classList.contains('active')) {
            board.children[i].classList.remove('active');
        }
    }
});

function createDiv(divSize) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.width = `${divSize}px`;
    cell.style.height = `${divSize}px`;
    return cell;
}

function reset() {
    board.innerHTML = '';
}
function createBoardCells() {
    const n = (sizeOfBoard.value);
    const divSize = board.clientWidth / n;
    console.log(board.clientWidth);
    for(let row = 1; row <= n; row++){
        for(let col = 1; col <= n; col++) {
            const cell = createDiv(divSize);
            board.appendChild(cell);
        }
    }
}

board.addEventListener('mouseover', function(e) {
    if(e.target.matches('.cell')) {
        e.target.classList.add('active');
    }
});

initialize();