document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');
    const startBtn = document.getElementById('start-btn');

    // Quiz Elements
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const categoryDisplay = document.getElementById('category-display');
    const questionCount = document.getElementById('question-count');
    const progressBar = document.getElementById('progress-bar');
    const finalScore = document.getElementById('final-score');

    let currentQuestionIndex = 0;
    let score = 0;
    let userHasAnswered = false;

    // Start Quiz
    startBtn.addEventListener('click', () => {
        startScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');
        loadQuestion();
    });

    function loadQuestion() {
        userHasAnswered = false;
        const currentQuestion = quizData[currentQuestionIndex];

        // Update UI
        questionText.textContent = currentQuestion.question;
        categoryDisplay.textContent = currentQuestion.category;
        questionCount.textContent = `${currentQuestionIndex + 1}/${quizData.length}`;
        progressBar.style.width = `${((currentQuestionIndex) / quizData.length) * 100}%`;

        // Create Options
        optionsContainer.innerHTML = '';
        currentQuestion.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.classList.add('option-btn');
            btn.textContent = option;
            btn.onclick = () => selectOption(btn, index, currentQuestion.answer);
            optionsContainer.appendChild(btn);
        });
    }

    function selectOption(selectedBtn, selectedIndex, correctIndex) {
        if (userHasAnswered) return; // Prevent double clicking
        userHasAnswered = true;

        const buttons = optionsContainer.querySelectorAll('.option-btn');

        if (selectedIndex === correctIndex) {
            score++;
            selectedBtn.classList.add('correct');
        } else {
            selectedBtn.classList.add('wrong');
            // Show correct answer
            buttons[correctIndex].classList.add('correct');
        }

        // Disable all buttons
        buttons.forEach(btn => btn.style.pointerEvents = 'none');

        // Wait and go to next
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) {
                loadQuestion();
            } else {
                showResults();
            }
        }, 1500); // 1.5s delay
    }

    function showResults() {
        quizScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');

        const percentage = (score / quizData.length) * 100;
        finalScore.textContent = `${score}/${quizData.length}`;

        // Custom message based on score
        let message = "";
        if (percentage >= 80) message = "สุดยอด! คุณคือผู้เชี่ยวชาญ";
        else if (percentage >= 50) message = "ทำได้ดี! เรียนรู้อีกนิดคุณจะเก่งขึ้น";
        else message = "พยายามเข้า! การเรียนรู้ไม่มีที่สิ้นสุด";

        // Append message below score (simple text content update)
        const msgElement = document.createElement('p');
        msgElement.innerHTML = `<span class="gradient-text" style="font-size: 1.5rem; font-weight: bold;">${message}</span>`;
        finalScore.after(msgElement);
    }
});
