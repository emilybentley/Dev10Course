
function playGame(){
  var startingBet = document.forms["userInput"]["startingBetInput"].value;

  if (startingBet<=0){
    alert("Starting Bet Must Be Greater Than 0.")
  }

  else{

  var gameMoney=Number(startingBet);
  var diceA;
  var diceB;
  var sum;
  var totalRolls=0;
  var max=Number(startingBet);
  var rollCountAtMax=0;

  while (gameMoney>0){
    diceA=Math.floor(Math.random()*6)+1;
    diceB=Math.floor(Math.random()*6)+1;
    sum=diceA+diceB;
    totalRolls++;

    if(sum==7){
      gameMoney=gameMoney+4;
    }
    else{
      gameMoney=gameMoney-1;
    }

    if(gameMoney>max){
      max=gameMoney;
      rollCountAtMax=totalRolls;
    }
  }
document.getElementById("results").style.display = "block";
document.getElementById("submitButton").innerText = "Play Again";
document.getElementById("startingBet").innerText = startingBet;
document.getElementById("totalRolls").innerText = totalRolls;
document.getElementById("max").innerText = max;
document.getElementById("rollCountAtMax").innerText = rollCountAtMax;
return false;
  }
}


function resetForm() {
    clearErrors();
    document.forms["userInput"]["startingBetInput"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["userInput"]["startingBetInput"].focus();
  }

  function clearErrors() {
      for (var loopCounter = 0;
          loopCounter < document.forms["userInput"].elements.length;
          loopCounter++) {
          if (document.forms["userInput"].elements[loopCounter]
             .parentElement.className.indexOf("has-") != -1) {

              document.forms["userInput"].elements[loopCounter]
                 .parentElement.className = "form-group";
          }
      }
  }
