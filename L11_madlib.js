// write your codes here 

let userinput ;
let usertext;
let colorinput; 
function setup(){
    createCanvas(400,400);
    userinput = createInput();
    userinput.position(50,50);
    userinput.input(updateUser);
    colorinput = createColorPicker(0);
    colorinput.position(50,20);
}


function draw(){

    background(220);
    fill(colorinput.value());
    textSize(24);
    textAlign(CENTER,CENTER);
    text(usertext, width/2 , height/2);

}

function updateUser(){
    usertext = this.value();
}