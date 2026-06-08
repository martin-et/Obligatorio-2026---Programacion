const frasesRandom = [
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

let h1Random = Math.floor(Math.random() * frasesRandom.length);
h1Hero.innerHTML = frasesRandom[h1Random];

let posImagen = 0;

//Recorre el array de productos
for (let i = 0; i < productos.length; i++) {
  //Valida si el producto el atributo destacado == true y si se cumple ejecuta
  if (productos[i].destacado == true) {
    //Creo el contenedor del Slider
    const slide = document.createElement("div");
    slide.className = "destacados-diapositiva";
    //Esto crea el contenedor que contiene las imagenes dentro y
    // le asigna la primera foto del objeto para mostrarla
    const imgDiv = document.createElement("div");
    imgDiv.className = "imagen-slider";
    let imagenRandom = Math.floor(Math.random() * productos[i].imagenes.length);
    imgDiv.style.backgroundImage = `url('${productos[i].imagenes[imagenRandom]}')`;

    const contenido = document.createElement("div");
    contenido.className = "destacados-contenido";
    contenido.innerHTML = `
    <p class="destacados-etiqueta">PRODUCTO DESTACADO</p>
    <h3 class="destacados-titulo">${productos[i].nombre}</h3>
    <p class="destacados-precio"><strong>USD</strong> ${productos[i].precio}</p>
    `;

    slide.appendChild(imgDiv);
    slide.appendChild(contenido);
    imagenSlider.appendChild(slide);
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
  let horas = Math.floor((tiempoRestante / (1000 * 60 * 60)) % 24);
  let minutos = Math.floor((tiempoRestante / (1000 * 60)) % 60);
  let segundos = Math.floor((tiempoRestante / 1000) % 60);

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
crearReloj();
setInterval(crearReloj, 1000);
