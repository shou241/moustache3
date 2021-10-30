noseX=0;
noseY=0;

function preload()
{
moustache= loadImage('1.png')
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300)
    video.hide();

    poseNet = ml5.poseNet(video, opModelLoaded);
    poseNet.on("pose", gotPoses);
}

function opModelLoaded()
{
    console.log('PoseNet is initialized');
}

function gotPoses(results){

if(results.length > 0)
{
    console.log(results)
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY);
}
}


function draw()
{   
    image(video, 0, 0, 300, 300);
    image(moustache, noseX-37, noseY-25, 80,80);
}


function take_snapshot()
{
save('myfilter1.png')
}



