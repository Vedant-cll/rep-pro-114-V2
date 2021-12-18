function preload(){

}

function setup() {
canvas = createCanvas(590,590);
canvas.center(); 
video = createCapture(VIDEO);
video.size(590, 590);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('poseNet is initialized');
}



function gotPoses(results){
    if(results.length>0){
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
    }
    }