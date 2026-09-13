// write your codes here
let x=200;
let r =100;
let g = 100;
let b = 100;
let speed = 3;
function setup(){
    createCanvas(400,400);
}

function draw(){
    background(220);
    fill(r,g,b);
    rect(x,200,40,40);
    x += speed;

    // TO DO:checks to bounce and change color


}