const gunting = document.getElementById('gunting')
const batu = document.getElementById('batu')
const kertas = document.getElementById('kertas')
const playerChoice = document.getElementById('player-choice-img')
const computerChoice = document.getElementById('computer-choice-img')
const teksPlayerScore = document.getElementById('player-score')
const teksComputerScore = document.getElementById('computer-score')
const boardMenang = document.querySelector('.board-menang')
const boardKalah = document.querySelector('.board-kalah')

let playerScore = 0
let computerScore = 0

function getComputerChoice(){
    let botComputer = Math.random()
    if(botComputer < 0.33) {
        return 'gunting'
    }
    else if(botComputer >= 0.33 && botComputer <0.77){
        return 'batu'
    }
    else{
        return 'kertas'
    }
}

//atur rule game
function getResult(botComputer, player){
    if(player == botComputer) return 'Seri';
    if(player == 'gunting') return (botComputer == 'batu') ? 'Kalah' : 'Menang';
    if(player == 'batu') return (botComputer == 'kertas') ? 'Kalah' : 'Menang';
    if(player == 'kertas') return (botComputer == 'gunting') ? 'Kalah' : 'Menang';
}

//reset gambar pilihan
function resetImgChoice(){
    playerChoice.setAttribute('src', 'img/tanya.png')
    computerChoice.setAttribute('src', 'img/tanya.png')
}



function playGame(choice){
    // namppilkan img pilihan player
    playerChoice.setAttribute('src', `img/${choice}.png`)
    
    //ambil pilihan kompuetr
    const bot = getComputerChoice()
    computerChoice.setAttribute('src', `img/${bot}.png`)

    //resultnya
    const result = getResult(bot, choice)
  
    if(result == 'Menang'){
        playerScore++
        teksPlayerScore.textContent =`Player : ${playerScore}`
    }
    if(result == 'Kalah'){
        computerScore++
        teksComputerScore.textContent = `Computer : ${computerScore}`
    }

     
    if(playerScore == 10){
        boardMenang.classList.remove('hidden')
    }
    if(computerScore == 10){
        boardKalah.classList.remove('hidden')
    }


  

    //reset gambarnya
    // setTimeout(resetImgChoice, 5000)
    

}



gunting.addEventListener('click', ()=> playGame('gunting'))
batu.addEventListener('click', ()=> playGame('batu'))
kertas.addEventListener('click', ()=> playGame('kertas'))



