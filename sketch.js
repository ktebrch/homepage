// racetrack //
let startLine = 30;
let finishLine = 400;

// caterpillar //
let circX = startLine;
let circY = 250;
let segments = 6;
let spacing = 20;
let segmentSize = 50;
let eyeSize = 15;

// race //
let numCaterpillars = 3;
let caterpillarEnds = [];

// start //
let isRacing = false;

function setup() {
  var cnv = createCanvas(500, 500);
  // centers canvas in window //
  var a = (windowWidth - width) / 2;
  var b = (windowHeight - height) / 2;
  cnv.position(a, b);
  background(255, 0, 200);

  frameRate (3);

    for (let i=0; i < numCaterpillars; i++) {
    caterpillarEnds.push(startLine);
  }

}

function draw() {

  // racetrack //
  background(204, 204, 204);
  noStroke();
  fill(0);
  rect(startLine, 0, 5, height);
  fill(100, 199, 91);
  rect(finishLine, 0, 10, height);

  // Move caterpillars if
  // race has started.
  if (isRacing === true) {
    moveCaterpillars();
  } else { 
    // If the race hasn't started,
    // write instructions to start.
    writeStart();
  }

  // starting line caterpillars // 
  drawCaterpillars();

  // winner //
    checkWinner();
}


function writeStart () {
  // Style the text.
  textSize(24);
  textFont('Quicksand');
  textAlign(CENTER);
  fill(255);
  noStroke();
 
  // Display the message.
  text("🏁 go!", width / 2, height / 2);

}


function drawCaterpillar (x,y, segments) {

  // Create a loop of circles
  // to form the body.

  for (let i = 0; i < segments; i += 1) {
    fill(128, 99, 153);
    stroke(128, 99, 153);
    strokeWeight(1);
    circle(x, y, 50);

    x += spacing;
  }
 
  // Draw the caterpillar's eyes.
  fill(0);
  stroke(255);
  strokeWeight(3);
  circle(x, y - eyeSize, eyeSize);
  circle(x - eyeSize, y - eyeSize, eyeSize);

}

function drawCaterpillars () {

  for (let i=0; i < numCaterpillars; i+=1) {
    let padding = height/numCaterpillars;
    let y = (i + 0.5) * padding;

    // Update length of caterpillar.   
    let crawl = random(3, 6);

      // Draw caterpillars.
    drawCaterpillar(caterpillarEnds[i], y, crawl);
  }
}

// Start the race when the
// user presses the mouse.
function mousePressed() {
  isRacing = true;
}

function moveCaterpillars () {
  for (let i=0; i < numCaterpillars; i += 1) {

    // caterpillar random speed //
    let move = round(random(5,30));

    //update caterpillar coordinates //
    caterpillarEnds[i] += move;
  }
}

// Display a message and stop the
// sketch if there's a winner.
function checkWinner() {
  for (let i = 0; i < caterpillarEnds.length; i += 1) {
    if (caterpillarEnds[i] >= finishLine) {
      // Style the text.
      textSize(24);
      textFont('Quicksand');
      textAlign(CENTER);
      fill(255);
      noStroke();

      // Display the message.
      text(`Caterpillar ${i + 1} wins!`,width/2,height/2);

      // end race by stopping draw() from running
      noLoop();
    }
  }
}
 

