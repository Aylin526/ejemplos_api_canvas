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
  // NUEVO CÓDIGO DE ARCO Y CÍRCULO
  // ======================================

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.beginPath();
      const x = 25 + j * 50; // Coordenada x
      const y = 25 + i * 50; // Coordenada y
      const radius = 20; // Radio del Arco
      const startAngle = 0; // Punto inicial del Círculo
      const endAngle = Math.PI + (Math.PI * j) / 2; // Punto final del Círculo
      const counterclockwise = i % 2 !== 0; // Dirección del arco

      ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

      if (i > 1) {
        ctx.fillStyle = "#2dd4bf";
        ctx.fill();
      } else {
        ctx.strokeStyle = "#111827";
        ctx.lineWidth = 2;
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