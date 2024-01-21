class Bob {
    constructor(x, y,radius) {
      var options = {
        //isStatic:true,
        'density':0.05,
        'friction': 0.5,
        'restitution':1.0
      };
      this.body = Bodies.circle(x, y, radius , options);
      this.radius = radius
      World.add(world, this.body);
    };
    display(){
      strokeWeight(1)
      stroke('yellow')
      fill('red')
      ellipseMode(RADIUS)
      ellipse(this.body.position.x,this.body.position.y,this.radius)
    };
  };
