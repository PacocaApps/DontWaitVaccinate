function setup(){

   
 
    var cnv = createCanvas(windowHeight, windowWidth);
    cnv.parent("bgcc");
    background(255);

}

function draw(){




}

class Balls{

constructor(x,y,sz){

    this.x = x;
    this.y = y;
    this.size = sz;


    

}
display(){
fill(255,0,0);
ellipse(this.x,this.y,this.size,this.size)


}

}