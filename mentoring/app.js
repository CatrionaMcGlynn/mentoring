/* 1. Create a Chessboard */


const gameBoard = document.querySelector('#gameboard'); 
const winnerMessage = document.querySelector('#winner-message');

// define pieces variables as strings of <svg></svg> elements wrapped in <div></div> elements
const king = '<div class="piece king"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 0c17.7 0 32 14.3 32 32V48h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H256v48H408c22.1 0 40 17.9 40 40c0 5.3-1 10.5-3.1 15.4L368 400H80L3.1 215.4C1 210.5 0 205.3 0 200c0-22.1 17.9-40 40-40H192V112H176c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V32c0-17.7 14.3-32 32-32zM38.6 473.4L80 432H368l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H54.6C42.1 512 32 501.9 32 489.4c0-6 2.4-11.8 6.6-16z"/></svg></div>';
const queen = '<div class="piece queen"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 0a56 56 0 1 1 0 112A56 56 0 1 1 256 0zM134.1 143.8c3.3-13 15-23.8 30.2-23.8c12.3 0 22.6 7.2 27.7 17c12 23.2 36.2 39 64 39s52-15.8 64-39c5.1-9.8 15.4-17 27.7-17c15.3 0 27 10.8 30.2 23.8c7 27.8 32.2 48.3 62.1 48.3c10.8 0 21-2.7 29.8-7.4c8.4-4.4 18.9-4.5 27.6 .9c13 8 17.1 25 9.2 38L399.7 400H384 343.6 168.4 128 112.3L5.4 223.6c-7.9-13-3.8-30 9.2-38c8.7-5.3 19.2-5.3 27.6-.9c8.9 4.7 19 7.4 29.8 7.4c29.9 0 55.1-20.5 62.1-48.3zM256 224l0 0 0 0h0zM112 432H400l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H86.6C74.1 512 64 501.9 64 489.4c0-6 2.4-11.8 6.6-16L112 432z"/></svg></div>';
const rook = '<div class="piece rook"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M32 192V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V192c0 10.1-4.7 19.6-12.8 25.6L352 256l16 144H80L96 256 44.8 217.6C36.7 211.6 32 202.1 32 192zm176 96h32c8.8 0 16-7.2 16-16V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 8.8 7.2 16 16 16zM22.6 473.4L64 432H384l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H38.6C26.1 512 16 501.9 16 489.4c0-6 2.4-11.8 6.6-16z"/></svg></div>';
const bishop = '<div class="piece bishop"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M128 0C110.3 0 96 14.3 96 32c0 16.1 11.9 29.4 27.4 31.7C78.4 106.8 8 190 8 288c0 47.4 30.8 72.3 56 84.7V400H256V372.7c25.2-12.5 56-37.4 56-84.7c0-37.3-10.2-72.4-25.3-104.1l-99.4 99.4c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L270.8 154.6c-23.2-38.1-51.8-69.5-74.2-90.9C212.1 61.4 224 48.1 224 32c0-17.7-14.3-32-32-32H128zM48 432L6.6 473.4c-4.2 4.2-6.6 10-6.6 16C0 501.9 10.1 512 22.6 512H297.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L272 432H48z"/></svg></div>';
const knight = '<div class="piece knight"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M96 48L82.7 61.3C70.7 73.3 64 89.5 64 106.5V238.9c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400H384l28.9-159c2.1-11.3 3.1-22.8 3.1-34.3V192C416 86 330 0 224 0H83.8C72.9 0 64 8.9 64 19.8c0 7.5 4.2 14.3 10.9 17.7L96 48zm24 68a20 20 0 1 1 40 0 20 20 0 1 1 -40 0zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H409.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L384 432H64L22.6 473.4z"/></svg></div>';
const pawn = '<div class="piece pawn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88H96c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400H240L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32h-8.5zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H281.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432H64L22.6 473.4z"/></svg></div>';

// create array to represent the 8x8 square chessboard
const startPieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn, 
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook
];

function createBoard() {

    // create gameboard squares
    startPieces.forEach((startPiece, i) => {                       
        const square = document.createElement('div');              
        square.classList.add('square');                            
        square.setAttribute('square-id', i);                       
        square.innerHTML = startPiece;                             
        square.firstChild?.setAttribute('draggable', true);        // make <div class="piece"> element draggable
        
        // colour gameboard squares
        const row = Math.floor( ( (63 - i) / 8) + 1 );             
        if (row % 2 === 0) {                                       
            square.classList.add(i % 2 === 0 ? "beige" : "brown"); 
        } else {                                                   
            square.classList.add(i % 2 === 0 ? "brown" : "beige"); 
        }

        // create white pieces
        if ( i < 16) {
            square.firstChild.firstChild.classList.add("black");   // square.firstChild.firstChild is the <svg> element
        }
        if ( i >= 48) {
            square.firstChild.firstChild.classList.add("white");   
        }

        gameBoard.append(square);                                  
    })
}

