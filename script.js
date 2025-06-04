const gunting = document.getElementById('gunting')
const batu = document.getElementById('batu')
const kertas = document.getElementById('kertas')
const playerChoice = document.getElementById('player-choice-img')
const computerChoice = document.getElementById('computer-choice-img')
const teksPlayerScore = document.getElementById('player-score')
const teksComputerScore = document.getElementById('computer-score')
const boardMenang = document.querySelector('.board-menang')
const boardKalah = document.querySelector('.board-kalah')
const soundWin = document.getElementById('sound-win');
const soundLose = document.getElementById('sound-lose');

soundWin.volume = 1;
soundLose.volume = 1;
soundWin.load();
soundLose.load();


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

function resetGame(){
    playerScore = 0    
    computerScore = 0
    teksPlayerScore.textContent ='Player : 0'
    teksComputerScore.textContent ='Computer : 0'
    boardMenang.classList.add('hidden')
    boardKalah.classList.add('hidden')
    resetImgChoice()
}


function putar(callback){
    const gambar = ['gunting', 'batu', 'kertas'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    
    const intervalId = setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval(intervalId);
            if(callback) callback(); // Panggil callback setelah animasi selesai
            return;
        }
        computerChoice.setAttribute('src', `img/${gambar[i++]}.png`);
        if(i === gambar.length) i = 0;
    }, 100);
}




function playGame(choice){
    // namppilkan img pilihan player
    playerChoice.setAttribute('src', `img/${choice}.png`)
    
    putar(() => {
        //ambil pilihan bot
        const bot = getComputerChoice();
        computerChoice.setAttribute('src', `img/${bot}.png`);
    
        //result
        const result = getResult(bot, choice);
    
        if(result == 'Menang'){
            playerScore++;
            teksPlayerScore.textContent = `Player : ${playerScore}`;
        }
        if(result == 'Kalah'){
            computerScore++;
            teksComputerScore.textContent = `Computer : ${computerScore}`;
        }
        //board menag kalah
        if(playerScore == 5){
            boardMenang.classList.remove('hidden');
            soundWin.play();
        }
        if(computerScore == 5){
            boardKalah.classList.remove('hidden');
            soundLose.play()
        }
    });

  

    //reset gambarnya
    // setTimeout(resetImgChoice, 5000)
    

}



gunting.addEventListener('click', ()=> playGame('gunting'))
batu.addEventListener('click', ()=> playGame('batu'))
kertas.addEventListener('click', ()=> playGame('kertas'))



