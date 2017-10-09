function setup() {
	createCanvas(400, 600);
    angleMode(DEGREES);
}

block = new Block(200,500);
hero = new Hero;
var blocks = [];

function draw() {
    background(180);


    if(blocks.length < 7) {
        blocks.push(new Block(Math.random() * (320 - 0) + 0,Math.random() ));
        // if(blocks.length > 20){
        //     blocks.pop();
        // }
    };


    for(var i=0;i<blocks.length;i++){
        blocks[i].show();
    };


    block.show();
    hero.show();
    hero.move();
    // hero.xy(1);
    hero.M();
    // hero.jump();
    // hero.dow();

};

function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        hero.xy(2);
    }
    else if(keyCode === LEFT_ARROW) {
        hero.xy(-2);
    }
};

function keyReleased() {
    hero.xy(0);
}

function Block(x,y){
    this.x = x;
    this.y = y;

    this.show = function(){

        fill(255);
        rect(this.x,this.y,80,20);

        if(this.y > height){
            this.x = Math.random() * (320 - 0) + 0;
            this.y = Math.random() * (100 - 0) + 0;
        };

    };
};

function Hero(){
    this.x = 200;
    this.y = 300;
    this.acsD = 0;
    this.lift = 5;
    this.xdir = 0;

    this.show = function(){

        fill(0);
        ellipse(this.x,this.y,20,20);

    };

    this.move = function(){
        this.acsD +=0.2;
        this.y += this.acsD;

        if(block.y < this.y && block.x < this.x && block.x + 80 > this.x){
            this.acsD = 0;
            this.acsD -=8;
            // this.y += this.acsD;
            block.y += 60;
        };

        for(var i=1;i<blocks.length;i++){

            if(blocks[i].y < this.y && blocks[i].x < this.x && blocks[i].x + 80 > this.x){
                this.acsD = 0;
                this.acsD -=8;
                this.y += this.acsD;

                for(var j= 0;j<blocks.length;j++){
                    blocks[j].y += 40;
                }
                // block2.y += 40;
                // block3.y += 40;

            };
        };
        // if(block2.y < this.y && block2.x < this.x && block2.x + 80 > this.x){
        //     this.acsD = 0;
        //     this.acsD -=12;
        //     this.y += this.acsD;
        //     block1.y += 40;
        //     block2.y += 40;
        //     block3.y += 40;
        //
        // };
        // if(block3.y < this.y && block3.x < this.x && block3.x + 80 > this.x){
        //     this.acsD = 0;
        //     this.acsD -=12;
        //     this.y += this.acsD;
        //     block3.y += 40;
        //
        // };

        };

    this.xy = function(dir){
        this.xdir =dir;

    };

    this.M = function(){
        this.x +=this.xdir;
    }

    // this.jump = function(){
    //     if(block.y < this.y){
    //         this.acsD = 0;
    //
    //     };
    //
    //
    // }
    // this.dow = function(){
    //     if(this.acsD == 10){
    //
    //     };
    // }


};