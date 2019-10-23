//create a variable to hold one ball
let b;
let anotherBall;
let thirdBall;
let bob;
let shape;

function setup() {
  createCanvas(800, 800);
  b = new Ball(0, 40,"red"); //make a new ball from the Ball class and call it b.
  anotherBall = new Ball(200,30,"green");
  thirdBall = new Ball(100,10,"blue");
  bob = new Person(0,0,"yellow");
  shape = new Triangle(0,10,5,0,10,10,"purple");
}


function draw(){
	background(220);
    b.drawBall(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveBall(); //move the ball called b (go look in the Ball class for the moveBall function)
    anotherBall.drawBall();
    anotherBall.moveBall();
    thirdBall.drawBall();
    thirdBall.moveBall();
    bob.drawPerson();
    bob.movePerson();
}

//ball class from which to create new balls with similar properties.
class Ball {
	constructor(x,y,color){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
	}
	drawBall(){  // draw a ball on the screen at x,y
    		stroke(1);
    		fill(this.color);
		    ellipse(this.x,this.y,10,10);
	}
	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+7;
		this.y = this.y+6;
	}
}

class Person {
  constructor(x,y,color){
        this.x=x+6;
        this.y=y+6;
        this.color= color;
  }
  drawPerson(){
        stroke(1);
        fill(this.color);
        rect(this.x,this.y,15,15);
  }
  movePerson(){
        this.x=this.x+6;
        this.y=this.y+7;
  }
}
class Triangle {
  constructor(x1,y1,x2,y2,x3,y3){
        this.x1=x1+5;
        this.y1=y1+5;
        this.x2=x2+5;
        this.y2=y2+5;
        this.x3=x3+5;
        this.y3=x3+5;
  drawTriangle(){
        stroke(1);
        fill(this.color);
        triangle(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3,20,20);
  }
}
