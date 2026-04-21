/**
 https://stanford.edu/~cpiech/karel/ide.html
 World: 5x5
 **/

// Code without function turnRight()
function main(){
    putBeeperAndMove();
    makeCircle();
    putBeeperAndMove();
    makeCircle();
    putBeeperAndMove();
    makeCircle();
    putBeeperAndMove();
    putBeeper();
}

function putBeeperAndMove() {
    putBeeper();
    move();
    turnLeft();
    move();
}

function makeCircle() {
    move();
    turnLeft();
    move();
    turnLeft();
    move();
    turnLeft();
    move();
}
