const mikuPng = {
    image: "Assets/Miku-heads/calm-miku-head.png",
    
}

export class Miku {


    constructor(startingPage = "arrowShooter") {
        this.rageMeter;
        this.currentStage = startingPage;
        this.allScenes = ["arrowShooter", "puzzle", "media", "shop"];
         this.sceneIndex = this.allScenes.indexOf(startingPage);
        this.timerId;
    }

    gameStart(isMikuHere){
        this.startMovementTimer(isMikuHere);

    }

    returnScene(){
        return this.allScenes[this.sceneIndex];
    }


    moveRight(){
     
      const nextIndex = (this.sceneIndex + 1) % this.allScenes.length;
      this.sceneIndex = nextIndex;

    }

    moveLeft(){
        const previousIndex = (this.sceneIndex - 1 + this.allScenes.length) % this.allScenes.length;
        this.sceneIndex = previousIndex;

    }

    startMovementTimer(isMikuHere){
        this.timerId = setInterval(() => {
            this.moveRandom();
            isMikuHere();
        }, 40000)
    }

    moveRandom(){
       let move =  Math.floor(Math.random() * 3) 

       if(move == 1){
         this.moveLeft();
       } 
       
       if(move == 2) {
            this.moveRight();
       }
    }

    gameEnd() { 
    clearInterval(this.timerId);
}       
    
}