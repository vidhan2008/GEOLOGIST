class Hammer{
constructor(x,y,width,height){

var options = {
'density':2,
'friction':1.0,
'restitution':0.5
}
this.body = Bodies.rectangle(x,y,width,height,options)
this.width = width;
this.height= height
World.add(world,this.body)
}

    display(){
        this.body.position.x=mouseX
        this.body.position.y=mouseY
        var position=this.body.position

        fill("yellow")
        rectMode(CENTER)
        rect(position.x,position.y,this.width,this.height)
        }
}
