let btnList = document.querySelectorAll(".box");
let currState = document.querySelector("p");
let reset = document.querySelector("#reset");
let pXScore = document.querySelector("#pXScore");
let pOScore = document.querySelector("#pOScore");
let array = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let currPlayer = "X";
let moves = 0;
let playerXWinCount = 0;
let playerOWinCount = 0;


// Setting Buttons
for (let btn of btnList) {
    btn.addEventListener("click", () => {

        // Seting Buttons Text after click
        if (currPlayer === "X") {
            btn.innerHTML = "<button disabled>X</button>";
            currState.innerText = "Player O Turn";
            currPlayer = "O";
            moves++;
        } else {
            btn.innerHTML = "<button disabled>O</button>";
            currState.innerText = "Player X Turn";
            currPlayer = "X";
            moves++;
        }

        // Updating array after every click
        let currBtn = btn.getAttribute("id");
        if (currPlayer === "X") {
            array[currBtn] = "O";
        } else {
            array[currBtn] = "X";
        }

        // Check For Win
        checkForWin();
    });
}


// Function of Check for win
function checkForWin() {

    // Check for Draw
    if (moves === 9) {
        currState.innerText = "Draw!";
    }

    // Checking for Horizontal
    for (let i = 0; i < 3; i++) {
        if (array[3 * i] === array[3 * i + 1] && array[3 * i + 1] === array[3 * i + 2] && array[3 * i + 2] === "X") {
            currState.innerText = "Player X Wins!";
            playerXWinCount++;
            stopExe();
        } else if (array[3 * i] == array[3 * i + 1] && array[3 * i + 1] == array[3 * i + 2] && array[3 * i + 2] == "O") {
            currState.innerText = "Player O Wins!";
            playerOWinCount++;
            stopExe();
        }
    }

    // Checking for Vertical
    for (let i = 0; i < 3; i++) {
        if (array[i] === array[3 + i] && array[3 + i] === array[6 + i] && array[6 + i] === "X") {
            currState.innerText = "Player X Wins!";
            playerXWinCount++;
            stopExe();
        } else if (array[i] === array[3 + i] && array[3 + i] === array[6 + i] && array[6 + i] === "O") {
            currState.innerText = "Player O Wins!";
            playerOWinCount++;
            stopExe();
        }
    }

    // Checking for Diagonals
    if (array[0] === array[4] && array[4] === array[8] && array[8] === "X") {
        currState.innerText = "Player X Wins!";
        playerXWinCount++;
        stopExe();
    } else if (array[0] === array[4] && array[4] === array[8] && array[8] === "O") {
        currState.innerText = "Player O Wins!";
        playerOWinCount++;
        stopExe();
    }

    if (array[2] === array[4] && array[4] === array[6] && array[6] === "X") {
        currState.innerText = "Player X Wins!";
        playerXWinCount++;
        stopExe();
    } else if (array[2] === array[4] && array[4] === array[6] && array[6] === "O") {
        currState.innerText = "Player O Wins!";
        playerXWinCount++;
        stopExe();
    }

}

// If Wins Stop execution 
function stopExe() {
    // Show Score Before stoping the execution 
    pXScore.innerText = `Player X Score : ${playerXWinCount}`;
    pOScore.innerText = `Player O Score : ${playerOWinCount}`;

    // Stop execution
    let ind = 0;
    for (let ele of array) {
        if (ele === 0) {
            let btn = document.getElementById(ind);
            btn.innerHTML = "<button disabled></button>";
        }
        ind++;
    }
}


// Reset Game when Reset Button is clicked 
reset.addEventListener("click", () => {
    // Reseting Buttons
    for (let btn of btnList) {
        btn.innerHTML = "<button></button>"
    }
    // Reseting Array
    array = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    // Resting Moves
    moves = 0;
    // Reseting Current State 
    currState.innerText = "Player X turn";
    currPlayer = "X";

});




