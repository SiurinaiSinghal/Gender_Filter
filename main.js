noseX=0;
noseY=0;
mustache = "";
lips = "";
choice = 0;
function preload() {
  mustache = loadImage('https://i.postimg.cc/5tmx84V9/kisspng-clip-art-portable-network-graphics-drawing-image-i-girly-lipstick-transparent-amp-png-clipar.png');
  lips = loadImage('https://i.postimg.cc/sX5vk9YK/kisspng-clip-art-portable-network-graphics-drawing-image-i-girly-lipstick-transparent-amp-png-clipar.png');
  glass = loadImage('https://i.postimg.cc/xjZbXR5x/Capture-removebg-preview-2.png')
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(200, 200);
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-15;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  if(choice == 1){
    image(lips, noseX-10, noseY + 30, 50, 30);
  }
  if(choice == 2){
    image(mustache, noseX, noseY+20, 30, 30);
    image(glass, noseX-40, noseY-40, 120, 60);
  }

}
function take_snapshot(){    
  save('myFilterImage.png');
}

function lip(){
  choice = 1;
  
}

function must(){
  choice = 2;
}

