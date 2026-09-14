// write your codes here
let x = 200;
let speed = 2;
let r =0;
let g = 0;
let b =0;
let colors=220;
let countdown = 5;
let interval;
let bgSound;
function preload(){
    bgSound = loadSound('assets/bossaNova.mp3');
}
function setup(){
    createCanvas(400,400);
    
}

function draw(){
    background(colors);
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
    let textString = nf(h,2) + ":" + nf(m,2) + ":" + nf(s,2);
    textSize(32);
    textAlign(CENTER,CENTER);
    text(textString, width/2,height/2);
    textSize(16); 
    text("CLICK ME TO START TIMER",width/2,height/2 + 100);
    textSize(32);
    text(countdown,width/2,height/2 + 50);
}
function mousePressed(){
    interval = setInterval(updateCountdown,1000);
}
function updateCountdown(){
    if(countdown > 0){
        countdown -= 1;
    }else{
        clearInterval(interval);
        setInterval(alarm,500);
    }
}
function alarm(){
    colors = random(255);
    bgSound.play();
}