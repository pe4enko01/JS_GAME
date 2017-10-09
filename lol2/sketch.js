function setup() {
	createCanvas(600, 600);
    angleMode(DEGREES);
    frameRate(20);

}

var x = 0;
var y = 0;
var a =0;
var dis = 150;
var col = 150;
var lines = [];

lin = new Lin();

function draw() {
    background(0);
    translate(300,300);
   for(var i = 0; i < 1500;i++){
       lines.push(new Lin());
       lines[i].show();
   }

}

function Lin(){

    this.show = function(){

    // strokeWeight(5);
        rotate(a);
        stroke(255);
        line(x,y, x,y+dis);
        a=a+1;
         dis=random(1)* (250 -50) + 50;

    }
}