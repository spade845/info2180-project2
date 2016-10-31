// attempted to create a timer as my special feature


window.onload = function(){
  var startTime = new Date();        //Start the clock!
    window.onbeforeunload = function()        //When the user leaves the page(closes the window/tab, clicks a link)...
    {
        var endTime = new Date();        //Get the current time.
        var timeSpent=(endTime - startTime);        //Find out how long it's been.
        alert(timeSpent);        //Pop up a window with the time spent in microseconds.
    }
 var ShuffleP;
 var shuffles = [];
 var ShuffleT = 1000;
 var mypuzz = document.getElementById("puzzlearea");
 var nullT = 300;
 var nullL = 300;
 var oldT;
 var oldL;
 var tile = mypuzz.children;
 var postop = 0;
 var posl = 0;
 var bgl = 0;
 var bgt = 0;
 
 
 for(var i=0; i < tile.length; i++){
  tile[i].className = "puzzlepiece";
  tile[i].style.top = postop + "px";
  tile[i].style.left = posl + "px";
  tile[i].style.backgroundPosition = bgl + "px " + bgt + "px";
  tile[i].onclick= move;
  tile[i].onmouseover= movable;

  if(posl < 300){
   posl = posl + 100;
   bgl = bgl - 100;
  }
  else{
   posl = 0;
   bgl = 0;
   postop = postop + 100;
   bgt = bgt - 100;
  } 
 }
 function getStyle(top, left){
  for(var i =0; i < tile.length; i++){
   if(tile[i].style.top==top && tile[i].style.left==left){
    ShuffleP = tile[i];
    return ShuffleP;  
   }
  }
 }
 function move(){
  oldT = parseInt(this.style.top);
  oldL = parseInt(this.style.left);
  if (oldT == nullT && oldL == (nullL-100) || oldT == nullT && oldL == (nullL+100) || oldT == (nullT-100) && oldL == nullL || oldT == (nullT+100) && oldL == nullL){
   this.style.top = nullT + "px";
   this.style.left = nullL + "px";
   nullT = oldT;
   nullL = oldL;
  }
 }

 

 function Shuffle(){
  for(var c = 0; c < ShuffleT; c++){
   var choice = Math.floor (Math.random () * 4);
   console.log(choice);
   if ( choice == 0) {
    (getStyle((nullT-100)+"px", nullL+"px"))|| getStyle((nullT+100)+"px", nullL+"px");
    oldT = parseInt(ShuffleP.style.top);
     oldL = parseInt(ShuffleP.style.left);
     ShuffleP.style.top = nullT + "px";
     ShuffleP.style.left = nullL + "px";
    nullT = oldT;
     nullL = oldL;
    }
   else if ( choice == 1) {
     (getStyle(nullT+"px", (nullL-100)+"px")) || getStyle(nullT+"px", (nullL + 100)+"px");
    oldT = parseInt(ShuffleP.style.top);
    oldL = parseInt(ShuffleP.style.left);
    ShuffleP.style.top = nullT + "px";
    ShuffleP.style.left = nullL + "px";
    nullT = oldT;
    nullL = oldL;
   }
   else if ( choice == 2) {
    getStyle((nullT+100)+"px", nullL+"px") || (getStyle((nullT-100)+"px", nullL+"px"));
    oldT = parseInt(ShuffleP.style.top);
    oldL = parseInt(ShuffleP.style.left);
    ShuffleP.style.top = nullT + "px";
    ShuffleP.style.left = nullL + "px";
    nullT = oldT;
    nullL = oldL;
   }
    else {
    getStyle(nullT+"px", (nullL + 100)+"px") || (getStyle(nullT+"px", (nullL-100)+"px"));
    oldT = parseInt(ShuffleP.style.top);
    oldL = parseInt(ShuffleP.style.left);
    ShuffleP.style.top = nullT + "px";
    ShuffleP.style.left = nullL + "px";
    nullT = oldT;
    nullL = oldL;
   }
  } 
 }
 function movable(){
  oldT = parseInt(this.style.top);
  oldL = parseInt(this.style.left);
  if (oldT == nullT && oldL == (nullL-100) || oldT == nullT && oldL == (nullL+100) || oldT == (nullT-100) && oldL == nullL || oldT == (nullT+100) && oldL == nullL){
   $(this).addClass('movablepiece'); 
  }
  else{
   $(this).removeClass("movablepiece");
  }
 }

 document.getElementById("controls").onclick = Shuffle; 

}