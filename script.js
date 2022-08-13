const pick = ["rock","paper","scissors"];
let rounds = 0
let computerScore = 0
let playerScore = 0
let computerPick;
let playerPick;

const getComputerChoice = () => {
    return pick[Math.floor(Math.random() * pick.length)]
}

const playRound = (player, computer) => {
    if (player === computer) {
        computerScore++, playerScore++
        return "Tie!"
    } else if  (player === 'rock' && computer === 'scissors' ||
               player === 'paper' && computer === 'rock' ||
               player === 'scissors' && computer === 'paper') {
        playerScore++
        return `player ${player} beats ${computer}`
    } else {
        computerScore++
        return `computer ${computer} beats ${player} player`
    }
}

const playGame = () => {
    
        while (rounds < 5) {
            if (playerScore === 3 && computerScore === 3) {
                    return console.log(`Tie! ${playerScore} ${computerScore}`);
                } else if (playerScore === 3) {
                    return console.log(`player wins! ${playerScore} ${computerScore}`);
                } else if (computerScore === 3) {
                    return console.log(`computer wins! ${computerScore} ${playerScore}`);
                }
            computerPick = getComputerChoice();
            playerPick = prompt('rock/paper/scissors').toLowerCase();
            console.log(playRound(playerPick, computerPick),computerScore,playerScore);
            rounds++;
        }

}
playGame();


