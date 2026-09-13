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
function setup(){
    createCanvas(500,500);
}

function draw(){
    background(0);
    fill(r,g,b);
    rect(x,200,40,40);
    x += speed;

    // TO DO:checks to bounce and change color
    if(x < 0 || x >= width-40){
        speed = -speed;
        r = random(255);
        g = random(255);
        b = random(255);
    }
    //Task1
    textSize(32);
    text("Lycus" ,350,50);
    text("8" ,350,100);
    text("Minecraft" ,350,150);

    //Task2 hint use a forloop
    textSize(20);
    fill(255,255,0);
    textAlign(LEFT);
    text("My favourite Food:",50,50);
    for(let i =0; i<favfood.length;i++){
        text((i+1)+"."+favfood[i],50,yPos + i *30)
    }
    //text moving example
    yPos-=0.6;
}
