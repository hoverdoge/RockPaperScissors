//gets human input
function playerInput(pChoice)
{
  //converts input to lowercase
  pChoice = pChoice.toLowerCase();
  //checks validity of answer
  if (pChoice === 'rock' || pChoice === 'paper' || pChoice === 'scissors' || pChoice == 'bomb')
  {
    console.log(`You said: ${pChoice}`);
  }
  else
  {
    console.log('Invalid response');
  }
  return pChoice;
};


//gets the computer's choice
function aiChoice()
{
  //gets a number between 0 and 2 inclusive to switch on
  var cChoice;
  let numChoice = Math.floor(Math.random() * 3);
  //assigns rps based on random number that was generated
  switch(numChoice)
  {
    case numChoice = 0:
      cChoice = 'rock';
      break;
    case numChoice = 1:
      cChoice = 'paper';
      break;
    case numChoice = 2:
      cChoice = 'scissors';
      break;
    default:
      cChoice = 'bruh you broke it';
      break;
  }
  //prints computer choice
  console.log(`The computer chose ${cChoice}`);
  return cChoice;
}

//determines winner
function findWinner(finalPlayer, finalAi){
  //checks for tie
  if (finalPlayer === finalAi)
  {
    return 'No one won';
  }  
  //checks for player rock choice
  else if (finalPlayer === 'rock')
  {
    if (finalAi === 'paper')
    {
      return 'You lost.';
    }
    else
    {
      return 'You won!';
    }
    
  }

  //checks for player paper choice
  else if (finalPlayer === 'paper')
  {
    if (finalAi === 'scissors')
    {
      return 'You lost.';
    }
    else
    {
      return 'You won!';
    }
  }

  //checks for player scissors choice
  else if (finalPlayer === 'scissors')
  {
    if (finalAi === 'rock')
    {
      return 'You lost.';
    }
    else
    {
      return 'You won!';
    }
    
  }
  else if (finalPlayer === 'bomb')
  {
    return 'You won!';
  }
}
//puts functions together
function playGame() 
{
  //input goes here                  \/
   const finalPlayer = playerInput('INPUT');
  //                                 ^
   const finalAi = aiChoice();
   console.log(findWinner(finalPlayer, finalAi));
}
playGame();

