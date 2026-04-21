/**
 https://stanford.edu/~cpiech/karel/ide.html
 World: 5x5
 **/

// My solution
function main(){
    BeeperOddStripe();
    BeeperEvenStripe();
    BeeperOddStripe();
    BeeperEvenStripe();
    BeeperOddStripe();
}

function BeeperOddStripe() {
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    turnLeft();
}

function BeeperEvenStripe() {
    move();
    turnLeft();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    turnRight();
    move();
    turnRight();
}




// Dr. Angela's solution
/*
function main(){
    beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
    beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
    beepersRight();
}

function goUpTurnRight() {
    turnRight();
    move();
    turnRight();
}

function goUpTurnLeft() {
    turnLeft();
    move();
    turnLeft();
}

function beepersRight() {
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
}

function beepersLeft() {
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
}*/
