//Rules: Mario Kart Themed take on Rock-Paper-Scissors, Shell beats Mushroom, Mushroom beats Banana, Banana beats Shell


// Player Choice

let playerPick; // The Player's Choice 
let playerScoreCounter = 0; // Sets the player score to 0
let cpuScoreCounter = 0; // Sets the CPU score to 0
let buttonsWork = false; // Spam click prevention variable

function clickShell() {
    if (buttonsWork == false) return // Only runs once at a time
    buttonsWork = false // Sets it to false until it sets it to true when it's done running
    
    if (playerScoreCounter <= 2) {
        console.log('Player Chooses Shell'); // Console logs the player choosing Shell
        playerPick = 0; // Assigns the value of the shell to 0
        let shellImg = document.querySelector(".player-result"); // Defines where the img will be placed
        shellImg.src = "./assets/images/Shell.svg"; // Defines the value of the img
        cpuChoice(); // Gives CPU Response
    } else {
        console.log("Player Wins")
    }

}

function clickMushroom() {
    if (buttonsWork == false) return // Only runs once at a time
    buttonsWork = false // Sets it to false until it sets it to true when it's done running

    if (playerScoreCounter <= 2) {
        console.log('Player Chooses Mushroom'); // Console logs the player choosing Mushroom
        playerPick = 1; // Assigns the value of the shell to 1
        let mushroomImg = document.querySelector(".player-result"); // Defines where the img will be placed
        mushroomImg.src = "./assets/images/Mushroom.svg"; // Defines the value of the img
        cpuChoice(); // Gives CPU Response
    } else {
        console.log("Player Wins")
    }
}

function clickBanana() {
    if (buttonsWork == false) return // Only runs once at a time
    buttonsWork = false // Sets it to false until it sets it to true when it's done running

    if (playerScoreCounter <= 2) {
        console.log('Player Chooses Banana'); // Console logs the player choosing Banana
        playerPick = 2; // Assigns the value of the shell to 2
        let bananaImg = document.querySelector(".player-result"); // Defines where the img will be placed
        bananaImg.src = "./assets/images/Banana.svg"; // Defines the value of the img
        cpuChoice(); // Gives CPU Response
    } else {
        console.log("Player Wins")
    }
}

// CPU Choice

let cpuPick = Math.floor(Math.random() * 3); // Picks a random number from 0-2

function cpuChoice() {
    cpuPick = Math.floor(Math.random() * 3);
    let cpuItem = document.querySelector(".cpu-result"); // Defines where the img will be placed
    document.querySelector(".cpu-box").classList.add("cpuAnimation");
    document.querySelector(".player-box").classList.add("playerAnimation");
    setTimeout(() => {
        document.querySelector(".cpu-box").classList.remove("cpuAnimation");
        document.querySelector(".player-box").classList.remove("playerAnimation");
        buttonsWork = true; // Allows everything to run
    }, 2000);
    if (cpuScoreCounter >= 3 || playerScoreCounter >= 3) return

    if (cpuPick === 0) {
        cpuItem.src = "./assets/images/Shell.svg"; // If the random number is 1, the CPU selects Shell
    } else if (cpuPick === 1) {
        cpuItem.src = "./assets/images/Mushroom.svg"; // If the random number is 1, the CPU selects Mushroom
    } else if (cpuPick === 2) {
        cpuItem.src = "./assets/images/Banana.svg"; // If the random number is 1, the CPU selects Banana
    }

    if (playerPick === 0 && cpuPick === 1) {
        playerScoreCounter++; // Adds 1 point to the Player's score counter
    } else if (playerPick === 0 && cpuPick === 2) {
        cpuScoreCounter++; // Adds 1 point to the CPU's score counter
    } else if (playerPick === 1 && cpuPick === 0) { 
        cpuScoreCounter++; 
    } else if (playerPick === 1 && cpuPick === 2) {
        playerScoreCounter++; 
    } else if (playerPick === 2 && cpuPick === 0) {
        playerScoreCounter++;
    } else if (playerPick === 2 && cpuPick === 1) {
        cpuScoreCounter++;
    }
    
    setTimeout(() => {
        scoreBoard()
    }, 200); // Allows the scoreboard to function
} 

// Scoreboard

function scoreBoard() {
    let player = playerPick; // Sets a value on the scoreboard for the player's pick
    let cpu = cpuPick; // Sets a value on the scoreboard for the CPU's pick
    const playerScore = document.querySelector(".player-score"); // Grabs the HTML Class and stores it within the playerScore variable
    const cpuScore = document.querySelector(".cpu-score"); // Grabs the HTML Class and stores it within the cpuScore variable
    const gameEnd = document.querySelector(".win-lose-screen"); // Grabs the HTML Class and stores it within the gameEnd variable
    const winLoseTitle = document.querySelector(".win-lose-title"); 

    playerScore.innerHTML = `${playerScoreCounter}`;
    cpuScore.innerHTML = `${cpuScoreCounter}`;

    if (playerScoreCounter === 3) {
        console.log("You Win!")
        winLoseTitle.innerHTML = 'Win!';
        gameEnd.classList.add("active")
    } else if (cpuScoreCounter === 3) {
        console.log("You Lose!")
        winLoseTitle.innerHTML = 'Lose!';
        gameEnd.classList.add("active")
    }

    
}


function menuDisappear() {
    document.querySelector('.start-screen').classList.add('opacity')
    buttonsWork = true; // Allows the buttons to function only after start screen disappears
}

function restartGame() {
    location.reload();
}