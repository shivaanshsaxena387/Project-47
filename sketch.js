var stone,snake,lion,rhino,pc,oro,trap,forest
var trapImage,oroImage,pcImage, forestImage,stoneImage,bg,lion,lionImage,rhino,rhinoImage,stone,stoneImage,gmo,gmoImage
var score=0
var rs,rsImage

function preload(){
  trapImage=loadImage("beartrap.png")
  stoneImage=loadImage("stone.png")
  oroImage=loadImage("orochimaru.png")
  pcImage=loadAnimation("h1.png","h2.png","h3.png","h4.png","h5.png","h6.png","h7.png","h8.png","h9.png",
                        "h10.png","h11.png","h12.png","h13.png","h14.png")
  forestImage=loadImage("forest.png")
  lionImage=loadAnimation("tile000.png","tile001.png","tile002.png","tile003.png","tile004.png","tile005.png","tile006.png",
                     "tile007.png")
  rhinoImage=loadAnimation("r1.png","r2.png","r3.png","r4.png","r5.png","r6.png","r7.png","r8.png","r9.png",
                       "r10.png","r11.png","r12.png",)
  stoneImage=loadImage("stone.png")
  gmoImage=loadImage("gameover.jpg")
  rsImage=loadImage("restart.png")
}




function setup() {
  createCanvas(800,550,200,200)
  bg = createSprite(500,300)
  bg.addImage(forestImage)
  bg.scale=1.77
  bg.velocityX=-10

  pc=createSprite(10,200)
  pc.addAnimation("pc1",pcImage)
  pc.scale=1.1
  
  stone=createSprite(150,480)  
  stone.addAnimation("stone1",stoneImage)
  stone.scale=0.15

  gmo=createSprite(400,250)
  gmo.addImage(gmoImage)
  gmo.scale=2
  gmo.visible=false

  rs=createSprite(400,470)
  rs.addImage(rsImage)
  rs.scale=0.3
  rs.visible=false
  

  obstaclesGroup=new Group ()
}

function draw() {
  background("green");
  
    if(bg.x<0){
      bg.x=400
    }

    if(keyDown("space")){
      pc.velocityY=-3
    }

    pc.velocityY=pc.velocityY+0.5

   edges= createEdgeSprites()
    pc.collide(edges)

    if (keyDown("enter")) {
      stone.velocityX=5
    }

    if(stone.isTouching(obstaclesGroup)){
       score=score+1
       obstaclesGroup.destroyEach()
       stone.x=150
       stone.y=480
       stone.velocityX=0
    }
  
    if (pc.isTouching(obstaclesGroup)){
      bg.visible=false
      pc.visible=false
      stone.visible=false
      score=0
      obstaclesGroup.setVelocityXEach(0)
      obstaclesGroup.setLifetimeEach(-1)
      obstaclesGroup.setDestroyEach()
      gmo.visible=true
      rs.visible=true
      

    }
   

    obstacles();

  drawSprites()

  textSize(20)
  fill ("blue")
  text("SCORE:"+score,100,100)
}

function obstacles() {
  if(frameCount%165===0){
  obstacle=createSprite(800,501)
  obstacle.velocityX=-3
  obstaclesGroup.add(obstacle)
  obstacle.x=Math.round(random(780,540));
  obstaclesGroup.Lifetime=800;

  var rand=Math.round(random(1,3));
  switch(rand){
    case 1:obstacle.addImage(trapImage);
    obstacle.scale=0.5
    break;

    case 2:obstacle.addAnimation("lion1",lionImage);
    obstacle.scale=2
    break;
    

    case 3:obstacle.addAnimation("rhino1",rhinoImage);
    obstacle.scale=2
    break;
  default:break;
  }
  
  
}
 }