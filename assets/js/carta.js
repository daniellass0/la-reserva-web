function calcularTotal() {
  const tipo = parseFloat(document.getElementById("tipoLicor").value);
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const resultado = document.getElementById("resultado");

  if (!cantidad || cantidad <= 0 || isNaN(tipo)) {
    resultado.innerHTML = "⚠️ Selecciona un licor y una cantidad válida.";
    return;
  }

  const subtotal = tipo * cantidad;
  const iva = subtotal * 0.19;
  const total = subtotal + iva;

  resultado.innerHTML = `
    <p>Subtotal: $${subtotal.toLocaleString()}</p>
    <p>IVA (19%): $${iva.toLocaleString()}</p>
    <h3>Total a pagar: $${total.toLocaleString()}</h3>
  `;
}

function mostrarImagen() {
  const select = document.getElementById("tipoLicor");
  const selected = select.options[select.selectedIndex];
  const imgSrc = selected.getAttribute("data-img");
  const imgLicor = document.getElementById("imgLicor");

  if (imgSrc) {
    imgLicor.src = imgSrc;
  } else {
    imgLicor.src = "assets/img/carta/default.png";
  }
}
