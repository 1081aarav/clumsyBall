var canvas;
var music;
var surface1, surface2, surface3, surface4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    surface1= createSprite(100, 500, 170, 30)
    surface2= createSprite(280, 500, 170, 30);
    surface3= createSprite(460, 500, 170, 30);
    surface4= createSprite(640, 500, 170, 30);

    surface1.shapeColor=color("green");
    surface2.shapeColor=color("blue");
    surface3.shapeColor=color("red");
    surface4.shapeColor=color("yellow");

    ball=createSprite(random(20, 750), 290, 50, 50);

    ball.shapeColor=color("white");
    ball.velocityX=-4;
    ball.velocityY=-4;

    edges=createEdgeSprites();

    createEdgeSprites()
    


    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    if(ball.isTouching(edges)){
        ball.bounceOff(edges)
    }
    if(ball.isTouching(surface1) ){
        ball.bounceOff(surface1);
        ball.shapeColor=color("green");
        music.stop();
        ball.velocityX=0;
        ball.velocityY=0;
    };
    if(ball.isTouching(surface2) ){
        ball.bounceOff(surface2);
        ball.shapeColor=color("blue");
        music.play()
    };
    if(ball.isTouching(surface3) ){
        ball.bounceOff(surface3);
        ball.shapeColor=color("red")
        music.stop();
        ball.velocityX=0;
        ball.velocityY=0;
    };
    if(ball.isTouching(surface4) ){
        ball.bounceOff(surface4);
        ball.shapeColor=color("yellow");
        music.play();
    };

    drawSprites();
    //add condition to check if box touching surface and make it box
}
