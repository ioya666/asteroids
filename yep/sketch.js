let ship;
let asteroids = [];
let lasers = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    ship = new Ship();
    for (let i = 0; i < 10; i++) {
        asteroids.push(new Asteroid());
    }
}

function draw() {
    background(0);
    if(inputState.fire && !firerate){
        lasers.push(new Laser(ship.pos,ship.heading));
        firerate=true;
    }
    if(inputState.boost){
        ship.boosting(true)
    } else{
        ship.boosting(false)
    }
    if(inputState.turnL){
        ship.setRotation(-0.05)
    }
    if(inputState.turnR){
        ship.setRotation(0.05)
    }
    
    for (let i = 0; i < asteroids.length; i++) {
        if(ship.hits(asteroids[i])){
            console.log('GAMEOVER')
        }
        asteroids[i].render();
        asteroids[i].update();
        asteroids[i].edges();
    }
    
    for (let i = lasers.length - 1; i >= 0; i--) {
        lasers[i].render();
        lasers[i].update();
        if (lasers[i].offscreen()) {
            lasers.splice(i, 1);
        } else {
            for (let j = asteroids.length - 1; j >= 0; j--) {
                if (lasers[i].hits(asteroids[j])) {
                    if (asteroids[j].r > 16) {
                        let newAsteroids = asteroids[j].breakup();
                        asteroids = asteroids.concat(newAsteroids);
                        
                    }
                    asteroids.splice(j, 1);
                    lasers.splice(i, 1);
                    break;
                }
            }
        }
    }
    ship.render();
    ship.turn();
    ship.update();
    ship.edges()
}
