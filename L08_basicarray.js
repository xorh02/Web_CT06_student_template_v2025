// write your codes here
// write your codes here 
//            0         1       2
let list = ["pizza","burger","sushi"];
function setup(){
    createCanvas(400,400);
}
let yPos =400;
let lineGap = 60;
function draw(){
    background(0);
  
    //task3
    fill(255,255,0);//rgb
    textSize(24);
    textAlign(CENTER);
    for(let i=0; i<list.length;i++){
         text( (i+1) +". "+list[i], width/2,yPos + i*lineGap);
     }
    yPos -= 0.6;
    if(yPos < -list.length * lineGap){
        yPos = height;
    }
}
  // //text("what u want to render",x,y)
    // textSize(20);
    // text("li chen",50,50);
    // //age
    // textSize(67);
    // text("i am 16 this year",50,100);
    // //favourtite activity
    // textSize(14);
    // text("My favourite activity is eating",50,150);
    
    //task2
    // textSize(20);
    // textAlign(LEFT);
    // text("My Favourtie Foods:")
    // for(let i=0; i<list.length;i++){
    //     text( (i+1) +". "+list[i], 50,i*30);
    // }
    