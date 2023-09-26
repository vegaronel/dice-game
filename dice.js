



function playerOne(){

 var pictureList = ["images/1.png","images/2.png",
 "images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]
    
    var imageOne = Math.floor(Math.random()*pictureList.length);
 
    document.getElementById("player1").src = pictureList[imageOne];
    
    return imageOne;
}

function playerTwo(){

    var pictureList = ["images/1.png","images/2.png",
    "images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]
       
       var imageTwo = Math.floor(Math.random()*pictureList.length);
     
       document.getElementById("player2").src = pictureList[imageTwo];

       return imageTwo;
   }
 
   playerOne();
   playerTwo();
   var firstNum = playerOne();
   var secondNum = playerTwo();

   function whoWin(){

   
   if(firstNum > secondNum){
  
    document.querySelector("h1").innerHTML = "Player 1 Wins";
   }
   else if(firstNum < secondNum){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
   }
   else{
    document.querySelector("h1").innerHTML = "Draw";
   }

}
  whoWin();

 
  










