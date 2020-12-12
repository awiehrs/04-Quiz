// Variables 
var highScores = document.getElementById("viewHighScores");
var timeDisplay = document.getElementById("timeDisplay");
var startButton = document.getElementById("startButton");
var startPage = document.getElementById("start");
var questionPage = document.getElementById("questions");
var questionText = document.getElementById("questionText");
var answerButtons = document.getElementById("answerButtons");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var resultsPage = document.getElementById("results");
var userCorrect = document.getElementById("userScore");
var userScore = document.getElementById("userScore");
var initials = document.getElementById("initials");
var submitBtn = document.getElementById("submitBtn");
var viewScores = document.getElementById("viewScores");
var scoresPage = document.getElementById("scores");
var leaderBoard = document.getElementById("leaderBoard");
var i = 0;
var guess;
var correct = 0;
var secondsLeft = 75;
var timerInterval;
var highscores = [];
var userInitials;
var userScore;

// Questions

var questionSet = [
    {
        "question": "What is the name for the bee that lays every egg in the hive?",
        "button1": "a) The King Bee",
        "button2": "b) The Queen Bee",
        "button3": "c) The Mom Bee",
        "answer": "b",
    },
    {
        "question": "Where do worker bees carry the pollen they've collected before returning to the hive?",
        "button1": "a) Mouth",
        "button2": "b) Hands",
        "button3": "c) Legs",
        "answer": "c",
    },
    {
        "question": "What is the average temperature of the inside of a bee hive in the winter?",
        "button1": "a) 58°f",
        "button2": "b) 120°f",
        "button3": "c) 95°f",
        "answer": "c",
    },
    {
        "question": "What is it called when a group of honeybees leave the hive together to look for a new home?",
        "button1": "a) Swarming",
        "button2": "b) Hive Hunters",
        "button3": "c) Splitting",
        "answer": "a",
    },
    {
        "question": "What color can bees not see?",
        "button1": "a) Blue",
        "button2": "b) Red",
        "button3": "c) Purple",
        "answer": "b",
    }
];

// Functions to Display Questions
function getQuestion(){
    if (i === questionSet.length){
        clearInterval(timerInterval);
        showFinalResults();
        return (secondsLeft);
    }
    questionText.textContent = questionSet[i].question;
    btn1.textContent = questionSet[i].button1;
    btn2.textContent = questionSet[i].button2;
    btn3.textContent = questionSet[i].button3;
}

// Functions for Starting the Quiz
function startTimer (secondsLeft){
    timerInterval = setInterval(timer, 1000);
}

function timer() {
    secondsLeft--;
    timeDisplay.textContent = secondsLeft;
    score.textContent = secondsLeft;
    if(secondsLeft === 0) {
        score.textContent = "0";
        clearInterval(timerInterval);
        showFinalResults();
        return;
    }
}
function onClick(event){
    event.preventDefault();
    //getScores();
    getQuestion();
    startPage.style.display = "none";
    questionPage.style.display = "block";
    timeDisplay.textContent = secondsLeft;
    startTimer(secondsLeft);
}

startButton.addEventListener("click", onClick)

