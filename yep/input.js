let inputState = {
    fire: false,
    boost: false, 
    turnL: false,
    turnR: false
};
function keyPressed(){
    console.log(key,keyCode)
    if(keyCode === 32){
        inputState.fire = true;
    }
    if(keyCode === 87){
        inputState.boost = true;
    }
    if(keyCode === 65){
        inputState.turnL = true;
    }
    if(keyCode === 68){
        inputState.turnR = true;
    }
    return true;
};
function keyReleased() {
    ship.setRotation(0)
    if(keyCode === 32){
        inputState.fire = false;
    }
    if(keyCode === 87){
        inputState.boost = false;
    }
    if(keyCode === 65){
        inputState.turnL = false;
    }
    if(keyCode === 68){
        inputState.turnR = false;
    }
    return true;
};