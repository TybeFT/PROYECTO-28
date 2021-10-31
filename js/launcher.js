class Launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.003,
            length: 10
        }

        this.pointB = pointB
        this.cuerdita = Constraint.create(options);
        World.add(world,this.cuerdita);
    }

    fly(){
        this.cuerdita.bodyA = null;
    }

    display(){
        if(this.cuerdita.bodyA){
            var pointA = this.cuerdita.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(5);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}