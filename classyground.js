class Ground {
    constructor(x,y,w,h)
    {
        var rectangleoptions = {
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,rectangleoptions)
        World.add(world,this.body);
        this.w=w;
        this.h=h;
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        fill("yellow");
        rect(0,0,this.w,this.h)
        pop();
    }
}