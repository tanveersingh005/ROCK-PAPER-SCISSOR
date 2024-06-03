// -------ACESSING ALL THE USEFUL CLASSES------//
let option1 = document.querySelector(".opt1");
let option2 = document.querySelector(".opt2");
let option3 = document.querySelector(".opt3");
let rock1 = document.querySelector(".rock1");
let paper1 = document.querySelector(".paper1");
let scissor1 = document.querySelector(".scissor1");
let orignal1 = document.querySelector(".orignal1");
let rock2 = document.querySelector(".rock2");
let paper2 = document.querySelector(".paper2");
let scissor2 = document.querySelector(".scissor2");
let orignal2 = document.querySelector(".orignal2");
let score1 = document.querySelector(".score1");
let score2 = document.querySelector(".score2");
let reset = document.querySelector(".play");
let text = document.getElementById("text");
let userScore = 0;
let compScore = 0;

// ---COMPUTERS SIDE-----//
const genComputerChoice = () => {
    let options = ["ROCK", "PAPER", "SCISSOR"];
    let randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
};

const showComputerChoice = (compchoice) => {
    if (compchoice === "ROCK") {
        rock2.classList.remove("hide5");
        paper2.classList.add("hide6");
        scissor2.classList.add("hide7");
        orignal2.classList.add("hide8");
        orignal2.style.display = "none";
    } 
    else if (compchoice === "PAPER") {
        paper2.classList.remove("hide6");
        rock2.classList.add("hide5");
        scissor2.classList.add("hide7");
        orignal2.classList.add("hide8");
        orignal2.style.display = "none";
    } 
    else if (compchoice === "SCISSOR") {
        scissor2.classList.remove("hide7");
        rock2.classList.add("hide5");
        paper2.classList.add("hide6");
        orignal2.classList.add("hide8");
        orignal2.style.display = "none";
    }
};

// ---PLAYERS SIDE-----//

option1.addEventListener("click", () => {
    rock1.classList.remove("hide1");
    paper1.classList.add("hide2");
    scissor1.classList.add("hide3");
    orignal1.classList.add("hide4");
    orignal1.style.display = "none";
    console.log("ROCK WAS CLICKED");

    const compchoice = genComputerChoice();
    console.log(compchoice, "COMPUTER KI CHOICE");
    showComputerChoice(compchoice);
    winGame("ROCK", compchoice);
});

option2.addEventListener("click", () => {
    paper1.classList.remove("hide2");
    rock1.classList.add("hide1");
    scissor1.classList.add("hide3");
    orignal1.classList.add("hide4");
    orignal1.style.display = "none";
    console.log("PAPER WAS CLICKED");

    const compchoice = genComputerChoice();
    console.log(compchoice, "COMPUTER KI CHOICE");
    showComputerChoice(compchoice);
    winGame("PAPER", compchoice);
});

option3.addEventListener("click", () => {
    scissor1.classList.remove("hide3");
    rock1.classList.add("hide1");
    paper1.classList.add("hide2");
    orignal1.classList.add("hide4");
    orignal1.style.display = "none";
    console.log("SCISSOR WAS CLICKED");

    const compchoice = genComputerChoice();
    console.log(compchoice, "COMPUTER KI CHOICE");
    showComputerChoice(compchoice);
    winGame("SCISSOR", compchoice);
});

// -----WIN LOGIC----//

const winGame = (userChoice, compchoice) => {
    if (userChoice === compchoice) {
        text.innerText = "DRAW";
        score1.innerText = "0";
        score2.innerText = "0"; 
    } 
    else if (
        (userChoice === "ROCK" && compchoice === "SCISSOR") ||
        (userChoice === "PAPER" && compchoice === "ROCK") ||
        (userChoice === "SCISSOR" && compchoice === "PAPER")
    ) {
        userScore++;
        text.innerText = "USER WINS";
        score1.innerText = userScore;
        score2.innerText = compScore;
    } 
    else {
        compScore++;
        text.innerText = "COMPUTER WINS";
        score1.innerText = userScore;
        score2.innerText = compScore;
    }
};

// ---RESETING THE GAME----//

reset.addEventListener("click", () => {    
    userScore = 0;
    compScore = 0;
    score1.innerText = "0";
    score2.innerText = "0";
    // orignal1.classList.remove("hide4");
    // orignal2.classList.remove("hide8");
    // rock1.classList.add("hide1");
    // paper1.classList.add("hide2");
    // scissor1.classList.add("hide3");
    // rock2.classList.add("hide5");
    // paper2.classList.add("hide6");
    // scissor2.classList.add("hide7");
    // rock1.style.backgroundColor = "white";
    // scissor2.style.backgroundColor = "white";
    console.log("reset");
    // orignal1.style.backgroundImage=`url()`;
    
    
});
