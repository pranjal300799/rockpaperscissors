let callCounter=0,
playerScore=0,computerScore=0;
function getPlayersChoice(move)//gets player input
{  let playermove=move.target.parentElement.classList.value;
    move.stopPropagation();
    playermove=playermove.toLowerCase();
   return playermove;
}
function getComputerChoice()//gets computer input
{   let string;
    let randomNumber= ((Math.floor(Math.random()*100))%3);
    if(randomNumber===0)
    {
        string="rock";
    }
    else if(randomNumber===1)
    {
        string= "paper";
    }
    else
    {
        string="scissors";
    }
    transform(string);
    return string;
}
function gameEngine(playerChoice,computerChoice)//logic for the game
{    let move1="rock"   
     ,move2="paper"
     ,move3="scissors";          
    if(playerChoice===move1&&computerChoice===move2)
    {
       return 0;
    }
    else if(playerChoice===move2 && computerChoice===move1)
    {
        return 1;
    }
    else if(playerChoice===move2&&computerChoice===move3)
    {
        return 2;
    }
    else if(playerChoice===move3&&computerChoice===move2)
    {
        return 3;
    }
    else if(playerChoice===move1&&computerChoice===move3)
    {
        return 4;
    }
    else if(playerChoice===move3&&computerChoice===move1)
    {
        return 5;
    }
    else if(playerChoice===move1&&computerChoice===move1)
    {
        return 6;
    }
    else if (playerChoice===move2&&computerChoice===move2)
    {
        return 7;
    }
    else if (playerChoice===move3&&computerChoice===move3)
    {
        return 8;
    }
    else
    {
        return 9;
    }
}
function result(output)//gives result based on output from engine
{   let fact1="Paper beats rock"
    ,fact2="Scissors beats paper"
    ,fact3="Rock beats Scissors"
    ,message1="You won"
    ,message2="You Lose"
    ,message3="Its a tie";

    switch(output)
    {   
        case 0: computerScore++;
                return `${message2},${fact1}`
                break;
        case 1:playerScore++;
               return  `${message1},${fact1}`
               break;
        case 2:computerScore++;
               return `${message2},${fact2}`
               break;
        case 3:playerScore++;
               return `${message1},${fact2}`
               break;
        case 4:playerScore++;
               return `${message1},${fact3}`
               break;
        case 5:computerScore++;
               return `${message2},${fact3}`
               break;
        case 6:
        case 7:
        case 8:return`${message3}`
        break;
        default:return "you entered wrong input check spelling";
    }
}
function game(e)//plays a single round of game and returns the otput
{    callCounter+=1;
     let currentRoundResult=(result(gameEngine(getPlayersChoice(e),getComputerChoice())));// dec 27 added the event parameter e in the game()    
     printCurrentRoundResult(currentRoundResult,callCounter);
}
function printCurrentRoundResult(e,callCounter)
{   if(callCounter<=5)
    {
      let arena=document.querySelector(".arena");
      let para=document.createElement('p');
      para.classList.add("currentresult");
      para.textContent=`Round ${callCounter},${e}`;
      arena.appendChild(para);
      updateScore();
    }
    else
    {
        cleanArena();
    }
}
function cleanArena()
{   let parent=document.querySelector(".arena")
    let arenaNodesList=document.querySelectorAll(".arena>p");
    arenaNodesList.forEach((e)=>{parent.removeChild(e)});
    updateScore("reset");
}
function updateScore(flag)
{   let playerBoard=document.querySelector(".playersscore");
    let computerBoard=document.querySelector(".computerscore");
  if(flag!=="reset")
  { 
    playerBoard.textContent=`${playerScore}`;
    computerBoard.textContent=`${computerScore}`;
  }
  else
  {  finalResult();
     playerBoard.textContent="-";
     computerBoard.textContent="-";
  }
}
function finalResult()
{   let result;
    let arena=document.querySelector(".arena")
    let resultantString=document.createElement('p');
    if(playerScore===computerScore)
    {
       result=`its a tie`;
    }
    else if(playerScore>=computerScore)
    {"You won,saviour of humans"
      result="You won,saviour of humans";
    }
    else
    {
       result="You lost to the evil computer";
    }
    resultantString.textContent=result;
    arena.appendChild(resultantString);
}
function transform(string)
{
    let targetImage=document.querySelector(`.computer>.moves>.${string}>img`);
    targetImage.classList.add("magnification");
}
function finishTransit(e)
{
    e.target.classList.remove('magnification');
}
let movesList = document.querySelectorAll(".human>.moves>div");
movesList.forEach(move=>move.addEventListener('click',game,{capture:false}));// dec 27 added game as the callback function

let transitedNodesList=document.querySelectorAll(".computer>.moves img");//dec 29
transitedNodesList.forEach(node=>node.addEventListener('transitionend',finishTransit)); //dec29







