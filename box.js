class Box{
    constructor(x,y,width,height){
        //declare the property
        var options={
            isStatic:false,
            restitution:0.8,
            density:1,
            friction:1
        }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push ()
        translate (pos.x,pos.y)
    rotate (angle)
       rect(0,0,this.width,this.height);
       pop ()
    }
}