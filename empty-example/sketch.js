function setup() {
	createCanvas(640, 480);
}

function draw() {
	if (mouseIsPressed) {
		fill(0);
	} else {
		fill(255)
	}
	line(mouseX, mouseY, pmouseX, pmouseY);
}