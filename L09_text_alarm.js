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
    text("Bounce!",x,50);
    x += speed;
    if(x > width-120 || x<0){ // boundary check detection
        speed = -speed;
        r = random(255);
        g = random(255);
        b = random(255);
    }
    let h = hour();
    let m = minute();
    let s = second();
    let textString = nf(h,2) + ":" + nf(m,2) + ":" + nf(s,2);
    textSize(32);
    textAlign(CENTER,CENTER);
    text(textString, width/2,height/2);
}