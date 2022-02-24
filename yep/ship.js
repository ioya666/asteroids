class Ship {
    constructor() {
        this.pos = createVector(width / 2, height / 2);
        this.r = 20;
        this.heading = 0;
        this.rotation = 0;
        this.vel = createVector(1, 0);
        this.isBoosting = false;
    }
    boosting(b) {
        this.isBoosting = b;
    }
    boost() {
        let force = p5.Vector.fromAngle(this.heading);
        force.mult(0.2);
        this.vel.add(force);
    }
    update() {
        if (this.isBoosting) {
            this.boost();
        }
        this.pos.add(this.vel);
        this.vel.mult(0.99);
    }
    render() {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.heading + PI / 2);
        fill(0);
        stroke(255, 0, 0);
        triangle(-this.r, this.r, this.r, this.r, 0, -this.r - 20);
        push()

        if (this.isBoosting) {
            fill(255, 140, 0)
            stroke(255, 140, 0)
            triangle(this.r, this.r, -this.r + 20, this.r, this.r - 5, this.r + 40)
            triangle(-this.r + 20, this.r, -this.r, this.r, this.r - 30, this.r + 40)
        }
        if (keyIsDown(65)) {
            fill(255, 140, 0)
            stroke(255, 140, 0)
            triangle(this.r, this.r, -this.r + 20, this.r, this.r - 5, this.r + 40)
        }
        if (keyIsDown(68)) {
            fill(255, 140, 0)
            stroke(255, 140, 0)
            triangle(-this.r + 20, this.r, -this.r, this.r, this.r - 30, this.r + 40)
        }
        pop()
        pop();

    }
    hits(asteroid) {
        let d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y)
        if (d < this.r + asteroid.r) {
            return true;
        } else {
            return false;
        }
    }
    edges() {
        if (this.pos.x > width + this.r) {
            this.pos.x = -this.r;
        } else if (this.pos.x < -this.r) {
            this.pos.x = width + this.r;
        }
        if (this.pos.y > height + this.r) {
            this.pos.y = -this.r;
        } else if (this.pos.y < -this.r) {
            this.pos.y = height + this.r;
        }
    }
    setRotation(a) {
        this.rotation = a;
    }
    turn() {
        this.heading += this.rotation;
    }
    death(){
        textSize(80);
        fill('WHITE')
        text('you died',width/2,height/2)
        noLoop()
    }
}