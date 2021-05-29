const readlinesync=require('readline-sync')
const chalk=require('chalk')

let score=0;
let playerName=readlinesync.question(chalk.bold.magenta("May I know your name ?"));

console.log(chalk.bold.cyan("Welcome "+ playerName + " to DO YOU KNOW KUNAL ?"))

function play(question,ans,options)
{
  console.log("Question ");
  console.log(chalk.bold.yellow(question));
  let playerAnswer=readlinesync.keyInSelect(options);
  if((playerAnswer+1) === ans){
    console.log(chalk.green("You are right"));
    score=score+5;
  }
  else
  {
    console.log(chalk.red("You are wrong"));
    score=score-1;
  }

  console.log("Your current score is" ,score);
  console.log("------------------");
}


const questions=[{
  ques:"What is my name ? ",
  ans : 1,
  options:["Kunal Gupta","Louis Litt","Harvey Specter","Hriday Bhatia"]
},
{
  ques:"Where do I live ? ",
  ans : 1,
  options:["Hisar","Rohthak","Sirsa","Dehradun"]
},
{
  ques:"What is my favourite sport? ",
  ans:2,
  options:["Cricket","Table Tennis","Football","Swimming"]
},
{
  ques:"Last book read by me ",
  ans:4,
  options:["Becoming","The Alchemist","The 4 hour work week","The motivation myth"]
},
{
  ques:"At what age I started to code? ",
  ans:3,
  options:["21","11","18","19"]
}];



for( let i=0;i<questions.length;i++){
  let currentQuestion=questions[i];
  play(currentQuestion.ques,currentQuestion.ans,currentQuestion.options)
}

console.log("Congratulations Your final score is", score);