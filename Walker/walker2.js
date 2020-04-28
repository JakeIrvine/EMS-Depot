let randoms = [];
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
		textSize(64);
	for(let i = 0; i < 500; i++) {
		randoms.push(new Ant())
	}
}

let j = 0;
function draw() {
	j++;
	translate (width/2, height/2);
	rotate(j / 100);
	
	fill('rgba(255,255,255, 0.01)');
	rect(-500, -500, 1000, 1000)
	rotate(-(j/100))
	  for (let i = 0; i < randoms.length; i++) {
			randoms[i].move();
			randoms[i].display();
		}
}

class Ant {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.speed = 5;
		this.color = (0, 0, 0);
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
		fill(this.color);
    ellipse(this.x, this.y, 1, 1);
  }
}
