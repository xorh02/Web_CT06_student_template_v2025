// write your codes here
let x=200;
let r =100;
let g = 100;
let b = 100;
let speed = 3;
let favfood = ["Potato Chip","Ramen","Pizza","Chicken Rice",
    "Skittles"
];
let yPos = 500;
let lineGap = 30;
let bgSound;
let started = false;
function preload(){
    bgSound = loadSound('assets/star_wars_theme_8_bit.mp3');
}
function setup(){
    createCanvas(500,500);
     bgSound.loop();
}

function draw(){
    background(0);
   
    fill(r,g,b);
    rect(x,300,40,40);
    x += speed;

    // TO DO:checks to bounce and change color
    if(x < 0 || x >= width-40){
        speed = -speed;
        r = random(255);
        g = random(255);
        b = random(255);
    }
    if(started){
    //Task1
    textSize(32);
    text("Lycus" ,350,50);
    text("Jaden" ,350,100);
    text("Keith" ,350,150);
    text("Lucas" ,350,200);
    text("Nathan" ,350,250);

    //Task2 hint use a forloop
    textSize(20);
    fill(255,255,0);
    textAlign(LEFT);
    text("My favourite Food:",50,yPos - 30);
    for(let i =0; i<favfood.length;i++){
        text((i+1)+"."+favfood[i],50,yPos + i *lineGap)
    }
    //text moving example
    yPos-=0.6;
    
    if(yPos< -favfood.length * lineGap){
        yPos = height
    }
    }else{
          fill(255,255,0);
          textSize(32);
          text("click here to start" ,250,250);
    }
}
function mousePressed(){
    if()
}
