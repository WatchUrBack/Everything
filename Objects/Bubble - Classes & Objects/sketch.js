// BUBBLE - Classes & Objects

// Declare Global Variables
let bubble, bubble2, bubble3, bubble4;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);

	// Initialize Global Variables
	bubble = new Bubble();
	bubble2 = new Bubble();
	bubble3 = new Bubble();
	bubble4 = new Bubble();
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	// LOGIC
	bubble.move();
	bubble2.move();
	bubble3.move();
	bubble4.move();

	// DRAW
	background(0);
	bubble.show();
	bubble2.show();
	bubble3.show();
	bubble4.show();
}
