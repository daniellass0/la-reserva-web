const btnEnviar = document.getElementById("btnEnviar");

if (btnEnviar) {
  btnEnviar.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const lista = document.getElementById("listaComentarios");

    if (!nombre || !mensaje) {
      alert("Por favor completa todos los campos antes de enviar tu comentario.");
      return;
    }

    const nuevo = document.createElement("div");
    nuevo.classList.add("comentario");
    nuevo.innerHTML = `
      <h4>${nombre}</h4>
      <p>${mensaje}</p>
    `;

    lista.appendChild(nuevo);

    document.getElementById("nombre").value = "";
    document.getElementById("mensaje").value = "";
  });
}
