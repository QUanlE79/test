const questions = document.querySelectorAll('.question-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentQuestion = 0;

function updateQuestions() {
    questions.forEach((question, index) => {
        question.classList.toggle('active', index === currentQuestion);
    });

    prevBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = currentQuestion === questions.length - 1;
}

prevBtn.addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        updateQuestions();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        updateQuestions();
    }
});

updateQuestions();
