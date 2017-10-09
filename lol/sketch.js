function setup() {
	createCanvas(600, 600);
    angleMode(DEGREES);
    background(255);

}

var x = 0;
var y = 0;
var dis = 15;
var col = 100;

function draw() {

	stroke(col,0,col);
    strokeWeight(5)
	if(random(1) > 0.9){
        line(x,y, x+dis,y+dis);
    }else{
        line(x,y+dis,x+dis,y);
	};

	x = x + dis;

    if(x>width){
        col=col +10;
        x=0;
		y= y+dis;
	};

}