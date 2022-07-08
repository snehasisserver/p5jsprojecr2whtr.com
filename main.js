function preload(){
    

}
function setup(){
    canvas = createCanvas(650,500);
    canvas.position(100,170);
    video = createCapture(VIDEO);
video.hide();

   tint_color = "";
}
function draw(){
    image(video,0,0,650,500);
    tint(tint_color);
    fill("red");
    circle(620, 30, 40);
    circle(30, 30, 40);
    circle(620, 470, 40);
    circle(30, 470, 40);
    fill("green");
    rect(50, 20, 550, 20);
    rect(50, 460, 550, 20);
    rect(20, 50, 20, 400);
    rect(610, 50, 20, 400);
}

function take_snapshot(){
    save('studentprojectimage.png');
}
function filter_tint(){
    tint_color = document.getElementById("filter_color").value;
}
