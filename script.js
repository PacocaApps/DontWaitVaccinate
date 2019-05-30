var cnv;
var Balls = [];
var numBalls = 100;
function setup(){

   
 cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);

    background(0);
    for(var i =0;i <100;i++){
        
        Balls[i] = new Ball(random(width),random(height),random(10))
    }
    

}

function draw(){
 background(0);
    for(var i =0;i <1000;i++){
        
        Balls[i].display();
    }


}

class Ball{

constructor(x,y,sz){

    this.x = x;
    this.y = y;
    this.size = sz;


    

}
display(){
noStroke();
    fill(255,0,0);
ellipse(this.x,this.y,this.size,this.size)


}

}
function windowResized() {
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight);
}
