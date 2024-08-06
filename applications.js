const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function() {
    count=0;
    countLabel.textContent = count;
}
//--------------------------------roll-------------------------------------
const rollBtn = document.getElementById("rollBtn");
const rollLabel = document.getElementById("rollLabel");
let min = 1;
let max = 6;
let randomNum;
rollBtn.onclick = function() {
    randomNum = Math.floor(Math.random()*max)+min;
    rollLabel.textContent = randomNum;
}
//--------------------------------guessing number-------------------------------------
const minNum = 1;
const maxNum = 100;


//const guessAnswer = Number(document.getElementById("guessAnswer").value);//answer content
const guess = document.getElementById("guess");//button
const useranswer = document.getElementById("answer"); //result



guess.onclick = function() {
    let answer=Math.floor(Math.random()*(maxNum-minNum+1));
    const guessAnswer = Number(document.getElementById("guessAnswer").value);
    console.log(answer);
    console.log(typeof guessAnswer, guessAnswer);
    if (guessAnswer==answer){
        useranswer.textContent = "you got it right";
    } else {
        useranswer.textContent = `you didn't get it, the number was ${answer}`;
    }
}
//--------------------------------temperature  converter-------------------------------------
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const resultTemp = document.getElementById("resultTemp");
let temp;


function convert() {
    if(toFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = temp*9/5 +32;
        resultTemp.textContent = temp.toFixed(1)+ "°F";
    } else if (toCelcius.checked) {
        temp = Number(textBox.value);
        temp = (temp-32)*5/9;
        resultTemp.textContent = temp.toFixed(1)+ "°C";
    } else {
        resultTemp.textContent = "Select a unit";
    }
}
//--------------------------------dice roller-----------------------------------------------


function rollDice(){
    const numOfDice = document.getElementById("diceIn").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];
    for (let i=0; i<numOfDice; i++) {
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="dices/diceb${value}.png" width=65px>`);
    }
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}
//--------------------------------rock paper scissor----------------------------------
const choices = ["R", "S", "P"];
let user;
const rock = document.getElementById("rock");
const scissor = document.getElementById("scissor");
const paper = document.getElementById("paper");
let winner = document.getElementById("winner");
const userChoice = document.getElementById("userChoice");
const computerChoice = document.getElementById("computerChoice");


rock.onclick = function() {
    user="R";
    userChoice.innerHTML = `<img src="images/${user}.png" width=80px height=80px>`;
    const computer = choices[Math.floor(Math.random()*3)];
    computerChoice.innerHTML = `<img src="images/${computer}.png" width=80px height=80px>`;
    console.log(user, computer);
    winner.textContent =winlose(user, computer);

}
scissor.onclick = function() {
    user="S";
    userChoice.innerHTML = `<img src="images/${user}.png" width=80px height=80px>`;
    const computer = choices[Math.floor(Math.random()*3)];
    computerChoice.innerHTML = `<img src="images/${computer}.png" width=80px height=80px>`;
    console.log(user, computer);
    winner.textContent =winlose(user, computer);
}
paper.onclick = function() {
    user="P";
    userChoice.innerHTML = `<img src="images/${user}.png" width=80px height=80px>`;
    const computer = choices[Math.floor(Math.random()*3)];
    computerChoice.innerHTML = `<img src="images/${computer}.png" width=80px height=80px>`;
    console.log(user, computer);
    winner.textContent =winlose(user, computer);
}

function winlose(u,c) {
    if (u===c) { return "It is a tie!";}
    else if ((u==="R" && c=="S") || (u==="S" && c=="P") || (u==="P" && c=="R")) {
        return "You win!";
    } else { return "You lose!";}
}