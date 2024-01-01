var img = "" ;
var status = "" ;

function preload() {
    img = loadImage("dog_cat.jpg") ;
}

function setup() {
    canvas = createCanvas(640 , 420) ;
    canvas.position(460 , 150) ;
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded) ;
    document.getElementById("status").innerHTML = "Status : Detecting Objects" ;
}

function modelLoaded() {
    console.log("Modal is Initialised !") ;
    status = true ;
    objectDetector.detect(img , gotResult) ;
}

function  gotResult(error , results) {
    if(error) {
        console.error(error) ;
    } 
        console.log(results) ;
}

function draw() {
    image(img , 0 , 0 , 640 , 420) ;
    fill('#FF0000') ;
    stroke('#FF0000') ;
    text("Dog" , 45 , 75) ;
    noFill() ;
    rect(30 , 60 , 450 , 350) ;

    fill('#FF0000') ;
    stroke('#FF0000') ;
    text("Cat" , 320 , 120) ;
    noFill() ;
    rect(300 , 90 , 270 , 320) ;
}