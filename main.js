function preload(){

}
function setup(){
   canvas=createCanvas(640, 480);
   canvas.position(110,150);
   video=createCapture(VIDEO);
   video.hide();
}
function draw(){
   image(video,170,130,300,230);
   fill("red");
   circle(30, 30, 50);
   circle(600, 30, 50);
   circle(600, 450, 50);
   circle(30, 450, 50);
   fill("green")
   rect(30, 30, 570, 55);
   rect(30, 30, 55, 420);
   rect(30, 400, 570, 55);
   rect(550, 30, 55, 420);

}
function take_snapshot(){
   save('img.png');
}