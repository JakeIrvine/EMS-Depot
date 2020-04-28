function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
		textSize(64);
}

let i = 0;
let j = 0
function draw() {
	
	if (i > 120) {
		i = 0;
	}
	i++;
	j++;
	textSize(i);
	  
	fill('black')
  translate (width/2, height/2);
	rotate(j / 100);
	text("why...", 0, 0);
	
	fill('rgba(255,255,255, 0.01)');
	rect(-500+i, -500-i, 1000, 1000)
}
