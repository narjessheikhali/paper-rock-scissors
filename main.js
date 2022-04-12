const choices = ["paper", "scissors", "rock"];      
const userChoose = prompt("please choice paper , rock , scissorrs"); 
if(userChoose){
    console.log(`your choose: ${userChoose}`)
}
else{
    console.log("you cheated")
}
const randomNumber = Math.floor(Math.random()*3);        
const computerChoose = choices[randomNumber];      
console.log(`computer choose: ${computerChoose}`);   

if(userChoose === computerChoose){
    connsole.log("it's a tie.")
}
else if(userChoose === "rock"){
    if(computerChoose ==="scissors"){
        console.log("you Win!");
    }
    else{
        console.log("you lose!")
    }
}
else if(userChoose === "paper"){
    if(computerChoose ==="scissors"){
        console.log("you lose");
    }
    else if(computerChoose ==="rock"){
        console.log("yoy Win!")
    }
}
else if(userChoose === "scissors"){
    if(computerChoose ==="rock"){
        console.log("you lose");
    }
    else if(computerChoose ==="paper"){
        console.log("you Win!")
    }
}
   
