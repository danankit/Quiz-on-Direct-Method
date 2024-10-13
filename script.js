const quizData = [
    {
        question: "Which theorist’s ideas most closely align with the Natural/Direct Method?",
        options: ["B.F. Skinner", "Stephen Krashen", "Charles Berlitz", "Noam Chomsky"],
        correct: 2 // Charles Berlitz
    },
    {
        question: "In the Direct Method, how is vocabulary typically introduced?",
        options: ["By translating words into the learner’s native language", "Through deductive reasoning of vocabulary lists", "Through contextualized use in sentences and conversations", "By analyzing etymology of words"],
        correct: 2 // Through contextualized use in sentences and conversations
    },
    {
        question: "The Direct Method was developed as a reaction to which previous method of language teaching?",
        options: ["Grammar-Translation Method", "Audio-Lingual Method", "Communicative Approach", "Task-Based Learning"],
        correct: 0 // Grammar-Translation Method
    },
    {
        question: "Which of the following describes how grammar is treated in the Direct Method?",
        options: ["Grammar is taught through explicit explanation of rules", "Grammar is not taught; it is assumed that learners will pick it up naturally", "Grammar is taught inductively through exposure to language", "Grammar is taught after learners have mastered vocabulary"],
        correct: 2 // Grammar is taught inductively through exposure to language
    },
    {
        question: "What is the role of the teacher in a classroom using the Direct Method?",
        options: ["Facilitator of conversations in the target language", "Translator between the native and target languages", "Provider of explicit grammar rules and vocabulary lists", "Examiner of the written translations"],
        correct: 0 // Facilitator of conversations in the target language
    },
    {
        question: "According to the principles of the Direct Method, which skill is developed first in learners?",
        options: ["Writing", "Listening", "Reading", "Translation"],
        correct: 1 // Listening
    },
    {
        question: "In the Direct Method, which strategy is often used to avoid reliance on the mother tongue?",
        options: ["Silent period", "Mimicry and memorization", "Visual aids and physical demonstration", "Structured grammar exercises"],
        correct: 2 // Visual aids and physical demonstration
    },
    {
        question: "How does the Direct Method align with the concept of language learning as a natural process?",
        options: ["It mimics the way children learn their first language through immersion and use", "It focuses on memorization and repetition of vocabulary", "It emphasizes translation to establish a strong grammatical foundation", "It teaches learners through written texts before conversation"],
        correct: 0 // It mimics the way children learn their first language through immersion and use
    },
    {
        question: "Which of the following is considered a limitation of the Direct Method?",
        options: ["Lack of focus on listening and speaking skills", "Inability to teach abstract concepts due to the absence of translation", "Overemphasis on grammar rules", "Exclusive focus on reading and writing"],
        correct: 1 // Inability to teach abstract concepts due to the absence of translation
    },
    {
        question: "The Direct Method places heavy emphasis on:",
        options: ["Written proficiency over oral skills", "Oral proficiency and direct interaction in the target language", "Accuracy in translation from the native language", "Use of technological aids to enhance learning"],
        correct: 1 // Oral proficiency and direct interaction in the target language
    }
];

let currentQuestion = 0;
let score = 0;
let startTime, endTime;  // Variables to track time

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionButtons = document.querySelectorAll('.option');

    questionElement.textContent = quizData[currentQuestion].question;
    optionButtons.forEach((button, index) => {
        button.textContent = quizData[currentQuestion].options[index];
        button.style.backgroundColor = "#3f51b5"; // Reset option color
        button.disabled = false; // Enable options
    });
}

function selectOption(optionIndex) {
    const optionButtons = document.querySelectorAll('.option');
    if (optionIndex === quizData[currentQuestion].correct) {
        score++;
        optionButtons[optionIndex].style.backgroundColor = "#4CAF50"; // Correct answer color
    } else {
        optionButtons[optionIndex].style.backgroundColor = "#f44336"; // Wrong answer color
    }
    optionButtons.forEach(button => button.disabled = true); // Disable all options after selection
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        endTime = new Date();  // Record end time when quiz finishes
        showScore();
    }
}

function showScore() {
    // Calculate time difference in seconds
    const timeTaken = Math.floor((endTime - startTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;

    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h2>You scored ${score} out of ${quizData.length}</h2>
        <h3>Total time taken: ${minutes} minutes and ${seconds} seconds</h3>
        <button onclick="restartQuiz()">Restart Quiz</button>
    `;
}

function restartQuiz() {
    score = 0;
    currentQuestion = 0;
    startTime = new Date();  // Restart the timer
    loadQuestion();
}

document.addEventListener('DOMContentLoaded', function() {
    startTime = new Date();  // Start the timer when quiz loads
    loadQuestion();
});
