class Roof{
    constructor(x,y,width,height){
        this.body= Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.height = hieght;
        this.width=width;
        World.add(world,this.body);
    }
    display(){
        push();
        rectMode(CENTER);
        fill(1288,128,128);
        rect(this.body.position.x,this.body.position.y.this.width,this.height);
        pop();
    }
    }
