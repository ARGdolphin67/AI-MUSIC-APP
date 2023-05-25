song1="";
song2="";
song1_status="";
song2_status="";
scoreRightWrist=0;
scoreLeftWrist=0;

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,600,500);
    song1_status=song1.isPlaying();
    song2_status=song2.isPlaying();
    fill("#FF0000");
    stroke("#FF0000");

   if(scoreRightWrist>0.2){
    circle(rightWristX,rightWristY,20);
    song1.stop();

    if(song2_status==false){
        song2.play();
        document.getElementById("song").innerHTML="playing Peter Pan song"
       }
   }

   if(scoreLeftWrist>0.2){
    circle(leftWristX,leftWristY,20);
    song2.stop();

    if(song1_status==false){
        song1.play();
        document.getElementById("song").innerHTML="playing star song"
       }
   }
}

function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function play(){
    song.play();
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
         console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        scoreRighttWrist = results[0].pose.keypoints[10].score;
        console.log("scoreLeftWrist =" +scoreLeftWrist);
        console.log("scoreRightWrist =" +scoreRightWrist);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX= " + leftWristX +"leftWristY= "+ leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX ="+rightWristX+"rightWristY"+rightWristY);
    }
}