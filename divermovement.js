function diver_moves()
{

    if(keyDown(LEFT_ARROW))
    {
      john.changeAnimation("swimmingleft",swimmingleft)
      netsprite.changeImage('netleft',netimage)
      john.x = john.x - 8
      netsprite.x = john.x - 100;
      netsprite.y = john.y+50
      
    }
    
    if(keyDown(UP_ARROW))
    {
      john.angle = 70
      john.y = john.y -10;
        netsprite.x = john.x + 100;
        netsprite.y = john.y+50;
    }
    
    if(keyDown(DOWN_ARROW))
    {
      john.angle = -70
      john.y = john.y +10;
        netsprite.x = john.x + 100;
        netsprite.y = john.y+50;
    }

    if(keyDown(RIGHT_ARROW))
    {
      john.changeAnimation("swimming",swimming) 
  john.x = john.x + 8

  //right facing net instructions
  netsprite.x = john.x + 100;
  netsprite.y = john.y+50;
  netsprite.changeImage('netright',netrightimage);
    }

}
