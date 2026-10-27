import { Tassha } from "./tassha.js";
import { Character } from "./character.js";

const gameCanvas = /** @type {HTMLCanvasElement} */ (
    document.getElementById("game-canvas")
);
const ctx = gameCanvas.getContext("2d");



const canvaCenterX = Math.round(gameCanvas.width / 2);
const canvaCenterY = Math.round(gameCanvas.height / 2);

const tassha = new Tassha(150, canvaCenterX, canvaCenterY);

const tasshaWidth = 80;
const tasshaHeight = 80;


gameLoop();


document.addEventListener("keydown", (event) => {
    const pressedKey = event.key;
   
    if(tassha.movementKeys[pressedKey] === false){
        tassha.movementKeys[pressedKey] = true;
    }
})

document.addEventListener("keyup", (event) => {
    const pressedKey = event.key;

        if(tassha.movementKeys[pressedKey] === true){
        tassha.movementKeys[pressedKey] = false;
    }
})

gameCanvas.addEventListener("mousemove", (event) => {
    const canvasBounds = gameCanvas.getBoundingClientRect();

    const x = event.clientX - canvasBounds.left;
    const y = event.clientY - canvasBounds.top;

    tassha.aim(x, y);
})


function drawScene(){
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);

    const x = tassha.positionX;
    const y = tassha.positionY;

    const centerX = tassha.positionX + (tasshaWidth / 2);
    const centerY = tassha.positionY + (tasshaHeight / 2);
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(tassha.aimAngle + Math.PI / 2);
    ctx.fillStyle = "purple";
    ctx.beginPath();
    ctx.moveTo(0, -tasshaHeight / 2);
    ctx.lineTo(tasshaWidth * 0.45, tasshaHeight / 2);
    ctx.lineTo(-tasshaWidth * 0.45, tasshaHeight / 2);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
    ctx.fillStyle = "grey";
    ctx.fillRect(20,20,100,200);
}

function gameLoop(){
    tassha.move();
    drawScene();
    requestAnimationFrame(gameLoop);
}




