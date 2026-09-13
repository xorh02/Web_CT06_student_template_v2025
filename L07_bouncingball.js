// write your codes here
let x=200;
let r =100;
let g = 100;
let b = 100;
let speed = 3;
let favfood = ["Potato Chip","La Mian","Pizza","Chicken Rice",
    ""
]
function setup(){
    createCanvas(400,400);
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
    text("Lycus" ,50,50);
    text("8" ,50,100);
    text("Minecraft" ,50,150);
    

}
