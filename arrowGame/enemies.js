import { Character } from "./character.js";

const formation = {
    attack: "attack",
    retreat: "retreat",
    search: "search",
    patrol: "patrol"
}

export class Enemies extends Character{

    constructor(health){
        super(health)
        this.hasLineOfSight = false;

    }

    attack(){

    }

    changeFormation(){

    }


}