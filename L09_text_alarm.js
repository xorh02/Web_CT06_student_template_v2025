// write your codes here
let x = 200;
let speed = 0.6;
function setup(){
    createCanvas(400,400);
}

function draw(){
    background(220);
    textSize(16);
    text("Bounce!",x,200);
    x += speed;
    if(x > width || x<0){
        
    }
}