class Box {
  constructor(x,y,width,height) {
    var options = {
      'density':0.5,
      'friction': 0.2,
      'restitution':0.2
        
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("red");
    rect(pos.x, pos.y, this.width, this.height)
    
  }
};