function setup() {
	createCanvas(600, 600);
    angleMode(DEGREES);
    background(0);

}

var x = 0;
var y = 0;
var dis = 15;
var col = 100;
var a =0;
var b =0;
var q =0;

var x1 = 60;
var y1 = 60;
var x2 = 180;
var y2 = 180;
function draw() {


    translate(300,300);




    rotate(a);
    push();
    stroke(255);
    point(x1,y1);
    pop();


    a += 1;

    rotate(b);
    push();
    stroke(255);
    point(x2,y2);
    pop();

    b += 4;


    stroke(255);
    line(x1,y1,x2,y2+ a);



}
