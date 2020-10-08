class Stone {
	constructor(x,y,radius) {
		var options = {
			isStatic : false,
			restitution : 0,
			friction : 1,
			density : 1.2
			}
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.image = loadImage("Plucking+mangoes/Plucking mangoes/stone.png");
		this.body = Bodies.circle(this.x,this.y,this.radius/2,options)
		World.add(world,this.body);

	}
	display() {
		var stonePos = this.body.position;	
		push();
		translate(stonePos.x,stonePos.y);
		fill(255,0,255);
		imageMode(CENTER);
		ellipseMode(RADIUS);
		image(this.image,0,0,this.r*2, this.r*2);
		pop();
			
	}

}