//Select elements
var start = document.getElementById ("start");
var quiz= document.getElementById("quiz");
var question= document.getElementById("question");
var choiceA= document.getElementById("A");
var choiceB= document.getElementById("B");
var choiceC= document.getElementById("C");
var counter= document.getElementById("counter");
var progress= document.getElementById("progress");
var scoreDiv= document.getElementById("scoreContainer");
var highscore= document.getElementById("highscore");
var resultDiv= document.getElementById("result");

//Questions
var questions= [
    {
        question:"What does CSS stand for?",
        choiceA: "Computational Style Script",
        choiceB: "Cascading Style Sheets",
        choiceC: "Cascading Style Samples",
        correct: "B"
    },
    {
        question:"What do you most often use brackets[] for?",
        choiceA: "Enclosing an array",
        choiceB: "Enclosing an argument",
        choiceC: "Enclosing a string",
        correct: "A"
    },
    {
        question:"Which is a valid data type?",
        choiceA: "Bringlington",
        choiceB: "Binary",
        choiceC: "Boolean",
        correct: "C"
    }, 
    {
        question:"Fill in the blank: function(_____)?",
        choiceA: "Arguments",
        choiceB: "An if function",
        choiceC: "A string",
        correct: "A"
    }, 
    {
        question:"Array items are separated by what?",
        choiceA: "Periods",
        choiceB: "Hyphens",
        choiceC: "Commas",
        correct: "C"
    }
];

var lastQuestion= questions.length-1;
var runningQuestion= 0;
var count= 50;
var quizTime= 100;
var timer; 
var score=0;

//Puts questions in container
function renderQuestion() {
    q= questions[runningQuestion];

    question.innerHTML= "<p>" + q.question + "</p>";
    choiceA.innerHTML= q.choiceA;
    choiceB.innerHTML= q.choiceB;
    choiceC.innerHTML= q.choiceC;
    
}

start.addEventListener ("click", startQuiz);

function startQuiz() {
    start.style.display= "none";
    renderQuestion();
    quiz.style.display= "block";
    renderProgress();
    renderCounter();
    timer= setInterval(renderCounter, 1000);
}

//Creates the progress bar
function renderProgress() {
    for (var qIndex= 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex +"></div>";
        }
    }
//Here's the timer
function renderCounter() {
     if ( count > 0) {
        count --;
        counter.innerHTML= count;
         
    } else {
        count= 0;
        clearInterval(timer);
        scoreRender();
    }
}
//check those answers
function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
        count +=5;
        score ++;
    }else {
// -5sec
        document.getElementById(runningQuestion).style.backgroundColor = "#f00";
        count -=5;
    }
    //count=0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        clearInterval(timer);
        scoreRender();

    }
}

function scoreRender(){
    scoreDiv.style.display= "block";
    
    highscore.addEventListener( "submit",  function() { 
            event.preventDefault();
            var initials= document.getElementById("initials").value;
            resultDiv.innerHTML += " " + initials;
        }
        );
    
    var totalScore= score * (count);
    resultDiv.innerHTML= "Final Score= " + totalScore;
    
    var resultNum= JSON.stringify(totalScore);
    var resultName= JSON.stringify(initials);

    localStorage.setItem(resultNum, 0);
    localStorage.setItem(resultName, "");
    
    


//now I need to log it

//final return
 
}
