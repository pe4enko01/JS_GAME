function setup() {
	createCanvas(600, 600);
    angleMode(DEGREES);
    frameRate(140);

}



bird = new Bird();
block = new Block();

var bloks = [];

function draw() {
    background(0, 184, 217);
    translate(300,300);

    fill(255);
    noStroke();
    ellipse(0,0,400,400);
    fill(0, 184, 217);
    ellipse(0,0,110,110);


    bird.show();

    block.rot();


}
function keyPressed() {
    if (key == ' ') {
        bird.up();
        console.log("millis()");
    }
}



function Bird(){

    this.x = 0;
    this.y = -150;
    this.a =0;
    this.vel = 0;
    this.lol = false;
    this.u = 0;
    this.y1 = this.y - this.u;


    // this.r2 =  this.x + this.y
    this.up = function(){

        this.lol = true;

    }
    this.show = function(){
        this.millisecond = millis();
        rotate(this.a)
        fill(0);
        noStroke();
        ellipse(this.x,this.y1,10,10);
        this.a+=1;


        this.y1 = this.y - this.u;

        if(this.lol == true){
            this.u +=7;
        }
        if(frameCount % 10 == 0){

            this.lol = false;
        };
        if(this.y1 < -180){
            this.lol = false;

        };

        if(this.y1 < -60){
            this.vel = 0;
            this.y+=2;

        }
        // else if(this.y1 > -200){
        //     this.y1 =-200;
        // }
        else{
            this.y+=0;
        };

     // if(this.y1 < -180){
     //     this.u +=0;
     //        this.y +=0;
     //    }
    };
}
function Block(){
    this.z = Math.random(1) * (120 - 40) + 40;

    this.b=0;

    this.rot = function(){
        rotate(this.b);
        this.b -=3;

        strokeWeight(11);
        stroke(0, 184, 217);
        line(40,40,this.z,this.z);

        strokeWeight(11);
        stroke(0, 184, 217);

        line(this.z + 40,this.z + 40,140,140);



       //
       //  if(this.bob = false ){
       //
       //      this.z -=1;
       //  };
       //
       //
       // /* if(this.bob = true){
       //      // if(this.z < 100){
       //      //     this.z +=1;
       //      // };
       //      this.z +=1;
       //  }*/


    }

}


