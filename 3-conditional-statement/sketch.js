//create an empty array called balls
let balls = [];

//create a variable to hold your avatar
let me;

//create a varible to count score
let score=0;

function setup() {
  createCanvas(1200, 725);

  //make one avatar called me
  me = new Avatar(width/2, 300, 4);

}

function draw(){
	background(220);
  text(score,100,100);

  me.drawMe();
  me.moveMe();

  if (frameCount % 25 == 0) {
      let  b = new Ball(width, random(0,height), -3);
      balls.push(b);
      console.log(balls); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].bounceBall();
	  }

}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    		stroke("green");
        strokeWeight(5);
    		fill("green");
		    ellipse(this.x,this.y,20,20);
        line(this.x,this.y, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+60);
        line(this.x, this.y+40, this.x+10, this.y+50);
        line(this.x+10, this.y+50, this.x+5, this.y+60);
        line(this.x, this.y+15, this.x-10, this.y+25);
        line(this.x-10, this.y+25, this.x+10, this.y+35);
	}

	moveMe(){
    if (keyIsDown(DOWN_ARROW)) { //if you hold the up arrow, move up by speed
       this.y += this.speed;
    }

    if (keyIsDown(UP_ARROW)) {//if you hold the down arrow, move down by speed
        this.y -= this.speed;
    }

    if (keyIsDown(LEFT_ARROW)) {//if you hold the left arrow, move left by speed
        this.x -= this.speed;
	  }

    if (keyIsDown(RIGHT_ARROW)) {//if you hold the right arrow, move right by speed}
        this.x += this.speed;
    }



}
}
//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(0);
      strokeWeight(1);
    	fill("red");
		  ellipse(this.x,this.y,10,10);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speed;
		this.y = this.y+.5;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  bounceBall(){
    	if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
      		this.speed = -this.speed;
          score=score+1
    	}
  }
}
