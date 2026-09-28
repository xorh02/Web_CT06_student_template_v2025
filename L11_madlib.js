// write your codes here 
let button;
let nouninput,verbinput,adjinput,placeinput;
function setup(){
    createCanvas(400,400);
     background(220);

    nouninput = createInput();
    nouninput.position(50,20);
    
    verbinput = createInput();
    verbinput.position(50,50);
    
    adjinput = createInput();
    adjinput.position(50,80);

    placeinput = createInput();
    placeinput.position(50,110); 

     button = createButton("Generate Story");
    button.position(50,140);
    button.mousePressed(display);
}
function display(){
    background(220);
    textSize(24);
    textAlign(CENTER,CENTER);
    const nounvalue = nouninput.value() ;
    const verbvalue = verbinput.value();
    const adjectivevalue = adjinput.value();
    const placevalue = placeinput.value();
    text(nounvalue, 50 , height/2-50);
    text(verbvalue, 50 , height/2-70);
    text(adjectivevalue, 50 , height/2-90);
    text(placevalue, 50 , height/2-110);
}