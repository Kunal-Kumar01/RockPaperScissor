userWins = 0;
compWins = 0;

function gameOver(){
    if(userWins===5 || compWins===5){
        return true;
    }
    else{
        return false;
    }
}

function getCompChoice(){
    choice = ["Rock","Paper","Scissor"]
    return choice[Math.round(Math.random()*2)];
}

function round(player, computer){
    if((player==="Scissor" && computer==="Rock") || (player==="Paper" && computer==="Scissor") || (player==="Rock" && computer==="Paper")){
        updateScore("comp");
    }
    else if((computer==="Scissor" && player==="Rock") || (computer==="Paper" && player==="Scissor") || (computer==="Rock" && player==="Paper")){
        updateScore("user");
    }

}

function checkWinner(){
    if(userWins===5){
        return "YOU"
    }
    if(compWins===5){
        return "COMPUTER"
    }
    return null;
}

const userScore = document.querySelector(`.userScore`);
const compScore = document.querySelector(`.compScore`);

function updateScore(winner){
    if(winner==="comp"){
        compWins++;
        compScore.textContent=compWins;
    }
    if(winner==="user"){
        userWins++;
        userScore.textContent=userWins;
    }

    if(gameOver()){
         printResult(checkWinner());
    }
}

function printResult(winner){
const res = document.querySelector(`.result`);
res.textContent=winner +" WON";
}

const rockBtn = document.querySelector(`.rock`);
const paperBtn = document.querySelector(`.paper`);
const scissorBtn = document.querySelector(`.scissor`);
const resetBtn = document.querySelector(`.reset`);

resetBtn.addEventListener('click',() => location.reload());

rockBtn.addEventListener('click', () =>{
    if(!gameOver()){
        round("Rock",getCompChoice());
    }
}
);

paperBtn.addEventListener('click', () =>{
    if(!gameOver()){
        round("Paper",getCompChoice());
    }
}
);

scissorBtn.addEventListener('click', () =>{
    if(!gameOver()){
        round("Scissor",getCompChoice());
    }
}
);

// playerSelect = "Paper"
// computer = getCompChoice()
// console.log(computer)
// console.log(round(playerSelect,computer)) 
// for(i = 0; i<10; i++){
//     console.log(getCompChoice());
// }