for (let i=0;i<10;i++){

    const newButton= document.createElement('button');
    newButton.innerText=`${i}`;
    newButton.className = "button-17";
    newButton.id=`Button ${i}`;
    var containers=document.getElementById("con1");
    containers.appendChild(newButton)

    //button event listerner
    newButton.addEventListener("click", function(){
        AddNum(`Button ${i}`)} );
}

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

let previousNUM=0;
let currentNUM=0;
let operator="";


var operators=Array.from(document.getElementsByClassName("operator"));
operators.forEach(operator=> {
    if (operator.id!="equal"){
        operator.addEventListener("click", function () {
            handloperator(operator.innerHTML);
        });
    }
    else {
        newButton.addEventListener("click", evaluateResult());
    }
});

///handling operators

function handleoperator(op) {
    if (currentNUM === "") return; // Ignore if no number is currently entered
    operator = op;                 // Set the operator
    previousNUM = currentNum;      // Store the first number
    currentNUM = "";               // Reset for the second number
    document.getElementById("result").innerHTML = ""; // Clear the display
}


function AddNum(a){
    var y=document.getElementById(a).innerHTML;
    console.log(y)
    currentNUM=parseInt(currentNUM)*10;
    currentNUM+=parseInt(y);
    document.getElementById("result").innerHTML=currentNUM;

}

function evaluateResult() {
    if (previousNUM === "" || currentNUM === "" || operator === null) return;

    const num1 = parseFloat(previousNUM);
    const num2 = parseFloat(currentNUM);
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



