class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            density:20,
            friction:1
        }
        this.body=Bodies.rectangle(x,y,width,height);
        World.add(world,this.body)
        this.width=width;
        this.height=height;
    }
    display(){
        push ()
        fill("red")
        strokeWeight(2)
        stroke("black")
        translate (this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        rect (0,0,this.width,this.height)
        pop ()
    }
}