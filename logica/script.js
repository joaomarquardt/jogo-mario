const mario = document.querySelector('.mario')
const tubo = document.querySelector('.tubo')
const nuvens = document.querySelector('.nuvens')
const gameover = document.querySelector('.gameovertext')
const scoretext = document.querySelector('.scoretext')
const menu = document.querySelector('.botao-menu')
var score = 0

const pulo = () => {
    mario.classList.add('pulo')

    setTimeout(() => {
        mario.classList.remove('pulo')
    } , 500);
} 

const loop = setInterval(() => {
    const nuvensPosicao = nuvens.offsetLeft
    const tuboPosicao = tubo.offsetLeft
    const marioPosicao = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (tuboPosicao <= 143 && tuboPosicao > 0 && marioPosicao < 93) {
        gameovermario(nuvensPosicao, tuboPosicao, marioPosicao)
    }

}, 10)

const scoregame = setInterval(() => {
    ++score
    const tuboPosicao = tubo.offsetLeft
    const marioPosicao = +window.getComputedStyle(mario).bottom.replace('px', '')
    scoretext.innerHTML = score
    if (tuboPosicao <= 143 && tuboPosicao > 0 && marioPosicao < 93) {
        clearInterval(scoregame)
    }


}, 100)

/* function menu() {
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosicao}px`
        tubo.style.animation = 'none'
        tubo.style.left = `${tuboPosicao}px`
        nuvens.style.animation = 'none'
        nuvens.style.left = `${nuvensPosicao}px`
} */

const gameovermario = (nuvensPosicao, tuboPosicao, marioPosicao) => {
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosicao}px`
        tubo.style.animation = 'none'
        tubo.style.left = `${tuboPosicao}px`
        nuvens.style.animation = 'none'
        nuvens.style.left = `${nuvensPosicao}px`

        mario.src = 'imagens/game-over.png'
        mario.style.width = '85px'
        mario.style.marginLeft = '80px'
        gameover.src = 'imagens/game-over-text.png'

        clearInterval(loop, scoregame)
}

document.addEventListener('keydown', pulo)