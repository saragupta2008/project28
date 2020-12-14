class Stone{

    constructor(x,y,r)
    {
    
    var options={
    
    isStatic:false,
    restitution:0,
    friction:1, 
    density:1.2
    }
    
    this.x=x;
    this.y=y;
    this.r=r
    
    
    this.body=Bodies.circle(this.x, this.y, this.r/2, options)
    this.image = loadImage("stone.png");
    World.add(world, this.body);
    }
    
    display() {
    
    var stonepos=this.body.position;
    
    push()
    translate(stonepos.x, stonepos.y); 
    rectMode (CENTER)
    
    ellipse(0,0,this.r, this.r);
    
    pop()
    }
    }