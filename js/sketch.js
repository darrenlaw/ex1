console.log ("hello world");

var img, img1, img2, img3, img4;
var bx, by, byspeed;
var a;

function preload () {
	img = loadImage("assets/bannerbg.jpg");
	img1 = loadImage("assets/eyes.png");
	img2 = loadImage("assets/eyelids.png");
	img3 = loadImage("assets/bubbles.png");
	img4 = loadImage("assets/glow.png");
	}

	
function setup () {
	var myCanvas = createCanvas (800,250);
	myCanvas.parent('mySketch'); //link to id mySketch from header tag
	
	bx = 0;
	by = 0;
	bspeed = 0.5;

	
}
	
function draw () {	

	a = mouseY/5;

	image(img, 0, 0);
	image(img1, mouseX/100 - 1, mouseY/100 - 5);
	image(img2, 0, 0);
	image(img3, bx, by);

	by = by + bspeed;
    
   if ((by > 40) || (by < -30)) {
     bspeed = bspeed * -1;
  }
  
  	tint (255, a);
  	image(img4, 0, 0);
  	
  
  
}