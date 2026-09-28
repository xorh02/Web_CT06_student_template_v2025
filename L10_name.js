// write your codes here  
let userinput;
let usertext = "ENTER TEXT HERE";
let ageinput;
let agetext = "ENTER AGE HERE";
let bgcolorpicker;
function setup(){
    createCanvas(400,400);
    userinput = createInput();
    userinput.position(width/2 - 90 ,height - 80 )
    userinput.input(updateText);

    ageinput = createInput();
    ageinput.position(width/2 - 90 ,height - 50 )
    ageinput.input(updateAge);

    bgcolorpicker = createColorPicker(220);
    bgcolorpicker.position(width/2-90 , height -120);
}

function draw(){
      
    background(bgcolorpicker.value());
    fill(255)
    rect(50,100,300,150,50);
    fill(0);
    textSize(12);
    text("Pick color: ",50 , height-110)
    textSize(24);
    textAlign(CENTER,CENTER);
    text(usertext,width/2,height/2-40); 
    textSize(24);
    textAlign(CENTER,CENTER);
    text(agetext,width/2,height/2);
    textSize(12);
    text("Enter name",50 , height-70)
    textSize(12);
    text("Enter age",50 , height-40)
}

function updateText(){
    usertext = this.value()
}
function updateAge(){
    agetext = this.value();
}