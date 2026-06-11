const parametros = new URLSearchParams(window.location.search);
let idProducto = parametros.get("id");
idProducto = Number(idProducto);

let marcaDetalle = document.querySelector("#detalleMarca");
let tituloDetalle = document.querySelector("#detalleTitulo");
let precioDetalle = document.querySelector("#detallePrecio");
let descripcionDetalle = document.querySelector("#detalleDescripcion");
let imgDetalle = document.querySelector("#imagenGrande");
let imgChicas = document.querySelector("#imagenesChicas");

let producto;

for (const p of productos) {
  if (p.id == idProducto) {
    producto = p;
  }
}

marcaDetalle.textContent = producto.marca;
tituloDetalle.textContent = producto.nombre;
descripcionDetalle.textContent = producto.descripcion;
precioDetalle.textContent = `US$ ${producto.precio}`;
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
