function setup() {
	createCanvas(640, 480);
}

function draw() {
	if (mouseIsPressed) {
		fill(100);
	} else {
		fill(100)
	}
	ellipse(mouseX, mouseY, 5, 5);
}