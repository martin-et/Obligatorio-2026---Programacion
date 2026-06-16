const txtNombre = document.querySelector("#txtNombre");
const txtApellido = document.querySelector("#txtApellido");
const txtCorreo = document.querySelector("#txtEmail");
const txtMensaje = document.querySelector("#txtMensaje");
const btnForm = document.querySelector("#btnform");

btnForm.addEventListener("click", enviarForm);

function enviarForm() {
  let nombre = txtNombre.value;
  let apellido = txtApellido.value;
  let correo = txtCorreo.value.toLowerCase();
  let mensaje = txtMensaje.value;

  if (nombre.trim() == "" || !isNaN(nombre)) {
    document.querySelector(".errorNombre").textContent =
      `Ingrese un nombre valido`;
  } else {
    document.querySelector(".errorNombre").textContent = "";
  }
  if (apellido.trim() == "" || !isNaN(apellido)) {
    document.querySelector(".errorApellido").textContent =
      `Ingrese un apellido valido.`;
  } else {
    document.querySelector(".errorApellido").textContent = "";
  }
 
}
