
const canvas = document.getElementById('hangmanCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function drawStage(stage) {
    ctx.strokeStyle = 'green'; 

    switch (stage) {
        case 1:
            ctx.beginPath();
            ctx.moveTo(50, 350);   
            ctx.lineTo(150, 350);
            ctx.moveTo(100, 350);    
            ctx.lineTo(100, 50);
            ctx.stroke();
            break;

        case 2: 
            ctx.beginPath();
            ctx.moveTo(100, 50); 
            ctx.lineTo(250, 50);
            ctx.moveTo(250, 50);  
            ctx.lineTo(250, 100);
            ctx.stroke();
            break;

        case 3: // Голова
            ctx.beginPath();
            ctx.arc(250, 130, 30, 0, Math.PI * 2, true);
            ctx.stroke();
            break;

        case 4: // Тело
            ctx.beginPath();
            ctx.moveTo(250, 160);
            ctx.lineTo(250, 250);
            ctx.stroke();
            break;

        case 5: 
            ctx.beginPath();
            ctx.moveTo(250, 180); 
            ctx.lineTo(200, 220);
            ctx.moveTo(250, 180);   
            ctx.lineTo(300, 220);
            ctx.stroke();
            break;

        case 6: 
            ctx.beginPath();
            ctx.moveTo(250, 250); 
            ctx.lineTo(200, 320);
            ctx.moveTo(250, 250);    
            ctx.lineTo(300, 320);
            ctx.stroke();
            break;

        default:
            console.log("Unknown stage:", stage);
    }
}
