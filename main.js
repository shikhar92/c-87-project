canvas=new fabric.Canvas("myCanvas");
px=10;
py=10;
blockw=30;
blockh=30;
pobject="";
bobject="";
function playerupdate()
{
fabric.Image.fromURL("player.png",function (Img)
{
pobject=Img;
pobject.scaleToWidth(150);
pobject.scaleToHeight(150);
pobject.set({
    top:py,left:px
});
canvas.add(pobject);
}
);
}
function blockupdate(getImage)
{
fabric.Image.fromURL(getImage,function (Img)
{
bobject=Img;
bobject.scaleToWidth(blockw);
bobject.scaleToHeight(blockh);
bobject.set({
top:py,left:px
}
);
canvas.add(bobject);
}
    );
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
keypress=e.keyCode;
if(keypress=='38'){
up ();
console.log("up");
}
if(keypress=='40'){
    down ();
    console.log("down");
    }
if(keypress=='37'){
     left  ();
    console.log("left");
        }
 if(keypress=='39'){
  right ();
  console.log("right");
            }
if(keypress=='66'){
blockupdate ("br.png");
console.log("b");
}
if(keypress=='71'){
    blockupdate ("gr.png");
    console.log("g");
    }
    if(keypress=='80'){
        blockupdate ("pr.png");
        console.log("p");
        }
        if(keypress=='82'){
            blockupdate ("rr1.png");
            console.log("r");
            }
            if(keypress=='89'){
                blockupdate ("yr.png");
                console.log("y");
                }
                
}