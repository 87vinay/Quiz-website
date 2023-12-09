const quizData = [
  {
    type: "html",
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyper Transfer Markup Language",
      "Hypertext Machine Language",
      "Hyperlink and Text Markup Language",
    ],
    correct: 0,
  },
  {
    type: "html",
    question: "Which CSS property is used to spacing between elements?",
    options: ["Margin", "Padding", "Spacing", "Border-Spacing"],
    correct: 1,
  },
  {
    type: "html",
    question:
      "What is the javascript function used to select an HTML element by its id?",
    options: [
      "Document.query",
      "GetElementById",
      "SetElement",
      "FindElementById",
    ],
    correct: 1,
  },
  {
    type: "html",
    question: "What is the correct HTML tag used for creating a line break?",
    options: ["<br>", "<lb>", "<break>", "<linebreak>"],
    correct: 0,
  },
  {
    type: "html",
    question: "Which HTML tag is used to create an ordered list?",
    options: ["<ul>", "<li>", "<ol>", "<dl>"],
    correct: 2,
  },
  {
    type: "css",
    question: "What is the correct CSS property to change the text color?",
    options: ["text-color", "color", "font-color", "text-style"],
    correct: 1,
  },
  {
    type: "css",
    question:
      "Which CSS property is used to set the background color of an element?",
    options: ["bgcolor", "color", "background-color", "bg-color"],
    correct: 2,
  },
  {
    type: "css",
    question:
      "Which CSS property is used to define the size of rows and columns in a CSS Grid layout?",
    options: ["grid-area", "grid-size", "grid-template", "grid-column-row"],
    correct: 0,
  },
  {
    type: "css",
    question: "Which CSS property is used for controlling the layout?",
    options: ["display", "position", "float", "overflow"],
    correct: 0,
  },
  {
    type: "javascript",
    question: 'What is the result of 3 + 2 + "7" in JavaScript?',
    options: ["57", "12", "32", "57 string"],
    correct: 3,
  },
  {
    type: "javascript",
    question:
      "Which built-in method returns the character at the specified index?",
    options: ["characterAt()", "getCharAt()", "charAt()", "getCharacter()"],
    correct: 2,
  },
  {
    type: "javascript",
    question: 'What is the output of 10 + 20 + "30" in JavaScript?',
    options: ["60", "50", "3030", "30 string"],
    correct: 3,
  },
  {
    type: "javascript",
    question: "What keyword is used to declare variables in JavaScript?",
    options: ["var", "let", "const", "int"],
    correct: 0,
  },
  {
    type: "javascript",
    question:
      "Which function is used to parse a string to an integer in JavaScript?",
    options: ["parseInt()", "stringToInt()", "toInteger()", "parseInteger()"],
    correct: 0,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const quizSection = document.querySelector(".quiz-section");
  const questionElm = document.getElementById("question");
  const option_1 = document.getElementById("option_1");
  const option_2 = document.getElementById("option_2");
  const option_3 = document.getElementById("option_3");
  const option_4 = document.getElementById("option_4");
  const answerElm = document.querySelectorAll(".answer");
  const submitBtn = document.getElementById("submit");

  let currentQuiz = 0;
  let score = 0;
  let currentQuizData = [];

  const loadQuiz = () => {
    const { question, options } = currentQuizData[currentQuiz];

    questionElm.innerText = `${currentQuiz + 1}: ${question}`;

    options.forEach((curOption, index) => {
      window[`option_${index + 1}`].innerText = curOption;
    });
  };

  const getSelectedoption = () => {
    const answerElement = Array.from(answerElm);
    return answerElement.findIndex((curElem) => curElem.checked);
  };

  const deselectedAnswers = () => {
    answerElm.forEach((curElem) => {
      curElem.checked = false;
    });
  };

  const showQuiz = (type) => {
    currentQuizData = quizData.filter((item) => item.type === type);

    if (currentQuizData.length > 0) {
      quizSection.classList.remove("hidden");
      document.querySelector(".start-page").style.display = "none";
      currentQuiz = 0;
      score = 0;
      loadQuiz();
    }
  };

  submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedoption();

    if (selectedOptionIndex === currentQuizData[currentQuiz].correct) {
      score += 1;
    }

    currentQuiz++;

    if (currentQuiz < currentQuizData.length) {
      deselectedAnswers();
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <div class="result"> 
        <h2>🏆 Your Score: ${score}/${currentQuizData.length} Correct Answers</h2>
        <p> Congratulations on completing the Quiz! 🎉</p>
        <button class="reload-button" onclick="location.reload()">Play Again 🔁</button>
        </div>
        `;
    }
  });

  const quizButtons = document.querySelectorAll(".quiz-button");

  quizButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const quizType = e.target.dataset.type;
      showQuiz(quizType);
    });
  });
});
