class Launcher{
    constructor(body1,point){
        var options = {
            bodyA: body1,
            pointB: point,
            stiffness: 0.05,
            length: 10
        }
        this.point = point;
        this.Launcher = Constraint.create(options);
        World.add(world,this.Launcher);

    }

    display(){
        if(this.Launcher.bodyA){
            objectA = this.Launcher.bodyA.position;
            objectB = this.point;
            strokeWeight(8);
            stroke("#00BFFE");
            line(objectA.x,objectA.y,objectB.x,objectB.y);
        }
    }

    detach(){
        this.Launcher.bodyA = null;
    }

    attach(body){
        this.Launcher.bodyA = body;
    }
}