
let newAmount = 0;
let current = 25;

function giveMoney() {
    
    newAmount = "$"+(current + 25);
    document.getElementById("donate").innerHTML = newAmount;
    document.getElementById("donate").style.width = (current + 25) + "%";
}

