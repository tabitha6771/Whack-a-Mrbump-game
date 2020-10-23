const bump = document.querySelectorAll('.fieldDiv')
const timeLeft = document.querySelector('#time-left')
const start = document.getElementById("start");
let score = document.querySelector('#score')
let best = document.querySelector('#best')

let result = 0
let currentTime = timeLeft.textContent
let currentScore = score.textContent
let bumpInterval = 0
let currentBest = best.textContent

function randomBump() {
    bump.forEach(className => {
        className.classList.remove('bump')
    })
    let randomPosition = bump[Math.floor(Math.random() * 6)]
    randomPosition.classList.add('bump')

    hitPosition = randomPosition.id
}

bump.forEach(id => {
    id.addEventListener('mousedown', () => {
        if (id.id === hitPosition) {
            result = result + 1
            score.textContent = result
            hitPosition = null
            bump.forEach(className => {
                className.classList.remove('bump')
            })
        }
    })
})

function moveBump() {
    bumpInterval = setInterval(randomBump, 3000)
}

start.addEventListener("click", () => {
    start.disabled = true
    moveBump()
    timerId = setInterval(countDown, 1000)
})

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime


    if (currentTime === 50) {
        clearInterval(bumpInterval);
        bumpInterval = setInterval(randomBump, 1500)
    }

    if (currentTime === 40) {
        clearInterval(bumpInterval);
        bumpInterval = setInterval(randomBump, 1250)
    }

    if (currentTime === 30) {
        clearInterval(bumpInterval);
        bumpInterval = setInterval(randomBump, 1000)
    }

    if (currentTime === 20) {
        clearInterval(bumpInterval);
        bumpInterval = setInterval(randomBump, 750)
    }

    if (currentTime === 10) {
        clearInterval(bumpInterval);
        bumpInterval = setInterval(randomBump, 500)
    }

    if (currentTime === -1) {
        alert('Times up! Your final score is ' + result)
        if (result > currentBest) {
            best.textContent = result
            currentBest = result
        }
        clearInterval(timerId)
        clearInterval(bumpInterval)
        timeLeft.textContent = 60
        score.textContent = 0
        currentTime = 60
        currentScore = 0
        result = 0
        start.disabled = false
        bump.forEach(className => {
            className.classList.remove('bump')
        })

    }
}