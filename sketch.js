var ti,t;
var gameState="play";
var di,dg,d;
var ci,c,cg;
var g,gi;
var ibg,ib;
function preload(){
  ti=loadImage("tower.png");
  di = loadImage("door.png");
  ci = loadImage("climber.png");
  gi = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}
function setup(){
  createCanvas(600,600);
  spookySound.loop();
  t=createSprite(300,300)
  t.addImage("tower",ti);
  t.velocityY=-1;
dg= new Group();
  cg = new Group();
  ibg = new Group();
  g= createSprite(200,200,50,50);
  g.scale = 0.3;
  g.addImage("ghost", gi);


}
function draw(){
     background(0);
  if(gameState==="play"){
     if(keyDown("left_arrow")){
      g.x = g.x - 3;
    }
    
    if(keyDown("right_arrow")){
      g.x = g.x + 3;
    }
    
    if(keyDown("space")){
      g.velocityY = -10;
    }
     g.velocityY = g.velocityY + 0.8;
  if(t.y>400){
    t.y=300;
  
  }
    spawndoors();
    if(cg.isTouching(g)){
      g.velocityY = 0;
    }
    if(ibg.isTouching(g) || g.y > 600){
      g.destroy();
      gameState = "end"
    }
  drawSprites();
 }                   
if(gameState==="end"){
   
stroke("yellow");
    fill("yellow");
    textSize(30);
  text("Game Over", 230,250);
}
}

function spawndoors(){
if (frameCount % 240 === 0) {
  var d = createSprite(200, -50);
    var c = createSprite(200,10);
    var ib = createSprite(200,15);
    ib.width = c.width;
    ib.height = 2;
  d.x = Math.round(random(120,400));
    c.x = d.x;
    ib.x = d.x;
  d.addImage(di);
    c.addImage(ci);        
  d.velocityY = 1;
    c.velocityY = 1;
    ib.velocityY = 1; 
  g.depth = d.depth;
    g.depth +=1;                          
  d.lifetime = 800;
    c.lifetime = 800;
    iblifetime = 800;
  dg.add(d);
    ib.debug = true;
    cg.add(c);
    ibg.add(ib);   
  
     }
  
}















