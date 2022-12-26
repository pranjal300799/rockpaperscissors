function getPlayersChoice(move)//gets player input
{  let playermove=move.target.parentElement.classList.value;
    move.stopPropagation();
    playermove=playermove.toLowerCase();
   return playermove;
}
// function getComputerChoice()//gets computer input
// {
//     let randomNumber= ((Math.floor(Math.random()*100))%3);
//     if(randomNumber===0)
//     {
//         return "rock";
//     }
//     else if(randomNumber===1)
//     {
//         return "paper";
//     }
//     else
//     {
//         return "scissors";
//     }
// }
// function gameEngine(playerChoice,computerChoice)//logic for the game
// {    let move1="rock"   
//      ,move2="paper"
//      ,move3="scissors";          
//     if(playerChoice===move1&&computerChoice===move2)
//     {
//        return 0;
//     }
//     else if(playerChoice===move2 && computerChoice===move1)
//     {
//         return 1;
//     }
//     else if(playerChoice===move2&&computerChoice===move3)
//     {
//         return 2;
//     }
//     else if(playerChoice===move3&&computerChoice===move2)
//     {
//         return 3;
//     }
//     else if(playerChoice===move1&&computerChoice===move3)
//     {
//         return 4;
//     }
//     else if(playerChoice===move3&&computerChoice===move1)
//     {
//         return 5;
//     }
//     else if(playerChoice===move1&&computerChoice===move1)
//     {
//         return 6;
//     }
//     else if (playerChoice===move2&&computerChoice===move2)
//     {
//         return 7;
//     }
//     else if (playerChoice===move3&&computerChoice===move3)
//     {
//         return 8;
//     }
//     else
//     {
//         return 9;
//     }
// }
// function result(output)//gives result based on output from engine
// {   let fact1="Paper beats rock"
//     ,fact2="Scissors beats paper"
//     ,fact3="Rock beats Scissors"
//     ,message1="You won"
//     ,message2="You Lose"
//     ,message3="Its a tie";

//     switch(output)
//     {   
//         case 0: return `${message2},${fact1}`
//         break;
//         case 1:return  `${message1},${fact1}`
//         break;
//         case 2:return `${message2},${fact2}`
//         break;
//         case 3:return `${message1},${fact2}`
//         break;
//         case 4:return `${message1},${fact3}`
//         break;
//         case 5:return `${message2},${fact3}`
//         break;
//         case 6:
//         case 7:
//         case 8:return`${message3}`
//         break;
//         default:return "you entered wrong input check spelling";
//     }
// }
// function game()//plays a single round of game and returns the otput
// {
//      return result(gameEngine(getPlayersChoice(),getComputerChoice()));
// }
// function playRounds()//plays a set of five rounds and prints the output
// {
//     for(let i=0;i<5;i++)
//     {
//         console.log(game());
//     }
// }
// // playRounds();

// function demo(e)
// {
//     console.log(e.target.parentElement.classList.value);
//     e.stopPropagation();
// }
let movesList = document.querySelectorAll(".human>.moves>div");
movesList.forEach(move=>move.addEventListener('click',getPlayersChoice,{capture:false}));