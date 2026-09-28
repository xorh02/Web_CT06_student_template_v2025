// write your codes here 

let userinput ;
let usertext;
let colorinput;
function setup(){
    createCanvas(200,200);
    userinput = createInput();
    userinput.position(50,50);
    userinput.input(updateUser);
}


function draw(){

    background(220);
    textSize(24);
    textAlign(CENTER,CENTER);
    text(usertext)

}

function updateUser(){
    usertext = this.value();
}