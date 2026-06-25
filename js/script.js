const titulos = [
  "Captura el Mundo",
  "Equipate. Capturá. Creá",
  "Tu próxima cámara te espera",
  "Fotografía sin límites",
];

const svgEstrellaAmarilla = `<svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#fdff6b"/>
</svg>`;
const svgEstrellaNegra = `<svg viewBox="0 0 24 24"  width="16" height="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#000000">
</svg>`;

//Traigo los elementos HTML
const h1Hero = document.querySelector("#h1-hero");
const imagenSlider = document.querySelector("#destacados-diapositivas");
const btnAnterior = document.querySelector("#flechaAnterior");
const btnSiguiente = document.querySelector("#flechaSiguiente");
const login = document.querySelector("#login");
const modal = document.querySelector("#modal");
const botonModal = document.querySelector("#btnModal");
const gridValorados = document.getElementById("grid-valorados");

if (!localStorage.getItem("modalVisto")) {
  setTimeout(() => {
    modal.style.display = "block";
    setTimeout(() => {
      modal.style.opacity = 1;
    }, 30);
  }, 2000);
}
botonModal.addEventListener("click", () => {
  modal.style.opacity = 0;
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
  localStorage.setItem("modalVisto", "true");
});

login.addEventListener("click", () => {
  login.disabled = true;
  login.textContent = "Inicion Sesiada".toUpperCase();
});

btnAnterior.addEventListener("click", anteriorImagen);
btnSiguiente.addEventListener("click", siguienteImagen);

let posImagen = 0;
let h1Random = Math.floor(Math.random() * titulos.length);
h1Hero.innerHTML = titulos[h1Random];

//Recorre el array de productos
for (const prod of productos) {
  let estrellas = "";
  for (let i = 0; i < prod.valoracion; i++) {
    estrellas += svgEstrellaAmarilla;
  }
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
          <div class="valoracion">Valoracion: ${estrellas}</div>
          <p class="destacados-precio">${prod.descuento ? `<p class='destacados-precio'><small>30% OFF</small><strong>USD</strong> ${(prod.precio * 0.7).toFixed(0)}</p>` : `<strong>USD</strong> ${prod.precio}`}</p>
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

for (const prod of productos) {
  if (prod.valoracion >= 4) {
    let estrellas = "";
    for (let i = 0; i < prod.valoracion; i++) {
      estrellas += svgEstrellaNegra;
    }

    const card = document.createElement("div");
    card.className = "producto-card-valorados";
    card.innerHTML = `
      <div class="producto-imagen-valorados" style="background-image: url('${prod.imagenes[0]}')"></div>
      <div class="producto-contenido-valorados">
        <p class="producto-marca-valorados">${prod.marca}</p>
        <p class="producto-nombre-valorados">${prod.nombre}</p>
        <div>${estrellas}</div>
        <div class="producto-footer-valorados">
          <span class="producto-precio-valorados">USD ${prod.precio}</span>
          <a href="detalle.html?id=${prod.id}" class="btn-agregar-valorados">Ver más</a>
        </div>
      </div>
    `;
    gridValorados.appendChild(card);
  }
}
