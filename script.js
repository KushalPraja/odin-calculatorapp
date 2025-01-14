for (let i=0;i<10;i++){

    const newButton= document.createElement('button');
    newButton.innerText=`${i}`;
    newButton.className = "button-17";
    var containers=document.getElementById("con1");
    containers.appendChild(newButton)
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


x=0;


document.getElementById("result").innerHTML=x;


