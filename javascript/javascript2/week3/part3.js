
const startbutton = document.getElementById("start_game_btn");
const inputTime = document.getElementById("game_time");
const pTag_s = document.getElementById("s");
const PTag_l = document.getElementById("l");
const spanTag_s = document.getElementById("sResult");
const spanTag_L = document.getElementById("lresults");
//const dipslayTimeD = document.getElementById("displayTimeDiv")
const dipslayTimep = document.getElementById("displayTimeP")

let gameTime;
let sCount = 0;
let lCount = 0;


startbutton.addEventListener("click", function () {
    if (!/^\d+$/.test(inputTime.value)) {
        alert(inputTime.value + " is not a number please enter a positive number");
        return;
    }
    gameTime = inputTime.value;
    dipslayTimep.innerHTML = gameTime;

    const timeCount = setInterval(() => {
        gameTime--;
        dipslayTimep.innerHTML = gameTime;
        if (gameTime <= 0) {
            clearInterval(timeCount);
            gameTime = 0;
            dipslayTimep.innerHTML = "";
            clearData();
            gameWinner();
            updateCount("click");
        }
        updateCount();

    }, 1000);




});

function clearData() {
    let sCount = 0;
    let lCount = 0;
    spanTag_s.innerHTML = "";
    spanTag_L.innerHTML = "";
}


function gameWinner(sCount, lCount) {
    if (sCount > lCount) {
        document.getElementById("s_part").innerHTML = " S is winner";
    }
    if (lCount > sCount) {
        document.getElementById("l_part").innerHTML = " l is winner";
    }
    else {
        document.getElementById("s_part").innerHTML = " its a tie";
        document.getElementById("l_part").innerHTML = " its a tie";
    }
}
function updateCount(event) {
    event.key === "s" ? sCount++ : event.key === "l" ? lCount++ : null;
    spanTag_s.innerText = sCount;
    spanTag_L.innerText = lCount;
}

