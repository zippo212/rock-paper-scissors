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
    sound('play')
    if (!id) return
        computerPick = getComputerChoice();
        playerPick = id;
        playRound(playerPick, computerPick)
        showPcScore.textContent = `SCORE:${computerScore}`
        showPlayerScore.textContent = `SCORE:${playerScore}`
        checkEndGame()
}

const sound = (condition) => {
    if (condition === 'play') {
    const audio = document.querySelector('.sound')
    audio.currentTime = 0;
    audio.play();
    } else if (condition === 'win') {
        const audioW = document.querySelector('.sound-win')
        audioW.currentTime = 0;
        audioW.play();
    } else if (condition === 'lose'){
        const audioL = document.querySelector('.sound-lose')
        audioL.currentTime = 0;
        audioL.play();
    } else {
        const audioD = document.querySelector('.sound-draw')
        audioD.currentTime = 0;
        audioD.play();
    }
}

    let userLogo = document.querySelector('#userwin')
    let robotLogo = document.querySelector('#robotwin')

const checkEndGame = () => {
    if (playerScore === 5 && computerScore === 5) {
        sound('draw')
        mainGame.classList.toggle("none")
        endGame.classList.toggle("none")          
        result.textContent = `Tie! ${playerScore} - ${computerScore}`
    } else if (playerScore === 5) {
        sound('win')
        mainGame.classList.toggle("none")
        endGame.classList.toggle("none")
        robotLogo.classList.toggle("none")            
        result.textContent = `player wins! ${playerScore} - ${computerScore}`
    } else if (computerScore === 5) {
        sound('lose')
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
    btnP.classList.add("none")
    setTimeout(() => {
        typeW()
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
        document.getElementById("typeW").textContent += txt.charAt(i);
        i++;
        setTimeout(typeW, speed);
    }
}


