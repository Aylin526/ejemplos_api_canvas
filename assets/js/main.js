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

  // Configura colores base
  ctx.fillStyle = "#2dd4bf";
  ctx.strokeStyle = "#1e293b";
  ctx.lineWidth = 2;

  // Dibuja una cuadrícula de arcos
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.beginPath();
      const x = 25 + j * 80; // posición X separada
      const y = 25 + i * 80; // posición Y separada
      const radius = 30; // radio del arco
      const startAngle = 0;
      const endAngle = Math.PI + (Math.PI * j) / 2;
      const counterclockwise = i % 2 !== 0;

      ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

      // Decide si se rellena o solo se traza
      if (i > 1) {
        ctx.fill();
      } else {
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