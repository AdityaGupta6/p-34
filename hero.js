class Hero{
    constructor(x,y,width,height){
        var options={
                density:1,
                frictionAir:1
        }
        this.body=Bodies.circle(x,y,width,height)
        World.add(world,this.body)
        this.width=width
        this.height=height;
        this.image=loadImage("hero1.png")
    }
    display(){
        push ()
        var pos=this.body.position
        imageMode(CENTER);
        translate(pos.x,pos.y)
        rotate(this.body.angle);
        image(this.image,0,0,this.width,this.height);
pop ()
    }
    
}