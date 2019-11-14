/*async function colorReturn() {
let canvas = document.getElementById('center');
let ctx = canvas.getContext('2d'); 
let myColor = 'red';

document.getElementById('color').oninput = function () {
    myColor = this.value;
}

canvas.onmousedown = function(event) {
    canvas.onmousemove = function(event) {
        let x = event.offsetX;
        let y = event.offsetY;
        ctx.fillRect(x-5, y-5, 10, 10);
        ctx.fillStyle = myColor;
        ctx.fill();
    }
    canvas.onmouseup = function(){
      canvas.onmousemove = null; 
 }
}
}
*/

async function canvas1() {
    let rectangles = await fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json')
    let myRectangles = await rectangles.json();
 
    let canvas = document.getElementById('center');
        context  = canvas.getContext('2d');
        width = canvas.width,
        height = canvas.height;

    for(i = 0; i <= width - width/4; i += width/4)
    for(j = 0; j <= height - height/4; j += height/4)
    {   
        let color = myRectangles[i/(width/4)][j/(width/4)]
        context.beginPath();
        context.fillStyle = `#${color}`;
        context.fillRect(j, i, width/4, width/4);
        
    }
}

 async function canvas2() {

    let LogoCW = await fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json')
    let myLogoCW = await LogoCW.json();
    
    let canvas = document.getElementById('center');
        context  = canvas.getContext('2d'),
        width = canvas.width,
        height = canvas.height;

    for(i = 0; i <= width - width/32; i += width/32)
    for(j = 0; j <= height - height/32; j += height/32)
    {   
        let color = myLogoCW[i/(width/32)][j/(width/32)]
        context.beginPath();
        context.fillStyle = `rgba(${color[0]},${color[1]},${color[2]},${Math.ceil(color[3]/255)})`;
        context.fillRect(j, i, width/32, width/32);
    }
}

function canvas3(){
    let canvas = document.getElementById('center');
    let ctx = canvas.getContext('2d');
    let img = document.getElementById('img');

    img.src = 'img/RSS.png';
    img.width = '512';
    img.height = '512';
    ctx.drawImage(img, 0, 0, 512, 512);
}



