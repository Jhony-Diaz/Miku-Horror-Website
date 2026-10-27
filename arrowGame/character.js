export class Character {
    constructor(health){
        this.health = health;
        this.isReloading = false;

    }

    takeDamage(amount){
        this.health -= amount;
    }

    die(){

    }
    
}