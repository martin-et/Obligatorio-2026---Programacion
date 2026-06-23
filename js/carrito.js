let carritoCantidad = document.querySelector("#carritoCantidad");
let listaCarrito = document.querySelector("#listaCarrito");
let totalCarrito = document.querySelector("#txtSumaCarrito");
let msjCarrito = document.querySelector("#msjCarrito");
let btnLimpiarCarrito = document.querySelector("#limpiarCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
carritoCantidad.textContent = carrito.length;

function mostrarCarrito() {
  listaCarrito.innerHTML = "";
  let totalSuma = 0;

  if (carrito.length == 0) {
    msjCarrito.innerHTML = `No tienes elementos en el carrito`;
    totalCarrito.innerHTML = "";
    return;
  }
  msjCarrito.innerHTML = "";

  for (let i = 0; i < carrito.length; i++) {
    let producto = carrito[i];
    let condicionDescuento = carrito[i].descuento
      ? `<span style="color: red">US$ ${(carrito[i].precio * 0.7).toFixed(0)}</span> <small style="color:#a1a1a1; text-decoration:line-through">US$ ${carrito[i].precio}</small>`
      : `<span style="color: black">US$ ${carrito[i].precio}</span>`;

    let precio = carrito[i].descuento ? (carrito[i].precio * 0.7.toFixed(0)) : carrito[i].precio;
    totalSuma += Number(precio);

    listaCarrito.innerHTML += `
      <div class="producto-card-carrito">
      <div class="producto-imagen-carrito" style="background-image: url('${producto.imagenes[0]}')"></div>
      <h3 class="producto-nombre-carrito">${producto.nombre}</h3>
      <p class="producto-precio-carrito">${condicionDescuento}</p>
      </div>`;
  }

  totalCarrito.innerHTML = `<small>Total:</small> US$ ${totalSuma}`;
}

mostrarCarrito();

btnLimpiarCarrito.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
  localStorage.removeItem("carrito");
  carrito = [];

  totalCarrito.innerHTML = "";
  carritoCantidad.textContent = 0;
  msjCarrito.innerHTML = `No tienes elementos en el carrito`;
  mostrarCarrito();
}
