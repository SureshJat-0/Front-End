let youChoseList = document.querySelectorAll(".you-chose");
let yourScore = document.querySelector("#yourScore");
let compScore = document.querySelector("#compScore");
let youChose = document.querySelector(".display-your");
let compChose = document.querySelector(".display-comp");
let currState = document.querySelector(".curr-state");
let yourPoints = 0;
let compPoints = 0;

let array = ["rock", "paper", "scissors"];

// Event Listner when image is clicked
youChoseList.forEach((choise, ind) => {
    choise.addEventListener("click", () => {

        // Generate Random choise after image is clicked
        let compNum = Math.floor(Math.random() * 3);

        // User Choise 
        let userNum = ind;

        // Check For Win 
        checkWin(compNum, userNum);
    });
});

// Checking for the winner
const checkWin = (compNum, userNum) => {

    if (compNum === userNum) {
        draw(userNum, compNum);
    } else {
        let isUserWin;
        if (userNum === 0) {
            // paper, scissors
            isUserWin = compNum === 1 ? false : true;
        } else if (userNum === 1) {
            // rock, scissors
            isUserWin = compNum === 0 ? true : false;
        } else {
            // rock, paper
            isUserWin = compNum === 0 ? false : true;
        }

        if (isUserWin) {
            userWin(userNum, compNum);
        } else {
            compWin(userNum, compNum);
        }
    }

}

// User Win 
const userWin = (userNum, compNum) => {
    youChose.innerText = `You Chose : ${array[userNum]}`;
    compChose.innerText = `Comp Chose : ${array[compNum]}`;
    yourPoints++;
    yourScore.innerText = yourPoints;
    currState.innerText = "Congratulation, You Win!";
    currState.style.backgroundColor = "Green";
}
// Comp Win
const compWin = (userNum, compNum) => {
    youChose.innerText = `You Chose : ${array[userNum]}`;
    compChose.innerText = `Comp Chose : ${array[compNum]}`;
    compPoints++;
    compScore.innerText = compPoints;
    currState.innerText = "Opps!, You lose!";
    currState.style.backgroundColor = "Red";
}
// Draw
const draw = (userNum, compNum) => {
    youChose.innerText = `You Chose : ${array[userNum]}`;
    compChose.innerText = `Comp Chose : ${array[compNum]}`;
    currState.innerText = "Draw!";
    currState.style.backgroundColor = "rgb(28, 25, 25)";
}

