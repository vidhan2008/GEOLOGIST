class Sand {
    constructor(x,y,width,height){
        var options = {
    'density':1,
    'friction':0.8,
    'restitution':0.3
        }
      this.body =Bodies.rectangle(x,y,width,height,options)  
      this.width = width
      this.height = height
      World.add(world,this.body)
    }
    
    display(){
    var angle = this.body.angle
    var position = this.body.position
    push()
    translate(position.x,position.y)
    rotate(angle)
    fill("brown")
    ellipse(0,0,this.width,this.height)
    pop()
    }
    }