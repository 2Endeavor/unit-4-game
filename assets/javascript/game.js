console.log("I see you :-)");

    // This document.ready isn't necessary in this example... but is needed in cases where the HTML is complex.
    // This code makes sure that the JavaScript doesn't get run until the HTML is finished loading
    // It's useful to become familiar with now.

    $(document).ready(function(){

      //==========Global Variables==========
      
      //The following variables track the score the user is trying to match and the player's current score 
      var targetNumber = 0;  // This is the number the player is trying to reach
      var totalScore = 0;  //Players accumulated score during the day
      // The random value of each crystal is stored to the following variables
      var redStone = 0; 
      var blueStone = 0;
      var yellowStone = 0;
      var greenStone = 0;
      // The number of wins and losses are tracked by the following variables
      var wins= 0; 
      var loss = 0;
      target()
      startGame();
      //============Functions=============
      //initializes all the variables for the game
      function startGame (){
        target();
        crystalValue();

      }

      // This function determines the value of each crystal

      function crystalValue(){
        redStone =Math.floor((Math.random()*12)+1);

        blueStone =Math.floor((Math.random()*12)+1);

        yellowStone =Math.floor((Math.random()*12)+1);

        greenStone =Math.floor((Math.random()*12)+1);
        
        console.log(redStone,blueStone, yellowStone,greenStone);
       
      }


      // This function selects a random number between 19-120 and stores the number to the variable targetNumber
      function target(){
        targetNumber=Math.floor((Math.random()*101)+19);
        

      }


      // This function listens for a player to click a crystal
      function onclick(){

      }
      // this function calculates the player's score by taking in the crystals value and adding it to the players current score
      function calculateScore (){

      }

      // This function determines if the player has won, loss or if the game will continue
      function gameStatus (){

      }





      //=============Main Process==================









    });// end document ready function