const parametros = new URLSearchParams(window.location.search);
let idProducto = parametros.get("id");
idProducto = Number(idProducto);

let marcaDetalle = document.querySelector("#detalleMarca");
let tituloDetalle = document.querySelector("#detalleTitulo");
let precioDetalle = document.querySelector("#detallePrecio");
let descripcionDetalle = document.querySelector("#detalleDescripcion");
let imgDetalle = document.querySelector("#imagenGrande");
let imgChicas = document.querySelector("#imagenesChicas");
let carritoCantidad = document.querySelector("#carritoCantidad");
let btnAgregarCarrito = document.querySelector("#btnAgregarDetalle");

let contador = 0;

btnAgregarCarrito.addEventListener("click", () => {
  contador++;
  carritoCantidad.textContent = contador;
});

let producto;
for (const p of productos) {
  if (p.id == idProducto) {
    producto = p;
  }
}
let condicionDescuento = producto.descuento
  ? `<span style="color: red">US$ ${(producto.precio * 0.7).toFixed(0)}</span> <small style="color:#a1a1a1; text-decoration:line-through">US$ ${producto.precio}</small>`
  : `<span style="color: black">US$ ${producto.precio}</span>`;

marcaDetalle.textContent = producto.marca;
tituloDetalle.textContent = producto.nombre;
descripcionDetalle.textContent = producto.descripcion;
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
    contRelacionados.innerHTML += `
    <a href = 'detalle.html?id=${arr[i].id}' class='producto-card-relacionado'>
        <div class="producto-imagen" style="background-image: url('${arr[i].imagenes[0]}')"></div>
        <div class="producto-contenido">
          <h3 class="producto-nombre">${arr[i].nombre}</h3>
          <p class="producto-marca">${arr[i].marca}</p>
          <p class="producto-descripcion">${arr[i].descripcion}</p>
          <div class="producto-footer">
          <span class="producto-precio">${arr[i].descuento ? `<span class='producto-descuento'>30% OFF<br>$${(arr[i].precio * 0.7).toFixed(0)}</span>` : `$${arr[i].precio}`}</span>
          
            <button class="btn-agregar">Ver Más</button>
          </div>
        </div>
      </a>`;
  }
}

let relacionados = productos
  .filter((p) => p.categoria === producto.categoria && p.id !== producto.id)
  .slice(0, 4);

mostrarRelacionados(relacionados);
