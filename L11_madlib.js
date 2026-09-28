// write your codes here 

let userinput ;





let colorinput; 
let button;

let nouninput,verbinput,adjinput,placeinput;


function setup(){
    createCanvas(400,400);
     background(220);
    // userinput = createInput();
    // userinput.position(50,50);
    // userinput.input(updateUser);
    // colorinput = createColorPicker(0);
    // colorinput.position(50,20);
    // button = createButton("Print");
    // button.position(220,50);
    // button.mousePressed(display);
    nouninput = createInput();
    nouninput.position(50,20);
    
    verbinput = createInput();
    verbinput.position(50,50);
    
    adjinput = createInput();
    adjinput.position(50,80);

    placeinput = createInput();
    placeinput.position(50,110); 

     button = createButton("Generate Story");
    button.position(220,50);
    button.mousePressed(display);
}

// function updateUser(){
//     usertext = this.value();
// }

function display(){
    background(220);
    const inputvalue = userinput.value();
    fill(colorinput.value());
    textSize(24);
    textAlign(CENTER,CENTER);
    text(inputvalue, 50 , height/2);
}