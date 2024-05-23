// This variable keeps track of whose turn it is.
let activePlayer = 'X';
// This array stores an array of moves. We use this to check win conditions.
let selectedSquares = [];

// This function is for placing an X or O in a square.
function placeXOrO(squareNumber) {
    // This condition ensures a square hasn't been selected already.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // This variable retrieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        // This condition checks whose turn it is.
        if (activePlayer === 'X') {
            // If activePlayer is equal to 'X', the x.png is placed in HTML.
            select.style.backgroundImage = 'url("images/x.png")';
            select.style.backgroundSize = 'contain'; // Resize the background image to fit within the element
            select.style.backgroundRepeat = 'no-repeat'; // Prevent the background image from repeating
            select.style.backgroundPosition = 'center'; // Center the background image
        } else {
            // If activePlayer is equal to 'O', the o.png is placed in HTML.
            select.style.backgroundImage = 'url("images/o.png")';
            select.style.backgroundSize = 'contain'; // Resize the background image to fit within the element
            select.style.backgroundRepeat = 'no-repeat'; // Prevent the background image from repeating
            select.style.backgroundPosition = 'center'; // Center the background image
        }
        // SquareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        // This calls a function to check for any win conditions.
        checkWinConditions();
        // This condition is for changing the active player.
        activePlayer = (activePlayer === 'X') ? 'O' : 'X';

        // This function plays placement sound.
        audio('./media/place.mp3');
        // This condition checks to see if it is the computer's turn.
        if (activePlayer === 'O') {
            // This function disables clicking for computer's turn.
            disableClick();
            // This function waits 1 second before the computer places an image and enables click.
            setTimeout(function() { computersTurn(); }, 1000);
        }
        // Returning true is needed for our computersTurn() function to work.
        return true;
    }
}

// This function results in a random square being selected by the computer.
function computersTurn() {
    // This boolean is needed for our while loop.
    let success = false;
    // This variable stores a random number 0-8.
    let pickASquare;
    // This allows the while loop to keep trying if a square is already selected.
    while (!success) {
        // A random number between 0 and 8 is selected.
        pickASquare = String(Math.floor(Math.random() * 9));
        // If the random number evaluated returns true, the square hasn't been selected yet.
        if (placeXOrO(pickASquare)) {
            // This changes our boolean and ends the loop.
            success = true;
        }
    }
}

// This function checks for win conditions.
function checkWinConditions() {
    // Win conditions for X.
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100); }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304); }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508); }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558); }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558); }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558); }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90); }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520); }
    // Win conditions for O.
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100); }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304); }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508); }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558); }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558); }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558); }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90); }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520); }
    // Check for a tie.
    else if (selectedSquares.length >= 9) {
        // This function plays the tie game sound.
        audio('./media/tie.mp3');
        // This function sets a .3 second timer before the resetGame is called.
        setTimeout(function() { resetGame(); }, 500);
    }
    // This function checks if an array includes 3 strings. It is used to check for each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        return selectedSquares.includes(squareA) && selectedSquares.includes(squareB) && selectedSquares.includes(squareC);
    }
}

// This function makes our body element temporarily unclickable.
function disableClick() {
    document.body.style.pointerEvents = 'none';
    setTimeout(function() { document.body.style.pointerEvents = 'auto'; }, 1000);
}

// This function takes a string parameter of the path you set earlier for placement sound('./media/place.mp3').
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

// This function utilizes HTML canvas to draw win lines.
function drawWinLine(x1, y1, x2, y2) {
    animateLineDrawing(x1, y1, x2, y2);
    disableClick();
    audio('./media/winGame.mp3');
    setTimeout(function () { clearCanvas(); resetGame(); }, 1000);
}

// This function animates line drawing on the canvas.
function animateLineDrawing(x1, y1, x2, y2) {
    const canvas = document.getElementById('win-lines');
    const context = canvas.getContext('2d');
    let x = x1;
    let y = y1;
    const dx = (x2 - x1) / 100;
    const dy = (y2 - y1) / 100;
    context.beginPath();
    context.moveTo(x1, y1);

    function drawLine() {
        x += dx;
        y += dy;
        context.lineTo(x, y);
        context.stroke();
        if ((dx > 0 && x >= x2) || (dx < 0 && x <= x2) || (dy > 0 && y >= y2) || (dy < 0 && y <= y2)) {
            return;
        }
        requestAnimationFrame(drawLine);
    }
    drawLine();
}

// This function clears our canvas.
function clearCanvas() {
    const canvas = document.getElementById('win-lines');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
}

// This function resets the game.
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}
