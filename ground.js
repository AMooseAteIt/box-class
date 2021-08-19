class ground{
    constructor(x,y,width,height){
        var groundprop = {
            isStatic: true
        }
    this.body = Bodies.rectangle(x,y,width,height, groundprop);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }

    display(){
var pos = this.body.position;
rectMode(CENTER)
strokeWeight(5);
stroke("white");
fill("pink");
rect(pos.x,pos.y,this.width,this.height);

    }
}