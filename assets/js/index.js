const imagenes = [
  "assets/img/fondos/foto1.jpeg",
  "assets/img/fondos/foto2.jpeg",
  "assets/img/fondos/foto3.jpeg",
  "assets/img/fondos/foto4.jpeg"
];

let index1 = 0;
let index2 = 1;

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

// Cambiar imágenes
function cambiarImagenes() {
  index1 = (index1 + 1) % imagenes.length;
  index2 = (index2 + 1) % imagenes.length;

  img1.src = imagenes[index1];
  img2.src = imagenes[index2];
}

//cada 5 segundos cambia
setInterval(cambiarImagenes, 5000);

//cambia si se hace clic
img1.addEventListener("click", cambiarImagenes);
img2.addEventListener("click", cambiarImagenes);
