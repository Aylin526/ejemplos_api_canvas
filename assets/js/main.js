function resizeCanvas(canvas, container) {
  const rect = container.getBoundingClientRect();
  canvas.width = Math.floor(rect.width);
  canvas.height = Math.floor(rect.height);
}

function draw() {
  const canvas = document.getElementById("canvas");
  const container = canvas.parentElement;

  if (!canvas.getContext) return;

  resizeCanvas(canvas, container);

  const ctx = canvas.getContext("2d");

  // Limpia todo
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // =============================
  // RECTÁNGULO RELLENO
  // =============================
  ctx.fillStyle = "#2dd4bf";
  ctx.fillRect(25, 25, 100, 100);

  // =============================
  // ARCOS (debajo del cuadrado)
  // =============================
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.beginPath();
      const x = 25 + j * 50; // Coordenada x
      const y = 150 + i * 50; // Coordenada y (debajo del cuadrado)
      const radius = 20; // Radio del Arco
      const startAngle = 0; // Punto inicial del Círculo
      const endAngle = Math.PI + (Math.PI * j) / 2; // Punto final del Círculo
      const counterclockwise = i % 2 !== 0; // En el sentido de las agujas del reloj o en sentido contrario

      ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

      if (i > 1) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
    }
  }

  // =============================
  // CURVAS CUADRÁTICAS (al lado de los arcos)
  // =============================
  ctx.beginPath();
  ctx.moveTo(250, 150);
  ctx.quadraticCurveTo(200, 150, 200, 187.5);
  ctx.quadraticCurveTo(200, 225, 225, 225);
  ctx.quadraticCurveTo(225, 245, 205, 250);
  ctx.quadraticCurveTo(235, 245, 240, 225);
  ctx.quadraticCurveTo(300, 225, 300, 187.5);
  ctx.quadraticCurveTo(300, 150, 250, 150);
  ctx.stroke();

  // =============================
  // CURVAS CÚBICAS (al lado de las cuadráticas)
  // =============================
  ctx.beginPath();
  ctx.moveTo(400, 160); // movido hacia la derecha y más abajo
  ctx.bezierCurveTo(400, 157, 395, 145, 375, 145);
  ctx.bezierCurveTo(345, 145, 345, 182.5, 345, 182.5);
  ctx.bezierCurveTo(345, 200, 365, 222, 400, 240);
  ctx.bezierCurveTo(435, 222, 455, 200, 455, 182.5);
  ctx.bezierCurveTo(455, 182.5, 455, 145, 425, 145);
  ctx.bezierCurveTo(410, 145, 400, 157, 400, 160);
  ctx.fill();

  // =============================
  // LIMPIEZA INTERNA
  // =============================
  ctx.clearRect(45, 45, 60, 60);

  // =============================
  // CONTORNO
  // =============================
  ctx.strokeStyle = "#111827";
  ctx.lineWidth = 3;
  ctx.strokeRect(50, 50, 50, 50);

  // =============================
  // TRIÁNGULO (Path API)
  // =============================
  ctx.beginPath();
  ctx.moveTo(200, 100);
  ctx.lineTo(250, 150);
  ctx.lineTo(250, 50);
  ctx.closePath();

  ctx.fillStyle = "#f97316";
  ctx.fill();

  // =============================
  // NUEVOS TRIÁNGULOS
  // =============================
  ctx.beginPath();
  ctx.moveTo(370, 60);
  ctx.lineTo(450, 60);
  ctx.lineTo(370, 140);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(470, 140);
  ctx.lineTo(470, 60);
  ctx.lineTo(390, 140);
  ctx.closePath();
  ctx.stroke();

  // =============================
  // CARITA (Círculo + Ojos + Boca)
  // =============================
  ctx.beginPath();
  ctx.arc(320, 100, 40, 0, Math.PI * 2, true); // Círculo externo
  ctx.moveTo(350, 100);
  ctx.arc(320, 100, 30, 0, Math.PI, false); // Boca
  ctx.moveTo(310, 85);
  ctx.arc(305, 85, 4, 0, Math.PI * 2, true); // Ojo izquierdo
  ctx.moveTo(335, 85);
  ctx.arc(330, 85, 4, 0, Math.PI * 2, true); // Ojo derecho
  ctx.stroke();
}

function initUI() {
  document.getElementById("year").textContent =
    new Date().getFullYear();

  document
    .getElementById("btnRedraw")
    .addEventListener("click", draw);

  window.addEventListener("resize", draw);

  draw();
}

initUI();