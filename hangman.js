const endGameMsg = document.getElementById('endGame');
const gameInfo = document.getElementById('gameInfo');
const inputSection = document.getElementById('inputSection');
const guessInput = document.getElementById('guessInput');
const errorMessage = document.getElementById('errorMessage');

let randomWord, answerArray, remainingLetters, currentAttempt, attempt, usageLetters;

function getWords() {
    const storedWords = localStorage.getItem('words');
    if (!storedWords) {
        const defaultWords = ['javascript', 'ruby', 'python', 'monkey', 'pancake'];
        localStorage.setItem('words', JSON.stringify(defaultWords));
        return defaultWords;
    }
    return JSON.parse(storedWords);
}

function saveWord(newWord) {
    const words = getWords();
    if (!words.includes(newWord)) {
        words.push(newWord);
        localStorage.setItem('words', JSON.stringify(words));
    }
}

function addWord() {
    let newWord = prompt('Enter the new word!');
    if (newWord) {
        saveWord(newWord.toLowerCase());
        alert(`The word "${newWord}" has been added!`);
    }
}

function startGame() {
    clearCanvas()
    const words = getWords();
    randomWord = words[Math.floor(Math.random() * words.length)];
    answerArray = Array(randomWord.length).fill("_");
    remainingLetters = randomWord.length;
    usageLetters = [];
    currentAttempt = 0;
    attempt = 6; 

    console.log(randomWord); 

  
    gameInfo.innerText = `Word: ${answerArray.join(' ')}\nAttempts: ${currentAttempt}/${attempt}\nUsed Letters: ${usageLetters.join(', ')}`;
    endGameMsg.innerText = "";
    errorMessage.innerText = "";
    inputSection.style.display = "block";
}

function submitGuess() {
    const guess = guessInput.value.toLowerCase();
    guessInput.value = "";
    errorMessage.innerText = "";

    if (!guess.match(/^[a-z]$/)) {
        errorMessage.innerText = "Please enter a valid letter!";
        return;
    }

    if (usageLetters.includes(guess)) {
        errorMessage.innerText = "You already used this letter!";
        return;
    }

    let letterFound = false;
    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === guess) {
            answerArray[i] = guess;
            remainingLetters--;
            letterFound = true;
        }
    }

    if (!letterFound) {
        currentAttempt++;
        drawStage(currentAttempt);
    }

    usageLetters.push(guess);
    
    gameInfo.innerText = `Word: ${answerArray.join(' ')}\nAttempts: ${currentAttempt}/${attempt}\nUsed Letters: ${usageLetters.join(', ')}`;
    
    if (remainingLetters === 0) {
        endGameMsg.innerText = `You win! The answer was "${randomWord}".`;
        inputSection.style.display = "none";
    } else if (currentAttempt >= attempt) {
        endGameMsg.innerText = `You lose! The answer was "${randomWord}".`;
        inputSection.style.display = "none";
    }
}
