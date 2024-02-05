
let shuffledQuestions = undefined, currentQIndex = undefined;
let questionElement = document.getElementById('question');
let answerBtnsElement = document.getElementById('answer-btns');
const overlayBG = document.getElementById('overlay');
const progressBar = document.getElementById('progress');

window.onload = function() {
    
    setTimeout(function() {
        let p1 = document.getElementById('p1');
        p1.style.opacity = 1;
    }, 1000);
    setTimeout(function() {
        let p2 = document.getElementById('p2');
        p2.style.opacity = 1;
    }, 3000);
    setTimeout(function() {
        let p3 = document.getElementById('p3');
        p3.style.opacity = 1;
    }, 3000);
    setTimeout(function() {
        let prove = document.getElementById('prove');
        prove.style.opacity = 1;
    }, 5000);

}

function showQuiz() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQIndex = 0;
    overlayBG.style.opacity = 1;
    overlayBG.style.zIndex = 2;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQIndex]);
}

function resetState() {
    while (answerBtnsElement.firstChild) {
        answerBtnsElement.removeChild(answerBtnsElement.firstChild);
    }
    overlayBG.classList.remove('correct');
}

function showQuestion( question ) {
    questionElement.innerText = question.question;
    question.answers.forEach( answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add('h-14', 'rounded-md', 'transition-opacity', 'duration-150', 'hover:opacity-60', 'q-btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener( 'click', selectAnswer);
        answerBtnsElement.appendChild(button);
    });
}

function selectAnswer(e) {
    const selected = e.target;
    const correct = selected.dataset.correct;
    const currQuestion = shuffledQuestions[currentQIndex];
    setStatusClass(overlayBG, correct)
    setStatusClass(selected, correct);
    if (correct) {
        if (currQuestion.question === 'Co mi sie najbardziej w tobie podoba?'){
            Array.from(answerBtnsElement.children).forEach(button => {
                setStatusClass(button, correct);
            });
        }
        Array.from(answerBtnsElement.children).forEach(button => {
            button.removeEventListener('click', selectAnswer);
        });
        updateProgress();
        setTimeout(function() {
            if (shuffledQuestions.length > currentQIndex+1){
                currentQIndex++;
                setNextQuestion();
            }
            else {
                window.location.href = "finished.html";
            }
        }, 2000);
    }
}

function setStatusClass( element, correct ){
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    }
    else {
        element.classList.add('wrong');
    }
}

function clearStatusClass( element ) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function updateProgress() {
    const newLength = Math.floor(progressBar.parentElement.clientWidth / questions.length) * (currentQIndex+1) +1;
    progressBar.style.width = `${newLength}px`;
}

const questions = [
    {
        question: 'Jakie auto chce kupić najbardziej',
        answers: [
            {text: 'Audi RS6', correct: false},
            {text: 'BMW M3 touring', correct: false},
            {text: 'Toyota Supra', correct: true},
            {text: 'BMW E36', correct: false}
        ]
    },
    {
        question: 'Jaki jest mój ulubiony kolor?',
        answers: [
            {text: 'Czerwony', correct: false},
            {text: 'Czarny', correct: true},
            {text: 'Zielony', correct: false},
            {text: 'Niebieski', correct: false}
        ]
    },
    {
        question: 'Jaki sport najbardziej lubie?',
        answers: [
            {text: 'MMA', correct: true},
            {text: 'Kickboxing (K1)', correct: false},
            {text: 'Boks', correct: false},
            {text: 'Brazylijskie Jiu-Jitsu', correct: false}
        ]
    },
    {
        question: 'Jaka jest moja ulubiona gra?',
        answers: [
            {text: 'Cs', correct: false},
            {text: 'Valorant', correct: false},
            {text: 'Liga', correct: true},
            {text: 'Fifa', correct: false}
        ]
    },
    {
        question: 'Kiedy zaczęliśmy pisać?',
        answers: [
            {text: '19 Września', correct: false},
            {text: '21 Września', correct: false},
            {text: '17 Września', correct: false},
            {text: '18 Września', correct: true}
        ]
    },
    {
        question: 'Co mi sie najbardziej w tobie podoba?',
        answers: [
            {text: 'Twoje Oczy', correct: true},
            {text: 'Twój Uśmiech', correct: true},
            {text: 'Twój Charakter', correct: true},
            {text: 'Twoje Włosy', correct: true}
        ]
    },
]