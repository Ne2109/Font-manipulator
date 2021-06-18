function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(500, 550);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('grey');
    fill('red')
    stroke('purple')
    square(noseX,noseY,100)
    
    document.getElementById("square_side".innerHTML="Width And Height of a squar will be="+difference+"px")
}
function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}
function gotPoses(results)
{
    if(results.length >0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);

        leftWristX =results[0].pose.leftWrist.x;
        rightWristX =results[0].pose.rightWrist.x;
        difference =(leftWristX-rightWrist);

        console.log("leftWrist"+leftWristX+"rightWristX"+rightWristX+"diffrence=" + difference)
    }
}
