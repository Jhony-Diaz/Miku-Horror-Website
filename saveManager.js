export class SaveManager{

    constructor(){
        this.saveKey = "movingMikuSave";
        this.defaultState = {
            lives: 3,
            money: 0,
            startingStage: "arrowShooter"
        };
    }

    save(itemToSave) {
        const convertedShit = JSON.stringify(itemToSave)

        localStorage.setItem( this.saveKey, convertedShit);
    }

    hasSave(){

        if(localStorage.getItem(this.saveKey)) return true;

        return false;
    }

    load(){
        if(this.hasSave()) {
            const itemToGet = localStorage.getItem(this.saveKey);

            const convertedShit = JSON.parse(itemToGet);
     
            return convertedShit;
        } else {
            return this.defaultState;

        }
  
    }

    reset(){
        localStorage.removeItem(this.saveKey);
    }
}