song1="";
song2="";
song1_status="";
song2_status="";

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,500);
}

function preload(){
    song1=loadSong("music.mp3");
    song2=loadSong("music2.mp3");
}

function play(){
    song.play();
}