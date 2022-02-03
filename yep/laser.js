class Laser {
    constructor(spos, angle) {
        this.pos = createVector(spos.x, spos.y);
        this.vel = p5.Vector.fromAngle(angle);
        this.vel.mult(12);
    }
    update() {
        this.pos.add(this.vel);
    }
    render() {
        push();
        stroke(255, 255, 0);
        strokeWeight(5);
        point(this.pos.x, this.pos.y);
        pop();
    }
    offscreen() {
        if (this.pos.x > width || this.pos.x < 0) {
            return true;
        }
        if (this.pos.y > height || this.pos.y < 0) {
            return true;
        } return false;
    }
    hits(asteroid) {
        let d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y)
        if (d < asteroid.r) {
            return true;
        } else {
            return false;
        }
    };
}