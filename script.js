const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const btnNew = document.querySelector('.btn--new')
const diceEl = document.querySelector('.dice')
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
// const score0El = document.getElementById('.score--0')
// const score1El = document.getElementById('.score--1')
// const currentpl = document.getElementById('current--0')


let currentScore = 0
let activePlayer = 0
let scores = [0, 0]
let gameOver = false


btnRoll.addEventListener('click', startGame)
btnHold.addEventListener('click', saveGame)
btnNew.addEventListener('click', newGame)


diceEl.classList.add('hidden')

function startGame(e) {

    if (!gameOver) {
        diceEl.classList.remove('hidden')
        let imgRandom = Math.floor(Math.random() * 6) + 1
        diceEl.src = `album/dice-${imgRandom}.png`
        if (imgRandom !== 1) {
            currentScore += imgRandom
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
        } else if (imgRandom == 1) {
            currentScore = 0
            document.getElementById(`current--${activePlayer}`).textContent = 0
            activePlayer = activePlayer === 0 ? 1 : 0
            player0El.classList.toggle('player--active')
            player1El.classList.toggle('player--active')
        }
    }
}


// hold function

function saveGame(e) {
    if (!gameOver) {
        scores[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
        currentScore = 0
        document.getElementById(`current--${activePlayer}`).textContent = 0
        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')
        if (scores[activePlayer] >= 50) {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            gameOver = true
            document.getElementById(`name--${activePlayer}`).textContent = ' WINNER!!!'
        }
        activePlayer = activePlayer == 0 ? 1 : 0

    }

}

function newGame() {

    currentScore = 0
    activePlayer = 0
    scores = [0, 0]
    gameOver = true

    document.querySelector(`.player--0`).classList.remove('player--winner')
    document.querySelector(`.player--1`).classList.remove('player--winner')

    
    document.getElementById(`name--0`).textContent = `Player 1`
    document.getElementById(`name--1`).textContent = `Player 2`
    document.getElementById(`current--0`).textContent = `0`
    document.getElementById(`current--1`).textContent = `0`
    document.getElementById(`score--0`).textContent = `0`
    document.getElementById(`score--1`).textContent = `0`
    document.querySelector('.dice').style.display = 'none'
}
