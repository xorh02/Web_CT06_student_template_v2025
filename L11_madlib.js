// write your codes here 

let userinput ;
let usertext;
let colorinput; 
let button;
function setup(){
    createCanvas(400,400);
    userinput = createInput();
    userinput.position(50,50);
    userinput.input(updateUser);
    colorinput = createColorPicker(0);
    colorinput.position(50,20);
    button = createButton("Print");
    button.position(220,50);
    button.mousePressed(display);
}
function draw(){
    background(220);
   
}
function updateUser(){
    usertext = this.value();
}
function display(){
    background(220);
    const inputvalue = userinput.value();
    fill(colorinput.value());
    textSize(24);
    textAlign(CENTER,CENTER);
    text(inputvalue, width/2 , height/2);
}