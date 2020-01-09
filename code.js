// -- Quiz Game --
// Web and API Design @ Kristiania University College
// Ole Algoritme, 2020

let quiz = null;
let question = null;
let correctAnswerIdx = 0;
let answers = [];
let quizes = [];

class Quiz {
    constructor(question, answers, correctAnswerIdx) {
        if(typeof question !== 'string') 
            throw Error("Question needs to be a type String");
        else if (!Array.isArray(answers)) 
            throw Error("Answers is not an array");
        else if (typeof correctAnswerIdx !== 'number') 
            throw Error("Correct answer does not point to an index of type Number");
        this._question = question;
        this._answers = answers;
        this._correctAnswerIdx = correctAnswerIdx;
    }

    get question() {
        return this._question;
    }
    
    set question(questionStr) {
        this._question = questionStr;
    } 

    get answers() {
        return this._answers;
    }
    
    set answers(answersArray) {
        this._answers = answersArray;
    } 

    get correctAnswerIdx() {
        return this._correctAnswerIdx;
    }
    
    set correctAnswerIdx(answerIdx) {
        this._correctAnswerIdx = answerIdx;
    } 

    correctAnswer() {
        return this._answers[this._correctAnswerIdx];
    }
}

function parseQuiz(quiz) {
    console.log("Question: " + quiz.question);
    console.log("Answers: " + quiz.answers);
    console.log("Correct answer Index: " + quiz.correctAnswerIdx);
    console.log("Correct answer (String): " + quiz.correctAnswer());
}

function addQuizToHTML(quiz) {
    let questionList = document.getElementById('question-list');
    let questionContainer = document.createElement('div');
    let questionText  = document.createElement('p');
    
    questionText.innerHTML = quiz.question;
    questionContainer.appendChild(questionText);

    quiz.answers.forEach(function(answer) {
        let answerButton = document.createElement('button');
        answerButton.innerHTML = answer;
        
        // Add listeners for both correct and wrong answers
        // Show appropriate alert message
        if (answer === quiz.answers[quiz.correctAnswerIdx]) 
            answerButton.addEventListener('click', function(e) {
                alert('CORRECT!');
            });
        else 
            answerButton.addEventListener('click', function(e) {
                alert('WRONG!!');
            });

        questionContainer.appendChild(answerButton);
    });

    questionList.appendChild(questionContainer);
}

function resetState() {
    let quiz = null; 
    let question = null;
    let correctAnswerIdx = 0;
    let answers = [];
    let quizes = [];
}

// #1 RGB question
question = "What color is RGB 255,255,0 ?";
answers = [ "Magenta", "Orange", "Red", "Blue" ];
correctAnswerIdx = 1; // index is 0-based
quiz = new Quiz(question, answers, correctAnswerIdx);
quizes.push(quiz);
resetState();

// #2 Binary question
question = "What is the decimal representation of binary 0000 0010 ?";
answers = [ "1", "4", "8", "2" ];
correctAnswerIdx = 3; // index is 0-based
quiz = new Quiz(question, answers, correctAnswerIdx);
quizes.push(quiz);
resetState();

// #3 HTTPS question 
question = "What is HTTPS ?";
answers = [ "HTTPS is HTTP over TLS/SSL", "HTTPS is the same as HTTP but with cookies", "HTTPS does not exist", "HTTPS is a misspelled version of SHTTP" ];
correctAnswerIdx = 0; // index is 0-based
quiz = new Quiz(question, answers, correctAnswerIdx);
quizes.push(quiz);
resetState();

// #4 Math question
question = "What is 8+8*(4-2)";
answers = [ "64", "28", "32", "30" ];
correctAnswerIdx = 2; // index is 0-based
quiz = new Quiz(question, answers, correctAnswerIdx);
quizes.push(quiz);
resetState();

// Show questions and answers
quizes.forEach(function(quiz) {
    addQuizToHTML(quiz);
    parseQuiz(quiz);
});
