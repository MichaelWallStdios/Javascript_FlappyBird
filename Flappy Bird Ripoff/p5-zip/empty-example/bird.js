function Bird() {
    //Bird Placement
    this.y = height/2;
    this.x = 64;
    //Physics 
    this.gravity = 0.6;
    this.lift = -20;
    this.velocity = 0;
    //Show Bird
    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, 32, 32);
    }
    //Lift Function
    this.up = function() {
        this.velocity += this.lift;

    }
    //Update Physics and Bird 
    this.update = function()    {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;
    }

    //Height Limits    
    if (this.y > height) {
        this.y = height;
        this.velcity = 0;
         }
    if (this.y < 0) {
    this.y = 0;
    this.velocity = 0;
}
    }

        
    
     