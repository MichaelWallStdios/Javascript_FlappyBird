var bird;
var pipes = [];
function setup() {
    createCanvas(600, 600);
    bird = new Bird();
    pipes.push(new Pipe());
}

function draw() {
  background(0);

      for (var i = pipes.length-1; i >= 0; i--) {
    	pipes[i].show;
    	pipes[i].update;

    	//if (pipes[i].hits(Bird)) {
    	//	console.log("HIT");
    }

    	

    if (pipes[i].offscreen()) {
    		pipes.splice(i, 1);
    	
    

    bird.update();
    bird.show();

    if (frameCount % 80 == 0){
    	pipes.push(new Pipe());
    }
}


    
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        bird.up();
        console.log("SPACE");
        
    }
}    


        
