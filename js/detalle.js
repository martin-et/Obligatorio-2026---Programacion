let urlDestino = window.location.href;
let idProducto = parseInt(urlDestino.split("=")[1]);

let marcaDetalle = document.querySelector("#detalleMarca");
let tituloDetalle = document.querySelector("#detalleTitulo");
let precioDetalle = document.querySelector("#detallePrecio");
let descripcionDetalle = document.querySelector("#detalleDescripcion");
let imgDetalle = document.querySelector("#imagenGrande");
let imgChicas = document.querySelector("#imagenesChicas");

// Busca el producto en el array
let productoEncontrado = null;

for (let i = 0; i < productos.length; i++) {
  if (productos[i].id == idProducto) {
    productoEncontrado = productos[i];
  }
}

// Mostrar el producto
if (productoEncontrado) {
  marcaDetalle.textContent = productoEncontrado.marca;
  tituloDetalle.textContent = productoEncontrado.nombre;
  descripcionDetalle.textContent = productoEncontrado.descripcion;
  precioDetalle.textContent = `US$ ${productoEncontrado.precio}`;
  imgDetalle.style.backgroundImage = `url('${productoEncontrado.imagenes[0]}')`;
}

// Generar imágenes chicas
for (let i = 0; i < productoEncontrado.imagenes.length; i++) {
  let imgChica = document.createElement("div");
  imgChica.classList.add("imagen-chica");
  imgChica.style.backgroundImage = `url('${productoEncontrado.imagenes[i]}')`;
  imgChicas.appendChild(imgChica);

  // Al hacer hover cambia la imagen grande
  imgChica.addEventListener("mouseover", function () {
    imgDetalle.style.backgroundImage = `url('${productoEncontrado.imagenes[i]}')`;
  });
}
