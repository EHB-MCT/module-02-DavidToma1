let canvasElement = document.querySelector("#canvas");

//1. Add variables needed for animating the ball
let size = 50;

let colorval = "red";

//2. Add variables (size, speed, colorVal) for controlling the sketch
let x =  200;
let y =  400;

let speedX = 1;
let directionX = -1;

let speedY = 1;
let directionY = -1;

function setup() {
	//Creating a canvas to draw on, using the existing canvas element.
	createCanvas(600, 600, canvasElement);
	noStroke();
}

function draw() {
	background(255);
	// 3.1 Animate position
	x += speedX * directionX;
	y += speedY * directionY;
	// 3.2 Bounce logic: check the edges
	if (x >= width || x < 0) {
		directionX *= -1;
	}

	if (y > height || y < 0) {
		directionY *= -1;
	}
	// 3.3 Draw
	fill(colorval);
	circle(x, y, size);
}

// --- DOM Interaction ---

// 4. Select the input elements

let sizeInput = document.querySelector("#size-input");
let speedInput = document.querySelector("#speed-input");
let colorInput = document.querySelector("#color-input");

// 5. Add Event Listeners; listen to the "input" event for real-time updates while dragging
sizeInput.addEventListener("input", function () {
	size = Number(sizeInput.value);
});

speedInput.addEventListener("input", function () {
	speedX = Number(speedInput.value);
	speedY = Number(speedInput.value);
});
colorInput.addEventListener("input", function () {
	colorval = colorInput.value;
});
