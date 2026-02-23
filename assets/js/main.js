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
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // ======================================
  // 1️⃣ RECTÁNGULOS
  // ======================================
  ctx.fillStyle = "#2dd4bf";
  ctx.fillRect(25, 25, 100, 100);

  ctx.clearRect(45, 45, 60, 60);

  ctx.strokeStyle = "#111827";
  ctx.lineWidth = 3;
  ctx.strokeRect(50, 50, 50, 50);

  // ======================================
  // 2️⃣ TRIÁNGULO
  // ======================================
  ctx.beginPath();
  ctx.moveTo(200, 100);
  ctx.lineTo(250, 150);
  ctx.lineTo(250, 50);
  ctx.closePath();
  ctx.fillStyle = "#f97316";
  ctx.fill();

  // ======================================
  // 3️⃣ ARCOS MÚLTIPLES
  // ======================================
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.beginPath();
      const x = 400 + j * 50; // desplazamos a la derecha para no chocar con figuras anteriores
      const y = 25 + i * 50;
      const radius = 20;
      const startAngle = 0;
      const endAngle = Math.PI + (Math.PI * j) / 2;
      const counterclockwise = i % 2 !== 0;

      ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

      if (i > 1) {
        ctx.fillStyle = "#60a5fa"; // azul suave
        ctx.fill();
      } else {
        ctx.strokeStyle = "#1e3a8a";
        ctx.stroke();
      }
    }
  }
}

function initUI() {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("btnRedraw").addEventListener("click", draw);
  window.addEventListener("resize", draw);
  draw();
}

initUI();