const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(900, 100, 70, 70);
  box7 = new Box(800, 100, 70, 70);
  box8 = new Box(800, 100, 70, 70);
  box9 = new Box(800, 100, 70, 70);
  box10 = new Box(800, 100, 70, 70);
  box11 = new Box(800, 100, 70, 70);
  box12 = new Box(800, 100, 70, 70);
  box13 = new Box(700, 100, 70, 70);
  box14 = new Box(700, 100, 70, 70);
  box15 = new Box(700, 100, 70, 70);
  box16 = new Box(700, 100, 70, 70);
  box17 = new Box(700, 100, 70, 70);
  box18 = new Box(700, 100, 70, 70);
  box19 = new Box(700, 100, 70, 70);
  box20 = new Box(700, 100, 70, 70);


}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  hero.display();
  rope.display();
  monster.display();

 // text("Score: "+ score, 500,50);
  
 // if (gameState===PLAY){
   // score = score + Math.round(getFrameRate()/60);
    //ground.velocityX = -(6 + 3*score/100);
  //}

}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}

//if (hero.isTouching(box1)||hero.isTouching(box2)||hero.isTouching(box3)||hero.isTouching(box4)||hero.isTouching(box5)||
//hero.isTouching(box6)||hero.isTouching(box7)||hero.isTouching(box8)||hero.isTouching(box9)||hero.isTouching(box10)
//||hero.isTouching(box11)||hero.isTouching(box12)||hero.isTouching(box13)||hero.isTouching(box14)||hero.isTouching(box15)
//||hero.isTouching(box16)||hero.isTouching(box17)||hero.isTouching(box18)||hero.isTouching(box19)||hero.isTouching(box20))
//{textVisible=true;
//hero.velocityX=0;
//hero.velocityY=0;
//background("fireBrick");
//textSize(50);
//text("YOU WON!",50,200);
//textSize(30);
//text("TRY AGAIN!",130,250);
//textSize(20);
//text("Left click to restartif(",110,350)
//}
