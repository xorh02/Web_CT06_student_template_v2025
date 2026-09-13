let storyText =[
    "A long time ago in a galaxy far",
    "far away",
    "It is a period of learning",
    "Our adventure begins here",
    "Anything is possible"
] 
let yPos = 400;
let lineGap=60;
let bgSound;//varname variable name
let started = false;
function preload(){
    bgSound = loadSound('assets/star_wars_theme_8_bit.mp3');
}
function setup(){
    createCanvas(400,400);
}
function draw(){
    background(0);
    if(started){
        fill(255,255,0);
        textSize(24);
        textAlign(CENTER);
        for(let i=0; i<storyText.length;i++){
            text(storyText[i],width/2,yPos +i* lineGap);
        }
        yPos -= 0.6;
        if(yPos <-storyText.length *lineGap){
            yPos = height;
        }
    }else{
        fill(255,255,0);
        textSize(24);
        textAlign(CENTER);
        text("CLICK To START show",width/2,height/2);
    }
}
function mousePressed(){
    if(started === false){
        started = true;
        bgSound.loop();
    }
}