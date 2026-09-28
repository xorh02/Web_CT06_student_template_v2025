// write your codes here 
let button;
let nouninput,verbinput,adjinput,advinput,placeinput;
let storyText = "";
let storyTemplates =[
    " The {adj} {noun} decided to {verb} {adv} at the {place}.",
    "One Day, a {adj} {noun} wanted to {verb} {adv} in {place}",
    "Did you hear about the {adj} {noun} hat tried to {verb} {adv} near {place}:"
]
function setup(){
    createCanvas(400,400);
     background(220);

    nouninput = createInput();
    nouninput.position(50,20);
    
    verbinput = createInput();
    verbinput.position(50,50);
    
    adjinput = createInput();
    adjinput.position(50,80);
 
    advinput = createInput();
    advinput.position(50,110);
 
    placeinput = createInput();
    placeinput.position(50,140); 

    button = createButton("Generate Story");
    button.position(50,170);
    button.mousePressed(display);
}
function display(){
    background(220);
    textSize(24);
    textAlign(CENTER,CENTER);
    const nounvalue = nouninput.value() ;
    const verbvalue = verbinput.value();
    const adjectivevalue = adjinput.value();
    const advvalue = advinput.value();
    const placevalue = placeinput.value();
    let template = random(storyTemplates);
    storyText = template.re
}