var readlineSync=require("readline-sync");
console.log("Welcome!!!\nLet's play a quiz on Game Of Thrones")
var playerName=readlineSync.question("Enter Player Name: ")

var score=0;

function play(question,answer)
  {
  userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase()==answer.toUpperCase())
  {
    score++;
    console.log("You Are Correct!!");
  }
    else
  {
      console.log("You Are Wrong");
    }

    console.log("Current Score: "+score);
    console.log("---------------------");
    
  }
var question1=
  {
    question: "Who is the youngest of Ned Stark’s children?\n A.Rickon\n B.Sansa\n C.Bran\n D.Arya\n",
    answer: "A"
  }
var question2=
  {
    question: "Who is Jon Snow’s mother?\n A.Lysa Arryn\n B.Lyanna Stark\n C.Caitlyn Stark\n D.Cersei Lannister\n",
    answer: "B"
  }
var question3=
  {
    question: "What is Davos Seaworth’s nickname?\n",
    answer: "The Onion Knight"
  }
var question4=
  {
    question: "What’s the name of the band of assassins that Arya Stark joins in Braavos?\n",
    answer: "Faceless Men"
  }
var question5=
  {
    question: "Which of the following is not a name of one of Daenerys Targaryen’s dragons?\n A.Drogon\n B.Viserion\n C.Rhaegal\n D.Balerion\n",
    answer: "D"
  }
var question6=
  {
    question: "What are the “house words” of House Stark?.\n",
    answer: "Winter is Coming"
  }

var questions=[question1,question2,question3,question4,question5,question6];

for(var i=0;i<questions.length;i++)
  {
    play(questions[i].question,questions[i].answer);
  }
console.log("Well done "+playerName+"!!! your score is "+score+" points.");
