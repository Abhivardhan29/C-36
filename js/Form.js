 class Form{
     constructor(){}
     
  display(){
      var title = createElement('h2') ;
      title.html("Car Racing Game");
      title.position(130,0);

      var input=createInput("Enter Your Name");
      input.position(200,160);

      var button = createButton("Begin");
      button.position(250,200);

      button.mousePressed(function(){
      button.hide();
      input.hide();

      var name = input.value();
      playerCount+=1;
      player.update(name);
      player.updateCount(playerCount);

      var greeting = createElement('h2');
      greeting.html("Hello "+name)
      greeting.position(130,160);
      })
      
  }  
 }