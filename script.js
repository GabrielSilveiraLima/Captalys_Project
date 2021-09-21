let canvas = document.querySelector('.board');
let pencil = canvas.getContext('2d');
pencil.fillStyle = "red";
boxsize = 20;

var bw = 500;
var bh = 500;

function drawBoard(){
    for (var x = 0; x <= bw; x += 20) {
        pencil.moveTo(0.5 + x, 0);
        pencil.lineTo(0.5 + x, bh);
    }

    for (var x = 0; x <= bh; x += 20) {
        pencil.moveTo(0, 0.5 + x);
        pencil.lineTo(bw, 0.5 + x);
    }
    pencil.strokeStyle = "white";
    pencil.stroke();
}

drawBoard();

// Coordenadas mouse
let cordX, cordY

function mousePosition() {
    
    let move = function() {
        canvas.addEventListener('mousemove', function(e) {
            cordX = e.offsetX;
            cordY = e.offsetY;
        })

        drawClick()
    }

    canvas.addEventListener('mouseover', function() {
        move();
    })

    canvas.addEventListener('mouseleave', function() {
        window.removeEventListener('mousemove', move())
    })
}

mousePosition()

function drawClick() {
    canvas.addEventListener('click', function() {
        pencil.fillRect(cordX, cordY, boxsize, boxsize);
    })
}