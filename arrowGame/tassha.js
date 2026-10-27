import { Character } from "./character.js";
import { weapons } from "./weapons.js";

    const movementKeys = {
        w: false,
        s: false,
        a: false,
        d: false
    }

export class Tassha extends Character {

    constructor(health, positionX, positionY, weapon = weapons.pistol){
        super(health)
        this.weapon = weapon;
        this.positionX = positionX;
        this.positionY = positionY
        this.speed = 5;
        this.movementKeys = movementKeys;
        this.aimAngle = -Math.PI / 2;
    }

    dash(){

    }

    shoot(){

    }

    useAbility(){

    }

    gainAbility(){
        
    }

    move(){
        if(this.movementKeys.w === true){
            this.positionY -= this.speed;
        }

        if(this.movementKeys.s === true){
            this.positionY += this.speed;
        }

        if(this.movementKeys.a === true){
            this.positionX -= this.speed;
        }

        if(this.movementKeys.d === true){
            this.positionX += this.speed;
        }
    }

    aim(cursorX, cursorY){
        const dx = cursorX - this.positionX;
        const dy = cursorY - this.positionY;

        this.aimAngle = Math.atan2(dy, dx);

    }

  

}