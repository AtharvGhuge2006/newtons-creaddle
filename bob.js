class Bob {
    constructor(x, y,radius) {
      var options = {
        //isStatic:true,
        'density':0.001,
        'friction': 0.5,
        'restitution':1.5
      };
      this.body = Bodies.circle(x, y, radius , options);
      this.radius = radius
      World.add(world, this.body);
    };
    display(){
      strokeWeight(3)
      stroke('yellow')
      fill('red')
      ellipseMode(RADIUS)
      ellipse(this.body.position.x,this.body.position.y,this.radius)
    };
  };
