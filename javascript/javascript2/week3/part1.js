

function callbackFunction(f) {
    if (typeof f !== 'function') {
        console.log(f, 'was not a function');
        return;
    }
    setTimeout(() => f, 3000);
}

function FunctionThatISpassedTocallbacckFunction() {
    console.log('hello');
}

//calling the callback function
callbackFunction(FunctionThatISpassedTocallbacckFunction);


// homeowork warm up 1.2 

const btn = document.getElementById("btn");
btn.addEventListener('click', () => {
    callmelater(5, "called after 5 seconds ")
})


function callmelater(delay, stringTolog) {
    setTimeout(() => {
        console.log(stringTolog);
    }, delay * 1000);
}
callmelater(3, "heloooooooo");

const earthLogger = function () {
    console.log("earth");
}

const saturnLogger = () => {
    console.log("saturn");
}


function PlanetLogFunction(callplanetLogfunction) {
    callplanetLogfunction();
}
PlanetLogFunction(earthLogger)
PlanetLogFunction(saturnLogger)


const logLocationBtn = document.getElementById("logLocationbtn");
const pTag = document.getElementById("location");

logLocationBtn.addEventListener("click", logLocation);
function logLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        pTag.innerText = 'latitude' + latitude + ' br longitude' +
            longitude;

    });
}


//run after delay 
function runAfterDelay(delay, callback) {
    setTimeout(() => {
        callback();
    }, delay * 1000);
}

function delay1() {
    console.log("delay 1 is called");
}

function delay2() {
    console.log("delay 2 is called");
}

runAfterDelay(2, delay1);
runAfterDelay(3, delay2);

//double click checking 

let clickCount = 0;

document.addEventListener("click", () => {
    clickCount++;
    if (clickCount == 1) {
        setTimeout(() => {
            clickCount = 0;
        }, 500)
    }
    else {
        console.log("double clicked");
    }
})


//jokecreater
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke) {
        logFunnyJoke();
    }
    else if (!shouldTellFunnyJoke) {
        logBadJoke();
    }
}

const pTag2 = getElementById("joke");


function logFunnyJoke() {
    pTag2.innerHTML =
        "EHEHEHEHEHEHHEHEEH";
}

function logBadJoke() {
    pTag2.innerHTML =
        "AHAHHAHAHAHHAHAH";
}

jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);




