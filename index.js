var readlineSync = require("readline-sync")
var score = 0;
var arr =
[
questionOne = {
  question: "Who are Harry’s two best friends?",
  answer: "HERMIONE AND RON"
},

questionTwo = {
  question: "How did Harry and Ron get to Hogwarts their second year?",
  answer: "FLYING CAR"
},

questionThree = {
  question: "Are Harry and Ron related?",
  answer: "NO"
},

questionFour = {
  question: "What is Harry’s Father’s name?",
  answer: "JAMES POTTER"
},

questionFive = {
  question: "What colour are Harry’s eyes?",
  answer: "GREEN"
},
]

for(var i=0;i<arr.length;i++)
  {
    var userAnswer = readlineSync.question(arr[i].question);
    
    if(userAnswer.toUpperCase() === arr[i].answer) 
      {
        console.log("you are right");
        score = score + 1;     
      }
    else
      {
        console.log("you are wrong")
      }
  }

console.log("your score is: ",score);

if(score>4)
  {
    console.log("You have beaten the high score, please send a screenshot");
  }