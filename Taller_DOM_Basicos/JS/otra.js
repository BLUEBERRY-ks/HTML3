function calcular() {
  let invitados = parseInt(document.getElementById("numero_invitados").value);
  let por_comida = parseInt(document.getElementById("por_comida").value);
  let por_bebida = parseInt(document.getElementById("por_bebida").value);
  let por_decoracion = parseInt(document.getElementById("costo_decoracion").value);
  let costo_musica_animacion = parseInt(document.getElementById("costo_musica_animacion").value);
  let propina_personal = parseFloat(document.getElementById("propina").value);

  let comida_total = invitados * por_comida;
  let bebida_total = invitados * por_bebida;
  let subtotal = comida_total + bebida_total + por_decoracion + costo_musica_animacion;
  let propina = subtotal * (propina_personal / 100);
  let total_general = subtotal + propina;
  let costo_por_invitado = total_general / invitados;

  document.getElementById("comida_total").textContent = comida_total.toLocaleString("es-CO");
  document.getElementById("bebida_total").textContent = bebida_total.toLocaleString("es-CO");
  document.getElementById("decoracion").textContent = por_decoracion.toLocaleString("es-CO");
  document.getElementById("musica").textContent = costo_musica_animacion.toLocaleString("es-CO");
  document.getElementById("subtotal").textContent = subtotal.toLocaleString("es-CO");
  document.getElementById("propina_valor").textContent = propina.toLocaleString("es-CO");
  document.getElementById("total_general").textContent = total_general.toLocaleString("es-CO");
  document.getElementById("costo_por_invitado").textContent = costo_por_invitado.toLocaleString("es-CO");
}