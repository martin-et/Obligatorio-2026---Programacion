//Elementos
const txtFiltro = document.querySelector("#txtFiltro");
const selectFiltroMarcas = document.querySelector("#selectFiltroMarcas");
const selectFiltroCategorias = document.querySelector("#selectFiltroCategorias",);
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

divProductos.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-agregar")) {
    let card = e.target.closest(".producto-card");
    let id = card.dataset.id;
    location.href = `detalle.html?id=${id}`;
  }
});

let contCarrito = 0;
//Funciones

function armarFiltroMarcas() {
  let optionsSelect = `<option value="">Todas</option>`;
  let optionVisto = "";

  //Recorre la lista productos
  //La condicion es, si en la recorrida del array entra en la marca y si es != de "" devuelve -1
  //Entonces se asigna el valor a optionVisto, separandolo por una ",".
  //Si se repite devuelve un valor != -1 y no entra en el if.
  for (let i = 0; i < productos.length; i++) {
    if (optionVisto.indexOf(productos[i].marca) == -1) {
      optionVisto += productos[i].marca + ",";
      optionsSelect += `
      <option value="${productos[i].marca}">${productos[i].marca}</option>
      `;
    }
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
      <div class="producto-card" data-id="${arr[i].id}">
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
      </div>`;
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

//Esta funcion toma el array y devuelve los productos que coinciden con el input y se guarda en resultado.
//mostrarProductos es la "suma" de todos los filtros que estan en la variable resultado.

function aplicarFiltros() {
  let resultado = filtrarPorNombre(productos);
  resultado = filtrarMarcas(resultado);
  resultado = filtrarCategorias(resultado);
  mostrarProductos(resultado);
}
