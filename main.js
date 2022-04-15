var canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
var lineColor="yellow";
var crntmousex=0;
var crntmousey=0;
var startmousex=0;
var startmousey=0;
var mouseevent=" "
linewidth=2;


canvas.addEventListener("mousedown" ,mymousedown)
    function mymousedown(e){
        mouseevent="mousedown";
    }

    canvas.addEventListener("mouseup" ,mymouseup)
    function mymouseup(e){
        mouseevent="mouseup";
    }

    canvas.addEventListener("mousemove" ,mymousemove)
    function mymousemove(e){
        crntmousex=e.clientX-canvas.offsetLeft;
        crntmousey=e.clientY-canvas.offsetTop;
        if(mouseevent=="mousedown"){
            ctx.beginPath();
            ctx.lineWidth=linewidth;
            ctx.strokeStyle="yellow";
            ctx.arc(crntmousex,crntmousey,50,0,2*Math.PI);
            console.log("strart xandy="+startmousey,startmousex, "crnt xandy="+crntmousey,crntmousex);
            ctx.stroke();
           
          
    
        }
    }
    canvas.addEventListener("mouseleave" ,mymouseleave)
    function mymouseleave(e){
        mouseevent="mouseleave";
    }

    crntmousex=startmousex;
    crntmousey=startmousey;
    