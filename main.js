
let chance = 5;
let ranNum = Math.floor((Math.random() * 100) + 1);
console.log(ranNum);
let history=[];
let finalresult=[];
let time=20;
let mytime;
let myresult=0;
let myround=0;

function timecounting(){
  myTime = setInterval(() => {
    
    time -= 1
    if(time==0){
      timeOut();
      alert("You lose!")
      document.getElementById("guessBtn").disabled = true;
      document.getElementById('timmer').innerHTML = `Your time on this round: ${time}`

    }
    document.getElementById('timmer').innerHTML = `Your time on this round: ${time}`
}, 1000)
}
timecounting();

function timeOut() {
  clearInterval(myTime);
  time=0;
  
}



  

  function guessNumber(){

    let guess = document.getElementById("number").value;
    let resultMessage = ' ';
    console.log(`User guessed ${guess}`);
    
   
    
    
      if(guess==ranNum){
        resultMessage="You won";
        alert("You won!")
       
        myresult+=1;
        myround+=1;
        document.getElementById("guessBtn").disabled = true;
        
        finalresult.push(myresult);
        if(myresult=1){
          document.getElementById("result1").innerHTML = `${myresult}`
          document.getElementById("round1").innerHTML = `${myround}`
          document.getElementById("time1").innerHTML = `${time}`
        }else if(myresult=2){
          document.getElementById("result2").innerHTML = `${myresult}`
          document.getElementById("round2").innerHTML = `${myround}`
          document.getElementById("time2").innerHTML = `${time}`
        }
        else{
          document.getElementById("result3").innerHTML = `${myresult}`
          document.getElementById("round3").innerHTML = `${myround}`
          document.getElementById("time3").innerHTML = `${time}`
        }
        time=20;
        
    
      }else if(guess<ranNum){
        resultMessage="Too low";
        
       chance-=1;
      }else{
        resultMessage="Too high";
       
        chance-=1;
      }
      console.log(chance);

    
    if(chance==0){
      resultMessage="You are out of chance!";
      
    }
    if(history.includes(guess)){
      alert("You have input this number!")
      chance+=1;

    }
    history.push(guess);
    document.getElementById("resultArea").innerHTML = `${resultMessage}`
    document.getElementById("historyArea").innerHTML = `History: ${history}`
    console.log(chance);
    document.getElementById("chance-display").innerHTML = `Chance remaining: ${chance}`
    console.log(myresult);
    document.getElementById("resultArea").innerHTML = `Result: ${myresult}`
   
    if(history.length ==5){
      alert("You are out of chance!")
      document.getElementById("guessBtn").disabled = true;
    }
    
    
    
   
    
  }
  function reset(){
    // timeOut();
    time=20;
    history.length=0;
    chance=5;
    resultMessage="";
    console.log(history);
    document.getElementById("historyArea").innerHTML = `History: ${history}`
    document.getElementById('timmer').innerHTML = `Your time on this round: ${time}`
    document.getElementById("chance-display").innerHTML = `Chances remaining: ${chance}`
    document.getElementById("resultArea").innerHTML = `${resultMessage}`
  }
    
    
  
    
    
    
  

    





  



