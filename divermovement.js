function diver_moves()
{

    if(keyDown(LEFT_ARROW))
    {
      john.changeAnimation("swimmingleft",swimmingleft)
      netsprite.changeImage('netleft',netimage)
      john.x = john.x - 8
      netsprite.x = john.x - 60;
      netsprite.y = john.y
      
    }
    
    //john.debug =  true;
    //netsprite.debug = true;
    
    if(keyDown(UP_ARROW))
    {
      john.angle = 70
      john.y = john.y -10;
        //netsprite.x = john.x + 100;
        netsprite.y = john.y+15;
    }
    
    if(keyDown(DOWN_ARROW))
    {
      john.angle = -70
      john.y = john.y +10;
        //netsprite.x = john.x + 100;
        netsprite.y = john.y+30;
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
