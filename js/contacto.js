const txtNombre = document.querySelector("#txtNombre");
const txtApellido = document.querySelector("#txtApellido");
const txtCorreo = document.querySelector("#txtEmail");
const txtMensaje = document.querySelector("#txtMensaje");
const mensajeErrorCorreo = document.querySelector(".errorCorreo");
const caracteresIngresados = document.querySelector("#contadorCaracteres");
const btnForm = document.querySelector("#btnform");
const formulario = document.querySelector("#formularioContacto");

formulario.addEventListener("submit", enviarForm);
txtMensaje.addEventListener("keyup", () => {
  let mensaje = txtMensaje.value;
  caracteresIngresados.textContent = mensaje.length;

  if (mensaje.length == 250) {
    txtMensaje.disabled = true;
  }
});

function enviarForm(e) {
  e.preventDefault();
  document.querySelector(".errorNombre").textContent = "";
  document.querySelector(".errorApellido").textContent = "";
  mensajeErrorCorreo.textContent = "";

  let nombre = txtNombre.value;
  let apellido = txtApellido.value;
  let correo = txtCorreo.value.toLowerCase();
  let mensaje = txtMensaje.value;

  let validacion = false;

  if (nombre.trim() == "" || !isNaN(nombre)) {
    document.querySelector(".errorNombre").textContent =
      `Ingrese un nombre valido`;
    validacion = true;
  }
  if (apellido.trim() == "" || !isNaN(apellido)) {
    document.querySelector(".errorApellido").textContent =
      `Ingrese un apellido valido.`;
    validacion = true;
  }
  if (!correo.includes("@")) {
    mensajeErrorCorreo.textContent = `No ingreso el arroba`;
    validacion = true;
  } else if (!correo.split("@")[1].includes(".com")) {
    mensajeErrorCorreo.textContent = `Ingrese un punto despues del arroba`;
    validacion = true;
  }
  if (!mensaje) {
    validacion = true;
  }

  if (!validacion) {
    alert("FORMULARIO ENVIADO");
    txtNombre.value = "";
    txtApellido.value = "";
    txtCorreo.value = "";
    txtMensaje.value = "";

    console.log(`${nombre} ${apellido} ${correo} Mensaje: ${mensaje}`);
  }
}
