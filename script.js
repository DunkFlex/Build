var num6 = 0;
var num3 = 0;
var num4 = 0;
var num5 = 0;
var numRolls = 0;
var price = 0;

function pull(times) {
    switch (times) {
        case 1:
            pull_once();
            calcPrice();
            displayResult();
            break;
        default:
            clear();
            pull_5star();
            calcPrice();
            displayResult();
            clear();
    }
}

function pull_once() {
    rng = Math.random();
    if (rng <= .51) {
        num3++;
        numRolls++;
    }
    else if (rng > .51 && rng < 0.81) {
        num6++;
        numRolls++;
    }
    else if (rng > .81 && rng < 0.93) {
        num4++;
        numRolls++;
    }
    else {
        num5++;
        numRolls++;
    }
}

function pull_10() {
    num4++;
    numRolls++;
    for (var i = 0; i < 10; i++) {
        pull_once();
    }
}

function pull_5star() {
    while (num5 == 0) {
        pull_once();
    }
}
function displayResult() {
    document.getElementById("Common").innerHTML = num6;
    document.getElementById("Rare").innerHTML = num3;
    document.getElementById("Elite").innerHTML = num4;
    document.getElementById("Super").innerHTML = num5;
    document.getElementById("numPulls").innerHTML = numRolls;
    document.getElementById("priceTotal").innerHTML = "You rolled " + numRolls + " times, spending " + price + " gold and " + cubic + " cubes!";
  
}

function clear() {
    num3 = 0;
    num4 = 0;
    num5 = 0;
    num6 = 0;
    numRolls = 0;
    price = 0;
}

function clearResults() {
    clear();
    displayResult();
}
function calcPrice() {
    price = numRolls * 1500;
    cubic = numRolls * 2;
}
