
function function1() {
    console.log("function1")
}
function function2() {
    console.log("function2")
}
function function3() {
    console.log("function3")
}

const functionArray = [function1, function2, function3];

for (let i = 0; i < functionArray.length; i++) {
    functionArray[i]();
}

//creat fucntion as constant

const constantFunction = () => {
    console.log("constant fucntion");
}

function normalFunction() {
    console.log("Normal fucntion");
}


//Create an object that has a key whose value is a function.
// Try calling this function.


const obj = {
    objFunction: function () {
        console.log("function key in object");
    }
}

obj.objFunction();

