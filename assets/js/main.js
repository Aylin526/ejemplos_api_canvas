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

  // Triángulo relleno
  ctx.beginPath();
  ctx.moveTo(370, 60);
  ctx.lineTo(450, 60);
  ctx.lineTo(370, 140);
  ctx.fill();

  // Triángulo contorneado
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