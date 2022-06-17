
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Body = Matter.Body;
const MouseConstraint = Matter.MouseConstraint;
const Constraint = Matter.Constraint;

let ground;
let boxes = [] ;
let bird;
let mConstraint ;
let slingShot


function setup() {
  var canvas = createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;
  ground= new Ground(width/2,height-10, width, 20);
  for (var i = 0; i< 3 ; i++){
  boxes[i] = new Box(450 ,300-i*75 ,50 ,75)
  }
  bird = new Bird(150,500,16)
  slingShot = new SlingShot(150,500,bird.body)
 
  var mouse = Mouse.create(canvas.elt)
  var  options = {
    mouse: mouse
  }
  mConstraint = Matter.MouseConstraint.create(engine, options)
  World.add(world,mConstraint)
}

function keyPressed() {
  if (key == ' ') {
    World.remove(world,bird.body)
    bird = new Bird(150,500,16)
    slingShot.attach(bird.body)
  }
}

function mouseReleased() {
  setTimeout(() => {
  slingShot.fly()
} ,30)
}
function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show();
  for (let box of boxes){
    box.show();
  }
  slingShot.show()
  bird.show();
}

