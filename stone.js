class Stone{
    constructor(x,y,width,height){
    
    var options = {
    'density':4.0,
    'friction':1.0,
    'restitution':0.8
    }
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = width;
    this.height= height
    World.add(world,this.body)
    }
    
        display(){
            
            var position=this.body.position
            fill("red")
            rectMode(CENTER)
            rect(position.x,position.y,this.width,this.height)
            }
    }