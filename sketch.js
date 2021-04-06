//Declaring Alias name for Module
const World= Matter.World;
const Engine= Matter.Engine;
const Bodies= Matter.Bodies;

//Declare the game Elemnts
var world,engine,box,ground;

function setup() {
  createCanvas(800,400);
  // creating game Engine by using Engine module
engine= Engine.create();
// game world is equal to engine's world
world=engine.world;


box1=new Box(220,100,40,60);
box2=new Box(200,200,40,40);
ground1=new Ground(0,380,800,20)
}

function draw() {
  background(0); 
  Engine.update(engine) 
 
 box1.display();
 box2.display();
 ground1.display();
}