const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var universe, earth;
var ground;
var ball;
function setup(){
    var canvas = createCanvas(400,400);
    universe = Engine.create();
    earth = universe.world;

    var ground_options ={
        isStatic: true
    }
    var ball_option ={
        restitution:1.0
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(earth,ground);
ball=Bodies.circle(200,100,20,ball_option);
World.add(earth,ball);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(universe);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
   ellipseMode(CENTER) ;
   ellipse(ball.position.x,ball.position.y,20)
}