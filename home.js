
import { Health } from "./health.js";
import { SaveManager } from "./saveManager.js";
import { Miku } from "./miku.js";

const dangerZones = document.querySelectorAll(".danger-zones");
const heartsDiv = document.querySelector(".hearts");
const currentPage = document.body.dataset.page;
const pageTest = document.getElementById("page-test");
const mikuContainer = document.querySelector(".miku-container");

const save = new SaveManager();
const gameState = save.load();

const hearts = new Health(gameState.lives);
const mikuTheMonster = new Miku(gameState.startingStage);
mikuTheMonster.gameStart(isMikuHere);


window.addEventListener("mousemove", (event)=> {

    let mouseXCord = event.clientX;
    let mouseYCord = event.clientY;

dangerZones.forEach(zone => {

    const bounds = zone.getBoundingClientRect();

    if(mouseXCord > bounds.left && mouseXCord < bounds.right && mouseYCord < bounds.bottom &&  mouseYCord > bounds.top) {
        console.log("Game Over");
    }

});   
})


displayHearts();
isMikuHere();
save.save(gameState);





function displayHearts(){
    const currentLives = hearts.currentLives();

   

    while(heartsDiv.children.length < currentLives ) {
        const heartImg = document.createElement("img");
        heartImg.src = "Assets/HmtlStuff/PngItem_1151653.png";

        heartsDiv.append(heartImg);
    }

}


function isMikuHere(){
    gameState.startingStage = mikuTheMonster.returnScene();
    save.save(gameState);

    if(mikuTheMonster.returnScene() === currentPage) {
        mikuContainer.classList.remove("hidden");
    } else{
        mikuContainer.classList.add("hidden");
    }
}


