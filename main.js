var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function newImage()
{                                                            

    fabric.Image.fromURL('BirthdayImage.jpg', function(img) {
        blockImageObject = img;

        blockImageObject.scaleTowidth(700);
        blockImageObject.scaleToHeight(570);
        blockImageObject.set({
        top:0,
        left:0
        })
        canvas.add(blockImageObject)
      
    });
    
   
}

function playSound(){
  x.play();
}
	
