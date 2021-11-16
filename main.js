roverX=10;
roverY=10;
valurspeed=10;
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
function add(){
background_ing_tag= new Image()
background_ing_tag.onload= uploadBackground;
background_ing_tag.src="mars.jpg"

rover_ing_tag= new Image()
rover_ing_tag.onload= uploadrover;
rover_ing_tag.src="rover.png"
}

 function uploadBackground(){
ctx.drawImage(background_ing_tag,0,0,canvas.width, canvas.height)
 }

 function  uploadrover(){
    ctx.drawImage(rover_ing_tag,roverX,roverY,100,100)
     }
     window.addEventListener("keydown", key_down)
     function key_down(e){
         keyPressed=e.keyCode;
         console.log(keyPressed)
         valurspeed=Number( document.getElementById("Valll").value )
         if(keyPressed== "38"){
        up()
          console.log("up")   
         }
         if(keyPressed== "40"){
            down()
              console.log("down")   
             }
             if(keyPressed== "37"){
                left()
                  console.log("left")   
                 }
                 if(keyPressed== "39"){
                    right()
                      console.log("right")   
                    }
         
     }
     function up()
    {
      if(roverY >= 0){
        roverY= roverY - valurspeed; 
        uploadBackground();
        uploadrover();
      }
    }
    function down()
    {
      if(roverY <= canvas.height-100){
        roverY= roverY + valurspeed; 
        uploadBackground();
        uploadrover();
      }
    }
    function left()
    {
      if(roverX >= 0){
        roverX= roverX - valurspeed; 
        uploadBackground();
        uploadrover();
      }
    }
    function right()
    {
      if(roverX <= canvas.width-100){
        roverX= roverX + valurspeed; 
        uploadBackground();
        uploadrover();
      }
    }