canvas=new fabric.Canvas("myCanvas");
block_width=30;
block_height=30;
player_x=40;
player_y=40;
player_object="";
block_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img)
    {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
           left:player_x
        });
        canvas.add(player_object);
    });

}

function block_update(getImage){
    fabric.Image.fromURL(getImage,function(Img)
    {
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
           left:player_x
        });
        canvas.add(block_object);
    });

}
 window.addEventListener("keydown" , my_keydown);

 function my_keydown(e){
     keypress=e.keyCode;
     console.log(keypress);

     if(e.shiftKey && keypress=="80"){
       block_width=block_width+10;
       block_height=block_height+10;
       document.getElementById("width").innerHTML=block_width;
       document.getElementById("height").innerHTML=block_height;
     }

     
     if(e.shiftKey && keypress=="77"){
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("width").innerHTML=block_width;
        document.getElementById("height").innerHTML=block_height;
 
 
      }

      if(keypress=="37"){
          left();
          console.log("left is pressed");
      }

      if(keypress=="38"){
        up();
        console.log("up is pressed");
    }

    if(keypress=="39"){
        right();
        console.log("right is pressed");
    }

    if(keypress=="40"){
        down();
        console.log("down is pressed");
    }

    if(keypress=="67"){
        block_update("cloud.jpg");
        console.log("c is pressed");
    }

    if(keypress=="69"){
        block_update("dark_green.png");
        console.log("e is pressed");
    }

    if(keypress=="71"){
        block_update("ground.png");
        console.log("g is pressed");
    }

    if(keypress=="74"){
        block_update("light_green.png");
        console.log("j is pressed");
    }

    if(keypress=="76"){
        block_update("roof.jpg");
        console.log("l is pressed");
    }

    if(keypress=="78"){
        block_update("trunk.jpg");
        console.log("n is pressed");
    }

    if(keypress=="81"){
        block_update("unique.png");
        console.log("q is pressed");
    }

    if(keypress=="83"){
        block_update("wall.jpg");
        console.log("s is pressed");
    }

    if(keypress=="84"){
        block_update("yellow_wall.png");
        console.log("t is pressed");
    }
 }

function up(){
    if(player_y>=0){
        player_y=player_y-block_height;
        console.log("player_y= "+player_y );
        console.log("block_height= "+block_height); 
        canvas.remove(player_object);
        player_update();
    }
  
}

function down(){
    if(player_y<=460){
        player_y=player_y+block_height;
        console.log("player_y= "+player_y );
        console.log("block_height= "+block_height); 
        canvas.remove(player_object);
        player_update();
    }
  
}

function left(){
    if(player_x>=0){
        player_x=player_x-block_height;
        console.log("player_x= "+player_x );
        console.log("block_height= "+block_height); 
        canvas.remove(player_object);
        player_update();
    }
  
}

function right(){
    if(player_x<=860){
        player_x=player_x+block_height;
        console.log("player_x= "+player_x );
        console.log("block_height= "+block_height); 
        canvas.remove(player_object);
        player_update();
    }
  
}