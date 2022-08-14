let computerScore = 0
let playerScore = 0
let computerPick;
let playerPick;
const showPcScore = document.querySelector(".computer-score")
const showPlayerScore = document.querySelector(".player-score")
const result = document.querySelector(".result")
const mainGame = document.querySelector(".main")
const endGame = document.querySelector(".end-game")

const getComputerChoice = () => {
    const pick = ["rock","paper","scissors"];
    return pick[Math.floor(Math.random() * pick.length)]
}

const playRound = (player, computer) => {
    stylePick(player, computer)
    if (player === computer) {
        computerScore++, playerScore++
    } else if  (player === 'rock' && computer === 'scissors' ||
                player === 'paper' && computer === 'rock' ||
                player === 'scissors' && computer === 'paper') {
        playerScore++
    } else {
        computerScore++
    }
}

const playGame = (id) => {
    console.log(id);
    if (!id) return
        computerPick = getComputerChoice();
        playerPick = id;
        playRound(playerPick, computerPick)
        showPcScore.textContent = `SCORE:${computerScore}`
        showPlayerScore.textContent = `SCORE:${playerScore}`
        checkEndGame()
}

    let userLogo = document.querySelector('#userwin')
    let robotLogo = document.querySelector('#robotwin')

const checkEndGame = () => {
    if (playerScore === 5 && computerScore === 5) {
        mainGame.classList.toggle("none")
        endGame.classList.toggle("none")          
        result.textContent = `Tie! ${playerScore} - ${computerScore}`
    } else if (playerScore === 5) {
        mainGame.classList.toggle("none")
        endGame.classList.toggle("none")
        robotLogo.classList.toggle("none")            
        result.textContent = `player wins! ${playerScore} - ${computerScore}`
    } else if (computerScore === 5) {
        mainGame.classList.toggle("none")
        endGame.classList.toggle("none")   
        userLogo.classList.toggle("none")        
        result.textContent = `computer wins! ${computerScore} - ${playerScore}`
    }
}

const stylePick = (player, computer) => {
        picks.forEach(el =>{
            if (el.classList.contains(player)) 
            el.classList.add("userClicked")
            else el.classList.remove("userClicked")
        })
        pcPicks.forEach(el =>{
            if (el.classList.contains(computer))
            el.classList.add("computerClicked")
            else el.classList.remove("computerClicked")
        }) 
}

const picks = document.querySelectorAll('.player-pick')
const pcPicks = document.querySelectorAll('.computer-pick')

picks.forEach(el => el.addEventListener('click', (e) => playGame(e.currentTarget.id)))

const reset = () => {
computerScore = 0
playerScore = 0
pcPicks.forEach(el => el.classList.remove("computerClicked"))
picks.forEach(el => el.classList.remove("userClicked"))
mainGame.classList.toggle("none")
endGame.classList.toggle("none")
showPcScore.textContent = `SCORE:${computerScore}`
showPlayerScore.textContent = `SCORE:${playerScore}`
robotLogo.classList.remove("none")
userLogo.classList.remove("none")
document.getElementById("typeW").innerHTML = ''
i = 0;
typeW()
}

const btnR = document.querySelector('.reset').addEventListener('click', reset)



const play = () => {
    setTimeout(() => {
        typeW()
        btnP.classList.add("none")
    }, 200);
    setTimeout(() => {
        mainGame.classList.toggle("none")
    },1500)
}

const btnP = document.querySelector('.play')
btnP.addEventListener('click', play)

let i = 0;
let txt = 'Rock, Paper, Scissors?';
let speed = 50;

function typeW() {
    if (i < txt.length) {
        document.getElementById("typeW").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeW, speed);
    }
}


