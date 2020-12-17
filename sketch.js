var bullet,speed,thickness,wall,weight








function preload(){

}
 
function setup(){
  Canvas(1200,600)
  speed=random(223,321)
  thickness=random(22,83)
  weight=random(30,52)

  bullet=createSprite(100,200,5,20)
  wall=createSprite(1200,200,thickness,hight/2)
}
                       
function draw(){
  background(456)

  drawSprites();
}
 
