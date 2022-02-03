let ship;
let asteroids = [];
let lasers = []
let right = false;
let left = false;
let boost = false;
let shoot = false;

function setup(){
    createCanvas(windowWidth, windowHeight);
    ship = new Ship();
    for(let i = 0; i < 10; i++){
    asteroids.push(new Asteroid());
    }
}
function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}
function draw(){
    background(0);
    keyIsDown(65) === true?(ship.setRotation(-0.05)):0;
    keyIsDown(68) === true?(ship.setRotation(0.05)):0;
    keyIsDown(87) === true?(ship.boosting(true)):0;
    keyIsDown(32) === true?(lasers.push(new Laser(ship.pos,ship.heading))):0;
    for(let i = 0; i<asteroids.length; i++){
        asteroids[i].render();
        asteroids[i].update();
        asteroids[i].edges();
    }
    for(let i = lasers.length-1; i>= 0; i--){
        lasers[i].render();
        lasers[i].update();
        if(lasers[i].offscreen()){
            lasers.splice(i,1);
        } else {
        for (let j = asteroids.length-1; j>=0;j--)
            if (lasers[i].hits(asteroids[j])){
                if (asteroids[j].r > 16){
                let newAsteroids=asteroids[j].breakup();
                asteroids=asteroids.concat(newAsteroids);
                }
                asteroids.splice(j,1);
                lasers.splice(i,1);
                break;
            }
        } 
    } 
    

    ship.render();
    ship.turn();
    ship.update();
    ship.edges()
}
function keyReleased(){
    ship.setRotation(0);
    ship.boosting(false);
}