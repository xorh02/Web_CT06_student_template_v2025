// write your codes here
let x = 200;
function setup(){
    createCanvas(400,400);
}

function draw(){
    background(220);
    textSize(16);
    text("Bounce!",x,200);
    x += 0.6;
}