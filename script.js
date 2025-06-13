function cambiarFondo() {
  const colores = ["#fff0f5", "#ffe4e1", "#fce4ec", "#fff8dc"];
  document.body.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
}

function toggleMusica() {
  const audio = document.getElementById("musica");
  audio.paused ? audio.play() : audio.pause();
}

// ✅ FUNCIÓN ACTUALIZADA para enviar mensaje a tu WhatsApp
function mostrarDedicatoria(e) {
  e.preventDefault();
  const mensaje = document.querySelector("textarea").value.trim();
  if (!mensaje) return;

  // 🔴 CAMBIA ESTE NÚMERO a tu número real de WhatsApp (sin + ni espacios)
  const numero = "573125587823"; // ← ejemplo de Colombia

  const texto = encodeURIComponent("💌 Mi amor me escribió: " + mensaje);
  const url = `https://wa.me/${numero}?text=${texto}`;

  // Abre WhatsApp Web o app
  window.open(url, "_blank");

  document.getElementById("mensajeMostrado").innerText = "Tu mensaje ha sido enviado por WhatsApp ❤️";
  e.target.reset();
}

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 500);

setInterval(() => {
  const petalo = document.createElement("div");
  petalo.className = "petalo";
  petalo.style.left = Math.random() * window.innerWidth + "px";
  petalo.style.animationDuration = (5 + Math.random() * 5) + "s";
  document.body.appendChild(petalo);
  setTimeout(() => petalo.remove(), 10000);
}, 300);

function actualizarCuenta() {
  const destino = new Date("2025-09-04");
  const ahora = new Date();
  const diferencia = destino - ahora;
  if (diferencia <= 0) {
    document.getElementById("cuentaRegresiva").innerText = "¡Ya llegó nuestro día especial! ❤️";
    return;
  }
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);
  document.getElementById("cuentaRegresiva").innerText =
    `${dias} días, ${horas} horas, ${minutos} min, ${segundos} seg`;
}
setInterval(actualizarCuenta, 1000);
actualizarCuenta();

document.querySelectorAll(".galeria img, .slider img").forEach(img => {
  img.addEventListener("click", () => {
    document.getElementById("lightbox-img").src = img.src;
    document.getElementById("lightbox").style.display = "flex";
  });
});

function cerrarLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
