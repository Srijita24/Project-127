song1 = "";
song2 = "";

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload() {
    song1 = loadSound("muskurahat.mp3");
    song2 = loadSound("tum_bin.mp3");
}

function draw() {
    image(video, 0, 0, 600, 500);
}