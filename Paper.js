class paper
{
	constructor(x,y,r)
	{
		
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2,
			

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		//this.body.Scale = 200;
		this.image = loadImage("paper.png");
		//this.image.scale = 1.5;
		//this.image.size = 1.5;
		//image.Scale= 250;
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;	
			//this.image = loadImage("paper.png");	

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			scale(0.5);
			image(this.image,0,0,this.r, this.r);
			//this.image.size(5);
			pop()
			
	}

}