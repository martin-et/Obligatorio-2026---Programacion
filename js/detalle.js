const parametros = new URLSearchParams(window.location.search);
let idProducto = parametros.get("id");
idProducto = Number(idProducto);

const svgEstrellaAmarilla = `<svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#fdff6b"/>
</svg>`;
const svgEstrellaNegra = `<svg viewBox="0 0 24 24"  width="16" height="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#000000">
</svg>`;

let marcaDetalle = document.querySelector("#detalleMarca");
let tituloDetalle = document.querySelector("#detalleTitulo");
let precioDetalle = document.querySelector("#detallePrecio");
let descripcionDetalle = document.querySelector("#detalleDescripcion");
let valoracionDetalle = document.querySelector("#valoracion");
let imgDetalle = document.querySelector("#imagenGrande");
let imgChicas = document.querySelector("#imagenesChicas");
let carritoCantidad = document.querySelector("#carritoCantidad");
let btnAgregarCarrito = document.querySelector("#btnAgregarDetalle");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
carritoCantidad.textContent = carrito.length;

btnAgregarCarrito.addEventListener("click", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  let productoCargado = false;
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].id == producto.id) {
      productoCargado = true;
    }
  }

  if (!productoCargado) {
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  carritoCantidad.textContent = carrito.length;
});

let producto;
for (const p of productos) {
  if (p.id == idProducto) {
    producto = p;
  }
}
let estrellas = "";
for (let j = 0; j < producto.valoracion; j++) {
  estrellas += svgEstrellaNegra;
}
valoracionDetalle.innerHTML = estrellas;
console.log("idProducto:", idProducto);
console.log("producto encontrado:", producto);
console.log("primer producto del array:", productos[0]);

let condicionDescuento = producto.descuento
  ? `<span style="color: red">US$ ${(producto.precio * 0.7).toFixed(0)}</span> <small style="color:#a1a1a1; text-decoration:line-through">US$ ${producto.precio}</small>`
  : `<span style="color: black">US$ ${producto.precio}</span>`;

marcaDetalle.textContent = producto.marca;
tituloDetalle.textContent = producto.nombre;
descripcionDetalle.textContent = producto.descripcion;
valoracionDetalle.innerHTML =`Valoracion: ${estrellas}`;
precioDetalle.innerHTML = condicionDescuento;
imgDetalle.style.backgroundImage = `url('${producto.imagenes[0]}')`;

// Generar imágenes chicas
for (const imagen of producto.imagenes) {
  let imgChica = document.createElement("div");
  imgChica.classList.add("imagen-chica");
  imgChica.style.backgroundImage = `url('${imagen}')`;
  imgChicas.appendChild(imgChica);

  // Al hacer hover cambia a la imagen grande
  imgChica.addEventListener("mouseover", () => {
    imgDetalle.style.backgroundImage = `url('${imagen}')`;
  });
}

const contRelacionados = document.querySelector("#productosRelacionados");

function mostrarRelacionados(arr) {
  contRelacionados.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    let estrellas = "";
    for (let j = 0; j < arr[i].valoracion; j++) {
      estrellas += svgEstrellaAmarilla;
    }

    contRelacionados.innerHTML += `
    <a href = 'detalle.html?id=${arr[i].id}' class='producto-card-relacionado'>
        <div class="producto-imagen" style="background-image: url('${arr[i].imagenes[0]}')"></div>
        <div class="producto-contenido">
          <h3 class="producto-nombre">${arr[i].nombre}</h3>
          <p class="producto-marca">${arr[i].marca}</p>
          <p class="producto-descripcion">${arr[i].descripcion}</p>
          <div>${estrellas}</div>
          <div class="producto-footer">
          <span class="producto-precio">${arr[i].descuento ? `<span class='producto-descuento'>30% OFF<br>$${(arr[i].precio * 0.7).toFixed(0)}</span>` : `$${arr[i].precio}`}</span>
          
            <button class="btn-agregar">Ver Más</button>
          </div>
        </div>
      </a>`;
  }
}

let relacionados = productos
  .filter((p) => p.categoria == producto.categoria && p.id != producto.id)
  .slice(0, 4);

mostrarRelacionados(relacionados);
