let carritoCantidad = document.querySelector("#carritoCantidad");
let listaCarrito = document.querySelector("#listaCarrito");
let totalCarrito = document.querySelector("#txtSumaCarrito");
let msjCarrito = document.querySelector("#msjCarrito");
let btnLimpiarCarrito = document.querySelector("#limpiarCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito"));
carritoCantidad.textContent = carrito.length;

function mostrarCarrito() {
  listaCarrito.innerHTML = "";
  let total = 0;

  for (let i = 0; i < carrito.length; i++) {
    let producto = carrito[i];
    let precio = producto.descuento
      ? (producto.precio * 0.7).toFixed(0)
      : producto.precio;

    total += Number(precio);

    listaCarrito.innerHTML += `
      <div class="producto-card-carrito">
      <div class="producto-imagen-carrito" style="background-image: url('${producto.imagenes[0]}')"></div>
      <h3 class="producto-nombre-carrito">${producto.nombre}</h3>
      <p class="producto-precio-carrito">US$ ${precio}</p>
      </div>`;
  }

  totalCarrito.innerHTML = `<small>Total:</small> US$ ${total}`;
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