createBoard(); // call the function



/* 2. Create Drag and Drop Functionality of Pieces */


const allSqaures = document.querySelectorAll(".square");
allSqaures.forEach(square => {
    square.addEventListener('dragstart', dragStart); // calls function dragStart when 'dragstart' event (e) occurs (user starts to drag element)
    square.addEventListener('dragover', dragOver);   // calls function dragOver when 'dragover' event (e) occurs (element is being dragged over a drop target)
    square.addEventListener('drop', dragDrop);       // calls function dragDrop when 'drop' event (e) occurs (draggable element is dropped in a <div> element)
});

let draggedElement;  // declare global variable

function dragStart(e) {              
    draggedElement = e.target;                       // dragstart event target is div.piece.<piece>, as has draggable attribute
};

function dragOver(e) {               
    e.preventDefault();                             
}

let playerGo = 'white';                              // playerGo represents the colour of the piece that should be moved

// Change the playerGo every time a piece is moved
function changePlayerGo() {
    if (draggedElement.firstChild.classList.contains('white')) {
        playerGo = 'black'
    } else {
        playerGo = 'white'
    }
}

function dragDrop(e) {                              
    e.stopPropagation();                            
    if (e.target.classList.contains('piece')) {     // if dragged piece element is dropped onto another piece element (occupied square):
        e.target.parentNode.append(draggedElement); // - append drop event target - div.piece.<piece>
        e.target.remove();                          // - remove captured piece
        changePlayerGo();
        inCheck();
        return
    } else {                                        // else if dragged element is dropped onto an empty square:
        e.target.append(draggedElement);            // append drop event target to div.square.<colour class>
        changePlayerGo();
        inCheck();
        return
    }
}



/* 3. Create a function to check for checkmate */


// button to reset game
const buttonReset = document.getElementById("button-reset");

buttonReset.onclick = function() {
    window.location.reload();
}


// the following functions compare two square-ids and their relative positions:

/* (these functions do not take into consideration the borders of the board
    and the conditional validity of the moves depending on the startId,
    this may result in undesired behavour and more if statements should be added) */

const width = 8;

