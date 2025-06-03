const gunting = document.getElementById('gunting')
const batu = document.getElementById('batu')
const kertass = document.getElementById('kertas')
const playerChoice = document.getElementById('player-choice-img')

// gunting.addEventListener('click', () => {
//     playerChoice.setAttribute('src', `img/gunting.png`)
// })
// batu.addEventListener('click', () => {
//     playerChoice.setAttribute('src', `img/batu.png`)
// })
// kertas.addEventListener('click', () => {
//     playerChoice.setAttribute('src', `img/kertas.png`)
// })

function showPlayerChoice(choice){
    playerChoice.setAttribute('src', `img/${choice}.png`)
}

gunting.addEventListener('click', ()=> showPlayerChoice('gunting'))
batu.addEventListener('click', ()=> showPlayerChoice('batu'))
kertas.addEventListener('click', ()=> showPlayerChoice('kertas'))