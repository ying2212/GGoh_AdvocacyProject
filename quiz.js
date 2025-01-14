const quizData = [
    {
      question: "Which trait best describes an entrepreneurial mindset?",
      options: ["Resilience", "Compliance", "Conformity", "Indifference"],
      answer: "Resilience"
    },
    {
      question: "Which is more important for an entrepreneur?",
      options: ["Creative problem-solving", "Following a routine", "Avoiding risks", "Sticking to tradition"],
      answer: "Creative problem-solving"
    },
    {
      question: "Entrepreneurs often view failure as:",
      options: ["A setback", "A learning opportunity", "Something to be avoided", "A sign to quit"],
      answer: "A learning opportunity"
    },
    {
      question: "How do entrepreneurs approach risk?",
      options: ["Avoiding it", "Calculating and managing it", "Ignoring it", "Taking unnecessary risks"],
      answer: "Calculating and managing it"
    },
    {
      question: "Which action is an entrepreneurial mindset likely to prioritize?",
      options: ["Building a personal network", "Avoiding competition", "Sticking to one idea", "Relying solely on luck"],
      answer: "Building a personal network"
    },
    {
      question: "When faced with uncertainty, entrepreneurs usually:",
      options: ["Seek stability", "Adapt and innovate", "Stick to the plan", "Avoid taking action"],
      answer: "Adapt and innovate"
    },
    {
      question: "What motivates an entrepreneur the most?",
      options: ["Financial gain", "Passion for the idea", "Following trends", "Impressing others"],
      answer: "Passion for the idea"
    },
    {
      question: "Which of these is important for an entrepreneur to manage?",
      options: ["Time and priorities", "Strict schedules", "Working alone", "Financial risk"],
      answer: "Time and priorities"
    },
    {
      question: "An entrepreneur is most likely to react to challenges by:",
      options: ["Giving up", "Finding creative solutions", "Blaming others", "Waiting for help"],
      answer: "Finding creative solutions"
    },
    {
      question: "How do entrepreneurs typically deal with competition?",
      options: ["Ignore it", "React aggressively", "Study and learn from it", "Quit the business"],
      answer: "Study and learn from it"
    },
];

  
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;

    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;

    if (selectedButton.innerText === answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").innerHTML = `
      <h1>Quiz Completed!</h1>
      <img src="https://media.tenor.com/rW8l5mMLBzgAAAAj/thankyou-cat.gif" alt="Thank You Cat">
      <p>Your entrepreneurial mindset score: ${score}/${quizData.length}</p>
      <p>${score >= 3 ? "You have a strong entrepreneurial mindset!" : "Consider developing more entrepreneurial traits to enhance your mindset."}</p>
    `;
  }
  
showQuestion();
