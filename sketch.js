var cat,catImg1,catImg2, catImg4;
var garden,gardenImg;
var mouse,mouseImg1,mouseImg2,mouseImg4;


function preload() {
    //load the images here

    gardenImg=loadImage("images/garden.png");
    
   catImg1=loadAnimation("images/cat1.png");
  catImg2=loadAnimation("images/cat2.png","images/cat3.png");
   catImg4=loadAnimation("images/cat4.png");

   mouseImg1=loadAnimation("images/mouse1.png");
   mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
   mouseImg4=loadAnimation("images/mouse4.png");

  
   

  
}

function setup(){
    createCanvas(1000,800);
    //create cat and mouse sprites

    cat=createSprite(870,600);
    cat.addAnimation("catSource",catImg1);
    cat.scale=0.1;

     mouse=createSprite(200,600);
     mouse.addAnimation("mouseSource",mouseImg1);
     mouse.scale=0.1;
}

function draw() {
   background(gardenImg);
  if(cat.x-mouse.x < (cat.width-mouse.width)/2){
      cat.velocityX=0;
      cat.addAnimation("catDest",catImg4);
      cat.x=300;
      cat.scale=0.1;
      cat.changeAnimation("catDest");

      mouse.addAnimation("mouseDest",mouseImg4);
      mouse.scale=0.1;
      mouse.changeAnimation("mouseDest");
  }  
    


    
    drawSprites();
    
  

}
function keyPressed(){
    if(keyCode === LEFT_ARROW){
     cat.velocityX=-5;
     cat.addAnimation("catRunning",catImg2);
     
     cat.changeAnimation("catRunning");

     mouse.addAnimation("mouseTeasing",mouseImg2);
     mouse.frameDelay=25;
     mouse.changeAnimation("mouseTeasing");

    }
}




