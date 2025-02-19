const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Log canvas size to check if it's being modified
console.log("Canvas width:", canvas.width);
console.log("Canvas height:", canvas.height);

// Load background image
const background = new Image();
background.src = "images/background.JPG";

background.onload = function() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    drawForeground();
};

function drawForeground() {
    const foreground1 = new Image();
    foreground1.src = "images/preview.png";
    
    const foreground2 = new Image();
    foreground2.src = "images/foreground2.png";

    foreground1.onload = function() {
        ctx.drawImage(foreground1, -30, 650, 200, 200);
    };
    
    foreground2.onload = function() {
        ctx.drawImage(foreground2, 0, 200, 700, 700);
        drawText();
    };
}

function drawText() {
    ctx.font = "bold 50px Lucida Console";
    ctx.fillStyle = "white";
    ctx.fillText("Ashanti Benons", 10, 50);
    ctx.fillText("A Single Flower", 10, 120);
}