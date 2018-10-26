var xCoord = 200, yCoord = 100;
var xSpeed = 1, ySpeed = 0;
var canvasX = 640, canvasY = 480;

function setup() {
    createCanvas(canvasX, canvasY);
    //frameRate(30);
}

function draw() {
    background('#59747D');
    fill('#36B8E3');
    ellipse(xCoord, yCoord, 50, 50);

    // move the ball coords for next frame.
    xCoord += xSpeed;
    ySpeed += 9.8 / 60;
    yCoord += ySpeed;
    
    // bounce at top or bottom.
    if (yCoord >= canvasY) { // the bottom
        yCoord = 2 * canvasY - yCoord; // removes deceleration?
        ySpeed *= -1;
    } else if (yCoord < 0) { // the top
        ySpeed *= -1;
    }
    // turn around on the right/left edges.
    if (xCoord > canvasX) {
        xSpeed *= -1;
    } else if (xCoord < 0) {
        xSpeed *= -1;
    }
}