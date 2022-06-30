leftWrist = 0;
rightWrist = 0;
difference = 0;

function setup(){
    canvas = createCanvas(500 , 400);
    video = createCapture(VIDEO);
    canvas.position(660 , 125);
    video.size(500 , 400);
    video.position(80 ,125);
    poseNet = ml5.poseNet(video ,modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw(){
   background("orange");
   fill("grey");
   textSize(difference);
   text('Code' , 50 ,400);
}

function modelLoaded(){
    console.log("Model is Loaded");
}

function gotPoses(results){
  if (results.length > 0 ){
      console.log(results);

      leftWrist = results[0].pose.leftWrist.x;
      rightWrist = results[0].pose.rightWrist.x;
      difference = floor(leftWrist - rightWrist);
  }
}