function isStraightMove(startId, targetId) {
    if (
        startId - width === targetId || // up (1 square)
        startId - 2 * width === targetId && !document.querySelector(`[square-id="${startId - width}"]`).firstChild || // up 2 squares and no piece between startId and targetId
        startId - 3 * width === targetId && !document.querySelector(`[square-id="${startId - width}"]`).firstChild && !document.querySelector(`[square-id="${startId - 2 * width}"]`).firstChild ||
        startId - 4 * width === targetId && !document.querySelector(`[square-id="${startId - width}"]`).firstChild && !document.querySelector(`[square-id="${startId - 2 * width}"]`).firstChild && !document.querySelector(`[square-id="${startId - 3 * width}"]`).firstChild ||
        startId - 5 * width === targetId && !document.querySelector(`[square-id="${startId - width}"]`).firstChild && !document.querySelector(`[square-id="${startId - 2 * width}"]`).firstChild && !document.querySelector(`[square-id="${startId - 3 * width}"]`).firstChild && !document.querySelector(`[square-id="${startId - 4 * width}"]`).firstChild ||
        startId - 6 * width === targetId && !document.querySelector(`[square-id="${startId - width}"]`).firstChild && !document.querySelector(`[square-id="${startId - 2 * width}"]`).firstChild && !document.querySelector(`[square-id="${startId - 3 * width}"]`).firstChild && !document.querySelector(`[square-id="${startId - 4 * width}"]`).firstChild && !document.querySelector(`[square-id="${startId - 5 * width}"]`).firstChild ||
        startId - 7 * width === targetId && !document.querySelector(`[square-id="${startId - width}"]`).firstChild && !document.querySelector(`[square-id="${startId - 2 * width}"]`).firstChild && !document.querySelector(`[square-id="${startId - 3 * width}"]`).firstChild && !document.querySelector(`[square-id="${startId - 4 * width}"]`).firstChild && !document.querySelector(`[square-id="${startId - 5 * width}"]`).firstChild && !document.querySelector(`[square-id="${startId - 6 * width}"]`).firstChild ||
        startId + width === targetId || // down (1 square)
        startId + 2 * width === targetId && !document.querySelector(`[square-id="${startId + width}"]`).firstChild ||
        startId + 3 * width === targetId && !document.querySelector(`[square-id="${startId + width}"]`).firstChild && !document.querySelector(`[square-id="${startId + 2 * width}"]`).firstChild ||
        startId + 4 * width === targetId && !document.querySelector(`[square-id="${startId + width}"]`).firstChild && !document.querySelector(`[square-id="${startId + 2 * width}"]`).firstChild && !document.querySelector(`[square-id="${startId + 3 * width}"]`).firstChild ||
        startId + 5 * width === targetId && !document.querySelector(`[square-id="${startId + width}"]`).firstChild && !document.querySelector(`[square-id="${startId + 2 * width}"]`).firstChild && !document.querySelector(`[square-id="${startId + 3 * width}"]`).firstChild && !document.querySelector(`[square-id="${startId + 4 * width}"]`).firstChild ||
        startId + 6 * width === targetId && !document.querySelector(`[square-id="${startId + width}"]`).firstChild && !document.querySelector(`[square-id="${startId + 2 * width}"]`).firstChild && !document.querySelector(`[square-id="${startId + 3 * width}"]`).firstChild && !document.querySelector(`[square-id="${startId + 4 * width}"]`).firstChild && !document.querySelector(`[square-id="${startId + 5 * width}"]`).firstChild ||
        startId + 7 * width === targetId && !document.querySelector(`[square-id="${startId + width}"]`).firstChild && !document.querySelector(`[square-id="${startId + 2 * width}"]`).firstChild && !document.querySelector(`[square-id="${startId + 3 * width}"]`).firstChild && !document.querySelector(`[square-id="${startId + 4 * width}"]`).firstChild && !document.querySelector(`[square-id="${startId + 5 * width}"]`).firstChild && !document.querySelector(`[square-id="${startId + 6 * width}"]`).firstChild ||
        startId - 1 === targetId || // left (1 square)
        startId - 2 === targetId && !document.querySelector(`[square-id="${startId - 1}"]`).firstChild ||
        startId - 3 === targetId && !document.querySelector(`[square-id="${startId - 1}"]`).firstChild && !document.querySelector(`[square-id="${startId - 2}"]`).firstChild ||
        startId - 4 === targetId && !document.querySelector(`[square-id="${startId - 1}"]`).firstChild && !document.querySelector(`[square-id="${startId - 2}"]`).firstChild && !document.querySelector(`[square-id="${startId - 3}"]`).firstChild ||
        startId - 5 === targetId && !document.querySelector(`[square-id="${startId - 1}"]`).firstChild && !document.querySelector(`[square-id="${startId - 2}"]`).firstChild && !document.querySelector(`[square-id="${startId - 3}"]`).firstChild && !document.querySelector(`[square-id="${startId - 4}"]`).firstChild ||
        startId - 6 === targetId && !document.querySelector(`[square-id="${startId - 1}"]`).firstChild && !document.querySelector(`[square-id="${startId - 2}"]`).firstChild && !document.querySelector(`[square-id="${startId - 3}"]`).firstChild && !document.querySelector(`[square-id="${startId - 4}"]`).firstChild && !document.querySelector(`[square-id="${startId - 5}"]`).firstChild ||
        startId - 7 === targetId && !document.querySelector(`[square-id="${startId - 1}"]`).firstChild && !document.querySelector(`[square-id="${startId - 2}"]`).firstChild && !document.querySelector(`[square-id="${startId - 3}"]`).firstChild && !document.querySelector(`[square-id="${startId - 4}"]`).firstChild && !document.querySelector(`[square-id="${startId - 5}"]`).firstChild && !document.querySelector(`[square-id="${startId - 6}"]`).firstChild ||
        startId + 1 === targetId || // right (1 square)
        startId + 2 === targetId && !document.querySelector(`[square-id="${startId + 1}"]`).firstChild ||
        startId + 3 === targetId && !document.querySelector(`[square-id="${startId + 1}"]`).firstChild && !document.querySelector(`[square-id="${startId + 2}"]`).firstChild ||
        startId + 4 === targetId && !document.querySelector(`[square-id="${startId + 1}"]`).firstChild && !document.querySelector(`[square-id="${startId + 2}"]`).firstChild && !document.querySelector(`[square-id="${startId + 3}"]`).firstChild ||
        startId + 5 === targetId && !document.querySelector(`[square-id="${startId + 1}"]`).firstChild && !document.querySelector(`[square-id="${startId + 2}"]`).firstChild && !document.querySelector(`[square-id="${startId + 3}"]`).firstChild && !document.querySelector(`[square-id="${startId + 4}"]`).firstChild ||
        startId + 6 === targetId && !document.querySelector(`[square-id="${startId + 1}"]`).firstChild && !document.querySelector(`[square-id="${startId + 2}"]`).firstChild && !document.querySelector(`[square-id="${startId + 3}"]`).firstChild && !document.querySelector(`[square-id="${startId + 4}"]`).firstChild && !document.querySelector(`[square-id="${startId + 5}"]`).firstChild ||
        startId + 7 === targetId && !document.querySelector(`[square-id="${startId + 1}"]`).firstChild && !document.querySelector(`[square-id="${startId + 2}"]`).firstChild && !document.querySelector(`[square-id="${startId + 3}"]`).firstChild && !document.querySelector(`[square-id="${startId + 4}"]`).firstChild && !document.querySelector(`[square-id="${startId + 5}"]`).firstChild && !document.querySelector(`[square-id="${startId + 6}"]`).firstChild
    ) {
        return true
    } else {
        return false
    }
}

