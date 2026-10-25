export class Health {

    constructor(startingLives = 3){
        this.lives = startingLives;
    
    }

        takeDamage(){
            this.lives--;
        }

        heal(amount){
            this.lives += amount;
        }

        currentLives(){
            return this.lives;
        }
}