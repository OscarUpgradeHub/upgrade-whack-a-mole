/*Select elements to modify*/ 
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

//Check each square in squares array
function randomSquare() {
    squares.forEach(square => {
        //Remove element 'mole' exists on any of the squares
        square.classList.remove('mole')
    })

    //Add mole in random position
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    //Add class 'mole'to variable 'randomSquare' 
    randomSquare.classList.add('mole')

    //Collect id of the square and save it to variable 'hitPosition'
    hitPosition = randomSquare.id
} 

    /* Tally score points */
    
    //For each square in squares array
    squares.forEach(square => {
        //Add event listener when you click on a square
        square.addEventListener('click', () => {
        //If square id is the random square selected at whatever the hit position is at that point in time
            if (square.id == hitPosition) {
                //Obtain result and increment
                result++
                //
                score.textContent = result
                //Clear out position
                hitPosition = null 
            }   
        })
    })

/*Timer*/
function moveMole() {
    //Generate random square
    timerId = setInterval(randomSquare, 1000)
}

moveMole()
 
/*Countdown*/

//
function countdown() {
currentTime--
timeLeft.textContent = currentTime

if (currentTime == 0) {
    clearInterval(countDownTimerId)
    alert('GAME OVER! Your final score is ' + result)
    }
}

let countDownTimerId = setInterval(countdown, 1000)
