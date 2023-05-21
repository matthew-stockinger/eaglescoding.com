// User clicks and a randomly colored dot appears on the screen.
// It moves off the screen over time.

//stores x and y values of click locations as arrays
var dotsX = [];
var dotsY = [];
var dotsColor = [];
var r, g, b;
var dotXSpeed = [];
var dotYSpeed = [];
var dotSize = [];
var canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("myCanvas")
}

function draw() {
    background(255);
    // draw at all locations that have been clicked.
    for (var i = 0; i < dotsX.length; i++) {
        fill(dotsColor[i]);
        // put in random numbers for sizes to get wild animated ellipses.
        ellipse(dotsX[i], dotsY[i], dotSize[i], dotSize[i]);
    }
    
    // change dot positions over time.
    for (var j = 0; j < dotsX.length; j++) {
        if (dotsX[j] + dotXSpeed[j] > windowWidth) {
            dotXSpeed[j] *= -1;
        } else if (dotsX[j] + dotXSpeed[j] < 0) {
            dotXSpeed[j] *= -1;
        }
        if (dotsY[j] + dotYSpeed[j] > windowHeight) {
            dotYSpeed[j] *= -1;
        } else if (dotsY[j] + dotYSpeed[j] < 0) {
            dotYSpeed[j] *= -1;
        }
        
        dotsX[j] += dotXSpeed[j];
        dotsY[j] += dotYSpeed[j];
    }
}

// creates a new dot.  Stores features in arrays.
function mouseClicked() {
    dotsX.push(mouseX);
    dotsY.push(mouseY);
    r = Math.floor(random(256));
    g = Math.floor(random(256));
    b = Math.floor(random(256));
    var color = '';
    color = "rgb(" + r + ", " + g + ", " + b + ")";
    dotsColor.push(color);
    // choose initial speed of dot.
    dotXSpeed.push(random(-3, 3));
    dotYSpeed.push(random(-3, 3));
    dotSize.push(random(10, 100));
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
