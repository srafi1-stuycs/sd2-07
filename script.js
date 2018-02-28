var svg = document.getElementById('vimage');
var lastX, lastY;

function drawCircle(x, y, r) {
    var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttribute('cx', x);
    c.setAttribute('cy', y);
    c.setAttribute('r', r);
    c.setAttribute('fill', 'red');
    c.setAttribute('stroke', 'black');
    svg.appendChild(c);
}

function drawLine(x1, y1, x2, y2) {
    var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', 'black');
    svg.appendChild(line);
}

function connectCircle(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    //console.log(e.offsetX + ' ' + e.offsetY + ' ' + x + ' ' + y);
    
    drawCircle(x, y, 20);

    if (lastX && lastY) {
        drawLine(lastX, lastY, x, y);
    }

    lastX = x;
    lastY = y;
}

function clearAll() {
    svg.innerHTML = '';
    lastX = 0;
    lastY = 0;
}

svg.addEventListener('click', connectCircle);
