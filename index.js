const maincontainer = document.querySelector('#container');
const titlebar = document.querySelector('#title');
const rulesBtn = document.querySelector('#rulesbtn');
const closeBtn = document.querySelector('#closebtn');
const newContainer = document.querySelector('#newcontainer');
let score = document.querySelector('#score');
const versuscontainer = document.querySelector('#versuscontainer');
const paper = document.querySelector('#circle1');
const scissors = document.querySelector('#circle2');
const rock = document.querySelector('#circle3');
const urchoice = document.querySelector('#urchoice');
const changechoice = document.querySelector('.urchoice');
const compchoice = document.querySelector('#compchoice');
const computer_random_choice = document.querySelector('.compchoice');
const print_Output = document.querySelector("#winorlose");
const playagainbtn = document.querySelector('#playagain');

let countRules = 0;
let score_value = 0;
let validate_variable = 0;
const papercolor = " hsl(230, 89%, 62%)";
const scissorscolor = "hsl(39, 89%, 49%)";
const rockcolor = "hsl(349, 71%, 52%)";
rulesBtn.addEventListener('click', () => {

    countRules++;
    if (countRules % 2 != 0) {
        newContainer.style.visibility = "visible";
        versuscontainer.style.display = "none";
    } else {
        newContainer.style.visibility = "hidden";
        // if (validate_variable == 1) {
        //     versuscontainer.style.display = "flex"
        // } else {
        // versuscontainer.style.display = "none";
        // }

    }


})

closeBtn.addEventListener('click', () => {

    newContainer.style.visibility = "hidden";
    versuscontainer.style.display = "none";
})


paper.addEventListener('click', (e) => {
    validate_variable = 1;
    showpaper(paper);
    let randomoption = calculation(paper);

    if (randomoption == 0) {
        print_Output.textContent = "DRAW";
    } else if (randomoption == 1) {
        print_Output.textContent = "YOU LOSE";
    } else {
        print_Output.textContent = "YOU WIN";
        score_value++;
        score.textContent = score_value;
    }
    rulesBtn.style.display = "none";

})
scissors.addEventListener('click', (e) => {
    validate_variable = 1;
    showscissors(scissors);
    let randomoption = calculation(scissors);

    if (randomoption == 0) {
        print_Output.textContent = "YOU WIN";
        score_value++;
        score.textContent = score_value;
    } else if (randomoption == 1) {
        print_Output.textContent = "DRAW";
    } else {
        print_Output.textContent = "YOU LOSE";
    }
    rulesBtn.style.display = "none";
})
rock.addEventListener('click', (e) => {
    validate_variable = 1;
    showrock(rock);
    let randomoption = calculation(rock);

    if (randomoption == 0) {
        print_Output.textContent = "YOU LOSE";
    } else if (randomoption == 1) {
        print_Output.textContent = "YOU WIN";
        score_value++;
        score.textContent = score_value;
    } else {
        print_Output.textContent = "DRAW";
    }
    rulesBtn.style.display = "none";
})

function showpaper(paper) {
    maincontainer.style.display = "none";
    versuscontainer.style.display = 'flex';
    changechoice.setAttribute('src', 'images/icon-paper.svg');
    changechoice.setAttribute('id', 'paper');
    urchoice.style.borderColor = "hsl(230, 89%, 62%)";
}

function showscissors(scissors) {
    maincontainer.style.display = "none";
    versuscontainer.style.display = 'flex';
    changechoice.setAttribute('src', 'images/icon-scissors.svg');
    changechoice.setAttribute('id', 'scissors');
    urchoice.style.borderColor = "hsl(39, 89%, 49%)";
}

function showrock(rock) {
    maincontainer.style.display = "none";
    versuscontainer.style.display = 'flex';
    changechoice.setAttribute('src', 'images/icon-rock.svg');
    changechoice.setAttribute('id', 'rock');
    urchoice.style.borderColor = "hsl(349, 71%, 52%)";
}
const computer_options = [paper, scissors, rock];

function calculation(item) {
    let random = (Math.floor(Math.random() * 3 + 1) - 1);
    //console.log(computer_options[random]);
    if (computer_options[random].id == "circle1") {

        computer_random_choice.setAttribute('src', 'images/icon-paper.svg');
        computer_random_choice.setAttribute('id', 'paper');
        compchoice.style.borderColor = "hsl(230, 89%, 62%)";

    } else if (computer_options[random].id == 'circle2') {

        computer_random_choice.setAttribute('src', 'images/icon-scissors.svg');
        computer_random_choice.setAttribute('id', 'scissors');
        compchoice.style.borderColor = "hsl(39, 89%, 49%)";

    } else {

        computer_random_choice.setAttribute('src', 'images/icon-rock.svg');
        computer_random_choice.setAttribute('id', 'rock');
        compchoice.style.borderColor = "hsl(349, 71%, 52%)";

    }
    return random;
}

playagainbtn.addEventListener('click', () => {
    versuscontainer.style.display = "none";
    maincontainer.style.display = "flex";
    rulesBtn.style.display = "flex";
})