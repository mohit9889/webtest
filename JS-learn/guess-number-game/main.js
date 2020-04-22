const button = document.querySelector('button');
const textField = document.querySelector('input');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.last-result');
const lowHigh = document.querySelector('.low-high');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function resetGame(){
    guessCount = 1;

    const resetParam = document.querySelectorAll('.result p');
    for(let i=0;i<resetParam.length;i++) {
        resetParam[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    textField.disabled = false;
    button.disabled = false;
    textField.value = '';
    textField.focus();

    lastResult.style.backgroundColor = "white";

    randomNum = getRandomInt(1, 100);    
}

function gameOver() {
    textField.disabled = true;
    button.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = "Start new game";
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

const randomNum = getRandomInt(1, 100);
let guessCount = 1;

button.addEventListener('click', e => {
    const text = Number(textField.value);
    
    console.log(text,randomNum);
    
    if(guessCount === 1){
        guesses.textContent = 'Previous Guess: ';
    }
    guesses.textContent += text + ' ';

    if(text === randomNum){
        lastResult.textContent = 'Congratulations! you got it right!';
        lastResult.style.backgroundColor = 'green';
        lowHigh.textContent = '';
        gameOver();
    } else if (guessCount === 10){
        lastResult.textContent = 'GAME OVER!';
        gameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = "red";
        if (text < randomNum) {
            lowHigh.textContent = 'Last guess was too low!';
        } else if (text > randomNum) {
            lowHigh.textContent = 'Last guess was too high!';
        }
    }

    guessCount++;
    textField.value = '';
    textField.focus();
});