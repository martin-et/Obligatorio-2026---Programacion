const titulos = [
  "Captura el Mundo",
  "Equipate. Capturá. Creá",
  "Tu próxima cámara te espera",
  "Fotografía sin límites",
];

//Traigo los elementos HTML
const h1Hero = document.querySelector("#h1-hero");
const imagenSlider = document.querySelector("#destacados-diapositivas");
const btnAnterior = document.querySelector("#flechaAnterior");
const btnSiguiente = document.querySelector("#flechaSiguiente");
const login = document.querySelector("#login");

btnAnterior.addEventListener("click", anteriorImagen);
btnSiguiente.addEventListener("click", siguienteImagen);

login.addEventListener("click", () => {
  login.disabled = true;
  login.textContent = "Inicion Sesiada".toUpperCase();
});

let posImagen = 0;
let h1Random = Math.floor(Math.random() * titulos.length);
h1Hero.innerHTML = titulos[h1Random];

//Recorre el array de productos
for (const prod of productos) {
  if (prod.destacado) {
    const contSlider = document.createElement("div");
    contSlider.className = "destacados-diapositiva";
    const imgDiv = document.createElement("div");
    imgDiv.classList = "imagen-slider";
    let imagen = prod.imagenes.length;

    imgDiv.style.backgroundImage = `url('${prod.imagenes[0]}')`;

    const contenido = document.createElement("div");
    contenido.className = "destacados-contenido";
    contenido.innerHTML = `
          <p class="destacados-etiqueta">PRODUCTO DESTACADO</p>
          <h3 class="destacados-titulo">${prod.nombre}</h3>
          <p class="destacados-precio">${prod.descuento ? `<p class='destacados-precio'><strong>USD</strong> ${(prod.precio * 0.7).toFixed(0)} <small>30% OFF</small></p>` : `<strong>USD</strong> ${prod.precio}`}</p>
          <a href='detalle.html?id=${prod.id}' class="btn-slider">Explorar Producto</a>
          `;

    contSlider.appendChild(imgDiv);
    contSlider.appendChild(contenido);
    imagenSlider.appendChild(contSlider);
  }
}

const slider = document.querySelectorAll(".destacados-diapositiva");
slider[0].classList.add("activa");

function siguienteImagen() {
  slider[posImagen].classList.remove("activa");

  posImagen++;
  if (posImagen >= slider.length) {
    posImagen = 0;
  }
  slider[posImagen].classList.add("activa");
}

function anteriorImagen() {
  slider[posImagen].classList.remove("activa");

  posImagen--;
  if (posImagen < 0) {
    posImagen = slider.length - 1;
  }
  slider[posImagen].classList.add("activa");
}

function crearReloj() {
  let hoy = new Date();
  let ciberLunes = new Date(2026, 11, 25);
  let tiempoRestante = ciberLunes - hoy;

  let dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
  let horas = Math.floor(
    (tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  let minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  let segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

  if (tiempoRestante < 0) {
    document.querySelector("#cuentaRegresiva").innerHTML =
      `<h2 class='txtExpirado'>LA OFERTA EXPIRÓ</h2>`;
  } else {
    if (dias < 10) {
      dias = "0" + dias;
    }
    if (horas < 10) {
      horas = "0" + horas;
    }
    if (minutos < 10) {
      minutos = "0" + minutos;
    }
    if (segundos < 10) {
      segundos = "0" + segundos;
    }
    document.querySelector("#cuentaRegresiva").innerHTML =
      `<h2>CIBERLUNES: </h2><h3 class="txtDias">${dias} Dias</h3>|<h3 class="txtHoras">${horas} Horas</h3>|<h3 class="txtMInutos">${minutos} Minutos</h3>|<h3 class="txtSegundos">${segundos} Segundos</h3>`;
  }
}
crearReloj();
setInterval(crearReloj, 1000);
