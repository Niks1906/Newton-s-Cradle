class rope {

    constructor(body1, body2, offsetX, offsetY){


        this.offsetX=offsetX
        this.offsetY=offsetY

        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
    
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){

        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position
        strokeWeight(3)
        stroke(rgb(0, 136, 145));
        var ABx = pointB.x + this.offsetX;
        var ABy = pointB.y + this.offsetY;
        line (pointA.x,pointA.y,ABx,ABy);

    }
}