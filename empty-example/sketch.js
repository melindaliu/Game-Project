
function setup() {
  createCanvas(800, 800);
  class Ball {

 constructor(x,y,color){
		this.x = x;
    		this.y = y;
           this.color = color;
	  }
}
}

function draw() {
	background('white');
  drawBall(){
    	   stroke(0);
    	   fill(this.color);
         ellipse(this.x,this.y,10,10);
	}

  moveBall(){ 
	   this.x = this.x+2;
	   this.y = this.y+.5;
	}



}
