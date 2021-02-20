class Enemy{
    constructor(x,y,r){
        var options={
                density:1,
                frictionAir:1
        }
        this.body=Bodies.circle(x,y,r)
        World.add(world,this.body)
        this.r=r
        this.image=loadImage("Monster-01.png")
    }
    display(){
        push ()
        var pos=this.body.position
        imageMode(CENTER);
        translate(pos.x,pos.y)
        rotate(this.body.angle);
        image(this.image,0,0,this.r,this.r);
pop ()
    }
    
}