function isDiagonalMove(startId, targetId) {
    if(
        startId - width +1 === targetId || // up-right diagonal by (1,1)
        startId - width -1 === targetId || // up-left diagonal by (1,1)
        startId - 2 * width +2 === targetId && !document.querySelector(`[square-id="${startId - width +1}"]`).firstChild || // up-right diagonal by (2,2) and no piece between startId and targetId
        startId - 2 * width -2 === targetId && !document.querySelector(`[square-id="${startId - width -1}"]`).firstChild || // up-left diagonal by (2,2) and no piece between startId and targetId
        startId - 3 * width +3 === targetId && !document.querySelector(`[square-id="${startId - width +1}"]`).firstChild && !document.querySelector(`[square-id="${startId - 2 * width +2}"]`).firstChild ||
        startId - 3 * width -3 === targetId && !document.querySelector(`[square-id="${startId - width -1}"]`).firstChild && !document.querySelector(`[square-id="${startId - 2 * width -2}"]`).firstChild ||
        startId - 4 * width +4 === targetId && !document.querySelector(`[square-id="${startId - width +1}"]`).firstChild && !document.querySelector(`[square-id="${startId - 2 * width +2}"]`).firstChild && !document.querySelector(`[square-id="${startId - 3 * width +3}"]`).firstChild ||
        startId - 4 * width -4 === targetId && !document.querySelector(`[square-id="${startId - width -1}"]`).firstChild && !document.querySelector(`[square-id="${startId - 2 * width -2}"]`).firstChild && !document.querySelector(`[square-id="${startId - 3 * width -3}"]`).firstChild ||
        startId - 5 * width +5 === targetId && !document.querySelector(`[square-id="${startId - width +1}"]`).firstChild && !document.querySelector(`[square-id="${startId - 2 * width +2}"]`).firstChild && !document.querySelector(`[square-id="${startId - 3 * width +3}"]`).firstChild && !document.querySelector(`[square-id="${startId - 4 * width +4}"]`).firstChild ||
        startId - 5 * width -5 === targetId && !document.querySelector(`[square-id="${startId - width -1}"]`).firstChild && !document.querySelector(`[square-id="${startId - 2 * width -2}"]`).firstChild && !document.querySelector(`[square-id="${startId - 3 * width -3}"]`).firstChild && !document.querySelector(`[square-id="${startId - 4 * width -4}"]`).firstChild ||
        startId - 6 * width +6 === targetId && !document.querySelector(`[square-id="${startId - width +1}"]`).firstChild && !document.querySelector(`[square-id="${startId - 2 * width +2}"]`).firstChild && !document.querySelector(`[square-id="${startId - 3 * width +3}"]`).firstChild && !document.querySelector(`[square-id="${startId - 4 * width +4}"]`).firstChild && !document.querySelector(`[square-id="${startId - 5 * width +5}"]`).firstChild ||
        startId - 6 * width -6 === targetId && !document.querySelector(`[square-id="${startId - width -1}"]`).firstChild && !document.querySelector(`[square-id="${startId - 2 * width -2}"]`).firstChild && !document.querySelector(`[square-id="${startId - 3 * width -3}"]`).firstChild && !document.querySelector(`[square-id="${startId - 4 * width -4}"]`).firstChild && !document.querySelector(`[square-id="${startId - 5 * width -5}"]`).firstChild ||
        startId - 7 * width +7 === targetId && !document.querySelector(`[square-id="${startId - width +1}"]`).firstChild && !document.querySelector(`[square-id="${startId - 2 * width +2}"]`).firstChild && !document.querySelector(`[square-id="${startId - 3 * width +3}"]`).firstChild && !document.querySelector(`[square-id="${startId - 4 * width +4}"]`).firstChild && !document.querySelector(`[square-id="${startId - 5 * width +5}"]`).firstChild && !document.querySelector(`[square-id="${startId - 6 * width +6}"]`).firstChild ||
        startId - 7 * width -7 === targetId && !document.querySelector(`[square-id="${startId - width -1}"]`).firstChild && !document.querySelector(`[square-id="${startId - 2 * width -2}"]`).firstChild && !document.querySelector(`[square-id="${startId - 3 * width -3}"]`).firstChild && !document.querySelector(`[square-id="${startId - 4 * width -4}"]`).firstChild && !document.querySelector(`[square-id="${startId - 5 * width -5}"]`).firstChild && !document.querySelector(`[square-id="${startId - 6 * width -6}"]`).firstChild ||
        startId + width +1 === targetId || // down-right diagonal by (1,1)
        startId + width -1 === targetId || // down-left diagonal by (1,1)
        startId + 2 * width +2 === targetId && !document.querySelector(`[square-id="${startId + width +1}"]`).firstChild ||
        startId + 2 * width -2 === targetId && !document.querySelector(`[square-id="${startId + width -1}"]`).firstChild ||
        startId + 3 * width +3 === targetId && !document.querySelector(`[square-id="${startId + width +1}"]`).firstChild && !document.querySelector(`[square-id="${startId + 2 * width +2}"]`).firstChild ||
        startId + 3 * width -3 === targetId && !document.querySelector(`[square-id="${startId + width -1}"]`).firstChild && !document.querySelector(`[square-id="${startId + 2 * width -2}"]`).firstChild ||
        startId + 4 * width +4 === targetId && !document.querySelector(`[square-id="${startId + width +1}"]`).firstChild && !document.querySelector(`[square-id="${startId + 2 * width +2}"]`).firstChild && !document.querySelector(`[square-id="${startId + 3(width +1)}"]`).firstChild ||
        startId + 4 * width -4 === targetId && !document.querySelector(`[square-id="${startId + width -1}"]`).firstChild && !document.querySelector(`[square-id="${startId + 2 * width -2}"]`).firstChild && !document.querySelector(`[square-id="${startId + 3(width -1)}"]`).firstChild ||
        startId + 5 * width +5 === targetId && !document.querySelector(`[square-id="${startId + width +1}"]`).firstChild && !document.querySelector(`[square-id="${startId + 2 * width +2}"]`).firstChild && !document.querySelector(`[square-id="${startId + 3(width +1)}"]`).firstChild && !document.querySelector(`[square-id="${startId + 4 * width +4}"]`).firstChild ||
        startId + 5 * width -5 === targetId && !document.querySelector(`[square-id="${startId + width -1}"]`).firstChild && !document.querySelector(`[square-id="${startId + 2 * width -2}"]`).firstChild && !document.querySelector(`[square-id="${startId + 3(width -1)}"]`).firstChild && !document.querySelector(`[square-id="${startId + 4 * width -4}"]`).firstChild ||
        startId + 6 * width +6 === targetId && !document.querySelector(`[square-id="${startId + width +1}"]`).firstChild && !document.querySelector(`[square-id="${startId + 2 * width +2}"]`).firstChild && !document.querySelector(`[square-id="${startId + 3(width +1)}"]`).firstChild && !document.querySelector(`[square-id="${startId + 4 * width +4}"]`).firstChild && !document.querySelector(`[square-id="${startId + 5 * width +5}"]`).firstChild ||
        startId + 6 * width -6 === targetId && !document.querySelector(`[square-id="${startId + width -1}"]`).firstChild && !document.querySelector(`[square-id="${startId + 2 * width -2}"]`).firstChild && !document.querySelector(`[square-id="${startId + 3(width -1)}"]`).firstChild && !document.querySelector(`[square-id="${startId + 4 * width -4}"]`).firstChild && !document.querySelector(`[square-id="${startId + 5 * width -5}"]`).firstChild ||
        startId + 7 * width +7 === targetId && !document.querySelector(`[square-id="${startId + width +1}"]`).firstChild && !document.querySelector(`[square-id="${startId + 2 * width +2}"]`).firstChild && !document.querySelector(`[square-id="${startId + 3(width +1)}"]`).firstChild && !document.querySelector(`[square-id="${startId + 4 * width +4}"]`).firstChild && !document.querySelector(`[square-id="${startId + 5 * width +5}"]`).firstChild && !document.querySelector(`[square-id="${startId + 6 * width +6}"]`).firstChild ||
        startId + 7 * width -7 === targetId && !document.querySelector(`[square-id="${startId + width -1}"]`).firstChild && !document.querySelector(`[square-id="${startId + 2 * width -2}"]`).firstChild && !document.querySelector(`[square-id="${startId + 3(width -1)}"]`).firstChild && !document.querySelector(`[square-id="${startId + 4 * width -4}"]`).firstChild && !document.querySelector(`[square-id="${startId + 5 * width -5}"]`).firstChild && !document.querySelector(`[square-id="${startId + 6 * width -6}"]`).firstChild 
        ) {
        return true
    } else {
        return false
    }
}

