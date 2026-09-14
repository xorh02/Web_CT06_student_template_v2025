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
    text("KE BIN!",x,50);
    text("ALEXANDER!",x,350);
    x += speed;
    if(x > width-60 || x-60<0){ // boundary check detection
        speed = -speed;
        r = random(255);
        g = random(255);
        b = random(255);
    }
    //task 1
    let h = hour();
    let m = minute();
    let s = second();
    let textString = nf(h,2) + ":" + nf(m,2) + ":" + nf(s,1);
    textSize(32);
    textAlign(CENTER,CENTER);
    text(textString, width/2,height/2); 
}