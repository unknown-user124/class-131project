img="";
status="";

function setup() {
canvas=createCanvas(640 , 420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status1").innerHTML = "Status : Detecting Objects";
}

function back() {
window.location="mainindex.html"
}

function modelLoaded() {
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img , gotResult);
}

function gotResult(error,results) {
if (error) {
    console.log(error);
}
console.log(results);
}


function draw() {
image(img ,0,0, 640,420);
fill("#FF0000");
text("red", 45, 75);
noFill();
stroke("#FF0000");
rect(28 , 60 , 450 , 350);
rect(285 , 100 , 400 , 420);
text("blue", 295, 125);
noFill();
stroke("#FF0000");

}


function preload(){
img=loadImage("blue and red.jpeg");
}