function isLMove(startId, targetId) {
    if(
        startId - 2 * width -1 === targetId || // up up left
        startId - 2 * width +1 === targetId || // up up right
        startId + 2 * width -1 === targetId || // down down left
        startId + 2 * width +1 === targetId || // down down right
        startId - width -2 === targetId ||     // up left left
        startId - width +2 === targetId ||     // up right right
        startId + width -2 === targetId ||     // down left left
        startId + width +2 === targetId        // down right right
        ) {
        console.log('true')
        return true
    } else {
        return false
    }
}


let kingPosition;                                                                    // declare global variable - exists outside function
function findKingPosition() {
    
    const kings = document.getElementsByClassName('king');                           // kings is an array of the two div.piece.king elements
    
    if (playerGo === 'black') {                                                      // if it is black turn (white piece has just been moved):
        if(kings[0].firstChild.classList.contains('black')) {                        // then find square-id for the king element which is black
            kingPosition = Number(kings[0].parentElement.getAttribute('square-id')); // converting to type number allows us to use operators
        } else {
            kingPosition = Number(kings[1].parentElement.getAttribute('square-id'));
        }
    } else {                                                                         // if it is white turn (black piece just been moved):
        if(kings[0].firstChild.classList.contains('black')) {                        // then find square-id for the king element which is white
            kingPosition = Number(kings[1].parentElement.getAttribute('square-id'));
        } else {
            kingPosition = Number(kings[0].parentElement.getAttribute('square-id'));
        }
    }
}

