let frames = [];
let myAge = 10;
let myName = "Kyle";
let myStudentsAges = [];

function preload() {
  frames[0] = loadImage("dance_frames/dance_frame_01.png");
  frames[1] = loadImage("dance_frames/dance_frame_02.png");
}

function setup() {
  createCanvas(800, 420);

  
}

function draw() {
  background(120);
  fill(140);

  for (let i = 0; i < frames.length; i++) {
    let xPosition = i * 100;
    image(frames[i], xPosition, 20, 100, 125);
  }

  fill("black");
  let speed = 10;
  let slowFrame = floor(frameCount / speed);
  let index = slowFrame % 2;

  text(frameCount, 500, 60);
   text(floor(frameCount / speed), 500, 80);
   text(index, 500, 120);
   text(index == 0, 500, 140);
  console.log(index);
  if (index == 0) {
    image(frames[0], 100, 100);
  } else {
    image(frames[1], 100, 100);
  }
}
