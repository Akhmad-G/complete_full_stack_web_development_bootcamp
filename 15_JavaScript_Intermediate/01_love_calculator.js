let mansName = prompt("What is man's name?").toLowerCase();
let womanName = prompt("What is woman's name?").toLowerCase();

function randomPercentage() {
    return Math.floor(Math.random() * 100 + 1);
}

function nameCapitalaze (name) {
    return name.slice(0, 1).toUpperCase() + name.slice(1, name.length)
}

alert(nameCapitalaze(mansName) + " is " + randomPercentage() + "% compatible with " + nameCapitalaze(womanName) + ".")
