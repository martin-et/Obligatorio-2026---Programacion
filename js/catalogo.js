//Elementos
const txtFiltro = document.querySelector("#txtFiltro");
const selectFiltroMarcas = document.querySelector("#selectFiltroMarcas");
const selectFiltroCategorias = document.querySelector(
  "#selectFiltroCategorias",
);
const carritoSpan = document.querySelector(".carrito-cantidad");
const divProductos = document.querySelector("#productosGrid");

// eventos
txtFiltro.addEventListener("keyup", aplicarFiltros);
selectFiltroMarcas.addEventListener("change", aplicarFiltros);
selectFiltroCategorias.addEventListener("change", aplicarFiltros);

//Inicializaciones
armarFiltroMarcas();
armarFiltroCategorias();
mostrarProductos(productos);

let contCarrito = 0;


//Funciones

function armarFiltroMarcas() {
 let optionsSelect = `<option value="">Todas</option>`;
  for (const marca of marcas) {
    optionsSelect += `<option value="${marca}">${marca}</option>`;
  }
  selectFiltroMarcas.innerHTML = optionsSelect;
}        

function armarFiltroCategorias() {
  let optionsSelect = `<option value="">Todas</option>`;
  let optionVisto = "";

  for (let i = 0; i < productos.length; i++) {
    if (optionVisto.indexOf(productos[i].categoria) == -1) {
      optionVisto += productos[i].categoria + ",";
      optionsSelect += `
      <option value="${productos[i].categoria}">${productos[i].categoria}</option>
      `;
    }
  }
  selectFiltroCategorias.innerHTML = optionsSelect;
}

function mostrarProductos(arr) {
  divProductos.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    divProductos.innerHTML += `
    <a href = 'detalle.html?id=${arr[i].id}' class='producto-card'>
        <div class="producto-imagen" style="background-image: url('${arr[i].imagenes[0]}')"></div>
        <div class="producto-contenido">
          <h3 class="producto-nombre">${arr[i].nombre}</h3>
          <p class="producto-marca">${arr[i].marca}</p>
          <p class="producto-descripcion">${arr[i].descripcion}</p>
          <div class="producto-footer">
            <span class="producto-precio">US$ ${arr[i].precio}</span>
            <button class="btn-agregar">Ver Más</button>
          </div>
        </div>
      </a>`;
  }
  if (arr.length == 0) {
    divProductos.innerHTML += `<p>No se encontraron productos</p>`;
  }
}

//Cada funcion recibe un array
//Formateo del value del select / txt
//Se crea un array vacio donde se pushean los objetos filtrados
//Se recorre el array recibido, formateo el atributo a minuscula y comparo
//Si el atributo incluye el input ingresado lo muestra en pantalla
function filtrarPorNombre(arr) {
  let nombreIngresado = txtFiltro.value.trim().toLowerCase();
  let arrayFiltrado = [];

  for (const producto of arr) {
    if (producto.nombre.toLowerCase().includes(nombreIngresado)) {
      arrayFiltrado.push(producto);
    }
  }
  return arrayFiltrado;
}

function filtrarMarcas(arr) {
  let marcaIngresada = selectFiltroMarcas.value;
  let arrayFiltrado = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].marca == marcaIngresada || marcaIngresada == "") {
      arrayFiltrado.push(arr[i]);
    }
  }
  return arrayFiltrado;
}

function filtrarCategorias(arr) {
  let categoriaIngresada = selectFiltroCategorias.value;
  let arrayFiltrado = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].categoria == categoriaIngresada || categoriaIngresada == "") {
      arrayFiltrado.push(arr[i]);
    }
  }
  return arrayFiltrado;
}

const h1Catalogo = document.querySelector("#h1Catalogo");
h1Catalogo.textContent = "Nuestros Productos";

//Esta funcion toma el array y devuelve los productos que coinciden con el input y se guarda en resultado.
//mostrarProductos es la "suma" de todos los filtros que estan en la variable resultado.
function aplicarFiltros() {
  let resultado = filtrarPorNombre(productos);
  resultado = filtrarMarcas(resultado);
  resultado = filtrarCategorias(resultado);
  mostrarProductos(resultado);

  let marcaSeleccionada = selectFiltroMarcas.value;

  if (marcaSeleccionada != "") {
    // console.log("marca:", marcaSeleccionada);
    h1Catalogo.textContent = marcaSeleccionada.toUpperCase();
  } else {
    h1Catalogo.textContent = "Nuestros Productos";
  }
}
