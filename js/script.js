//Traigo los elementos HTML
const imagenSlider = document.querySelector("#destacados-diapositivas");
const btnAnterior = document.querySelector("#flechaAnterior");
const btnSiguiente = document.querySelector("#flechaSiguiente");

btnAnterior.addEventListener("click", anteriorImagen);
btnSiguiente.addEventListener("click", siguienteImagen);

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
    let imagenRandom = Math.floor(Math.random() * productos[i].imagenes.length)
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