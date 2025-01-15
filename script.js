
let previousNUM="";
let currentNUM="0";
let operator="";


for (let i=0;i<10;i++){

    const newButton= document.createElement('button');
    newButton.innerText=`${i}`;
    newButton.className = "button-17";
    newButton.id=`Button ${i}`;
    var containers=document.getElementById("con1");
    containers.appendChild(newButton)

    //button event listerner
    newButton.addEventListener("click", function(){
    TypeNum(i)} );
}

//creating operators

const operators = ["+", "-", "*", "/", "="];
for (let i = 0; i < operators.length; i++) {
    const newButton = document.createElement("button");
    newButton.innerText = operators[i];
    newButton.className = "button-17";
    newButton.id = `operator ${operators[i]}`;
    var containers = document.getElementById("con1");
    containers.appendChild(newButton);

    if (operators[i] === "=") {
        newButton.addEventListener("click", evaluateResult);
    }
    else {
        newButton.addEventListener("click", function () {
            handleoperator(operators[i]);
        });
    }
}

//creating clear button
const clearButton = document.createElement("button");
clearButton.innerText = "C";
clearButton.className = "button-17";
clearButton.id = "clear";
var containers = document.getElementById("con1");
containers.appendChild(clearButton);


// functions for add,subtract,multiply,divide
function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}


///handling operators

function handleoperator(op) {
    if (currentNUM === "") return; // Ignore if no number is currently entered
    //handle if contintuous operators are pressed 
    if (currentNUM !== "" && previousNUM !== "" && operator !== "") {
        evaluateResult();
    }
    operator = op;                 // Set the operator
    previousNUM = currentNUM;      // Store the first number
    currentNUM = "";               // Reset for the second number
    document.getElementById("result").innerHTML = ""; // Clear the display
}


function TypeNum(a) {
    if (currentNUM === "0") currentNUM = ""; // Ignore leading zeros
    currentNUM += a; // Concatenate digits as strings
    document.getElementById("result").innerHTML = currentNUM;
    console.log(currentNUM);
}


function evaluateResult() {
    if (previousNUM === "" || currentNUM === "" || operator === null) return;
    const num1 = parseInt(previousNUM);
    const num2 = parseInt(currentNUM);
    let result;
    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = num2 !== 0 ? divide(num1, num2) : "Error"; // Avoid division by zero
            break;
    }

    document.getElementById("result").innerHTML = result;
    currentNUM = result.toString();
    previousNUM = "";
    operator = null;
}



