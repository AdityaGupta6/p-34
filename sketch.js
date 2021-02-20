const Body=Matter.Body;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
const Engine=Matter.Engine;
const Render=Matter.Render;
const World=Matter.World;
var engine;
var world;
var ground;
var bg;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;
var hero;
var enemy;
var line1;

function preload() {
//preload the images here
bg=loadImage("GamingBackground.png")

}

function setup() {
  createCanvas(1500, 700);
  engine=Engine.create()
  world=engine.world
  // create sprites here
  ground=new Ground(450,650,900,10)
  box1=new Box(700,630,70,70)
  box2=new Box(700,620,70,70)
  box3=new Box(700,610,70,70)
  box4=new Box(700,600,70,70)
  box5=new Box(700,570,70,70)
  box6=new Box(700,530,70,70)

  box7=new Box(600,630,70,70)
  box8=new Box(600,620,70,70)
  box9=new Box(600,610,70,70)
  box10=new Box(600,600,70,70)

  box11=new Box(500,630,70,70)
  box12=new Box(500,620,70,70)
  box13=new Box(500,610,70,70)
  box14=new Box(500,600,70,70)
  box15=new Box(500,570,70,70)

  box16=new Box(400,630,70,70)
  box17=new Box(400,620,70,70)
  box18=new Box(400,610,70,70)
  box19=new Box(400,600,70,70)
  box20=new Box(400,570,70,70)
  box21=new Box(400,530,70,70)

  box22=new Box(300,630,70,70)
  box23=new Box(300,620,70,70)
  box24=new Box(300,610,70,70)
  box25=new Box(300,600,70,70)
 
hero=new Hero(200,150,80,50);
enemy=new Enemy(800,350,150)
 line1=new Line(hero.body,{x:200,y:150})

  


}

function draw() {
  background(bg);
  Engine.update(engine)
  textSize(25)
  ground.display()
  enemy.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  
  box7.display()
  box8.display()
  box9.display()
   box10.display()
   
   box11.display()
   box12.display()
   box13.display()
  box14.display()
  box15.display()

  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
 box21.display()
 
 box22.display()
 box23.display()
 box24.display()
 box25.display()
 
 hero.display()
 
//  line1.display()
}
function mouseDragged() {
  Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}
function mouseReleased() {
  Body.setPosition(hero.body,{x:200,y:150})

  line1.fly()
  
}
function keyPressed() {
  if (keyCode===32) {
    // Body.setPosition(hero.body,{x:})
    line1.attach(hero.body)
  }
}
