// write your codes here
let x=200;
let r =100;
let g = 100;
let b = 100;
let speed = 3;
let favfood = ["Potato Chip","Ramen","Pizza","Chicken Rice",
    "Skittles"
];
let yPos = 1000;
function setup(){
    createCanvas(1000,1000);
}

function draw(){
    background(220);
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
    text("Lycus" ,550,50);
    text("8" ,550,100);
    text("Minecraft" ,550,150);

    //Task2 hint use a forloop
    textSize(20);
    textAlign(LEFT);
    text("My favourite Food:",50,50);
    for(let i =0; i<favfood.length;i++){
        text((i+1)+"."+favfood[i],50,90 + i *30)
    }
    //text moving example
    textSize(24);
    text("HELLO",width/2,yPos);
    y
}
