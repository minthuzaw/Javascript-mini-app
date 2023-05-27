// Quiz App
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const resultElement = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: 'What is the capital city of France?',
        choices: ['Paris', 'London', 'Berlin', 'Rome'],
        correctAnswer: 0
    },
    {
        question: 'Which planet is known as the Red Planet?',
        choices: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 1
    },
    {
        question: 'Who painted the Mona Lisa?',
        choices: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Michelangelo'],
        correctAnswer: 2
    }
];

// Load Question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    choicesElement.innerHTML = '';
    currentQuestion.choices.forEach((choice, index) => {
        const choiceItem = document.createElement('li');
        choiceItem.classList.add('choice');
        choiceItem.innerHTML = `
            <input type="radio" id="choice${index}" name="choice" value="${index}">
            <label for="choice${index}">${choice}</label>
        `;
        choicesElement.appendChild(choiceItem);
    });
}

// Check Answer
function checkAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice) {
        const selectedAnswer = parseInt(selectedChoice.value);

        if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
            score++;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }
}

// Show Result
function showResult() {
    questionElement.textContent = '';
    choicesElement.innerHTML = '';
    resultElement.textContent = `Your score: ${score} out of ${questions.length}`;
}

// Initialize Quiz
loadQuestion();
