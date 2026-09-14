// write your codes here
let x = 200;
let speed = 2;
let r =0;
let g = 0;
let b =0;
function setup(){
    createCanvas(400,400);
}

function draw(){
    background(220);
    fill(r,g,b);
    textSize(32);
    text("Bounce!",x,200);
    x += speed;
    if(x > width-60 || x<0){
        speed = -speed;
        r = random(255);
        g = random(255);
        b = random(255);
    }
}