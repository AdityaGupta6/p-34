class Line{
    constructor(bodyA,pointB){
        var options={
           bodyA:bodyA,
           pointB:pointB,
           stiffness:0.5,
           length:100

        }
        this.line=Constraint.create(options)
        World.add(world,this.line);
        this.pointB=pointB;

    }
    fly(){
        this.line.bodyA=null
    }
    attach(body){
        this.line.bodyA=body
    }
    display(){
        if (this.line.bodyA) {
            
            push ();
            stroke (255);
            line (this.pointB.x,this.pointB.y,this.line.bodyA.position.x,this.line.bodyA.position.y)
            pop ();
        }
    }
};