function inCheck() { // function called every time a piece is dragged and dropped

    findKingPosition();
    let piecePosition = Number(draggedElement.parentElement.getAttribute('square-id'));
    
    const piece = draggedElement.classList[1]; // piece divs have two classes: 'piece' and '<piece>'. NB change in code Lines 7-13.
    switch (piece) {
        case 'queen' : // if dragged and dropped piece is queen, check for straight or diagonal path to the opponenet king
            if (isStraightMove(piecePosition, kingPosition) || isDiagonalMove(piecePosition, kingPosition)) {
                isCheckMate();
            };
            break;
        case 'rook' : // if dragged and dropped piece is rook, check for straight path to the opponenet king
            if (isStraightMove(piecePosition, kingPosition)) {
                isCheckMate()
            };
            break;
        case 'bishop' : // if dragged and dropped piece is bishop, check for diagonal path to the opponenet king
            if(isDiagonalMove(piecePosition, kingPosition)) {
                isCheckMate();
            };
            break;
        case 'knight' : // if dragged and dropped piece is knight, check for L-shaped path to the opponent king
            if (isLMove(piecePosition, kingPosition)) {
                isCheckMate()
            };
            break;
        }
}


function isCheckMate() {                    // function called when king in check
    winnerMessage.innerHTML = 'Checkmate!'; // if checkmate found, paragraph element populated with a winner message
} 

/* this function should be completed to first check scenarios where player can get out of check:
   - King can move out of check (not blocked by pieces)
   - Piece putting king in check is blocked by non-king piece 
   - Piece putting king in check is captured */
