img = "" ;
status = "" ;
objects = {} ;

function preload() {}

function setup() {
    canvas = createCanvas(380 , 380) ;
    canvas.position(460 , 150) ;
    video = createCapture(VIDEO) ;
    video.size(380 , 380) ;
    video.hide() ;
}

function start() {
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded) ;
    document.getElementById("status").innerHTML = "Status : Detecting Objects" ;
}

function modelLoaded() {
    console.log("CoCoSSD is Initialised !") ;
    status = true ;
}

function  gotResult(error , results) {
    if(error) {
        console.error(error) ;
    } 
        console.log(results) ;
        objects = results ;
}

function draw() {
    image(video , 0 , 0 , 380 , 380) ;

    if(status != "") {
        objectDetector.detect(video , gotResult) ;
        r = random(255) ;
        g = random(255) ;
        b = random(255) ;
        for(i = 0 ; i < objects.length ; i++) {
            document.getElementById("status").innerHTML = "Status : Objects Detected" ;
            document.getElementById("number_of_objects").innerHTML = "Number of Objects that Detected are : " + objects.length ;
            fill(r , g , b) ; ;
            stroke(r , g , b) ;
            noFill() ;
            percent = floor(objects[i].confidence * 100) ;
            text(objects[i].label + "" + percent + "%" , objects[i].x , objects[i].y) ;
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height) ;
        }
    }
}