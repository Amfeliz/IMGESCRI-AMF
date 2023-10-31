
let angle = 0;
let rotationSpeed = 1;
let canvasWidth = 900;
let canvasHeight = 600;
let sideLength = 150;
let fillColor = 0; // Inicialmente, el color es negro

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(1); // Fondo blanco
  noStroke(); // Sin bordes en la figura
  angleMode(DEGREES); // Cambiar a modo de ángulo en grados
}

function draw() {
  translate(width / 2, height / 2); // Centrar el dibujo en el canvas

  // Calcular las coordenadas de los vértices del rombo
  let x1 = cos(angle) * sideLength;
  let y1 = sin(angle) * sideLength;
  let x2 = sin(angle + 90) * sideLength;
  let y2 = sin(angle + 60) * sideLength;
  let x3 = cos(angle + 180) * sideLength;
  let y3 = sin(angle + 100) * sideLength;
  let x4 = sin(angle + 60) * sideLength;
  let y4 = sin(angle + 270) * sideLength;

  // Dibujar el rombo con el color actual
  fill(fillColor);
  quad(x1, y1, x2, y2, x3, y3, x4, y4);

  // Actualizar el ángulo de rotación
  angle += rotationSpeed;

  // Cambiar el color entre negro (0) y verde (color(0, 255, 0))
  if (fillColor === 0) {
    fillColor = color(175, 100, 220);
  } else {
    fillColor = 0;
  }
}
