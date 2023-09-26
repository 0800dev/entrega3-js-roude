const agregarAlCarrito = (id) => {
    const producto = productos.find((producto) => producto.id === id);
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    }else {
        carrito.push(producto);
       
    }
};


const botonAgregarCarrito = document.querySelectorAll('.btn-agregar'). forEach(button => {
    button.addEventListener ('click', (e) => {
        const productoId = parseInt(this.value);
        agregarAlCarrito();
    });
});

const botonVaciarCarrito = document.querySelector("#vaciar-carrito");
function vaciarCarrito (){
    botonVaciarCarrito.addEventListener('click',(e) => {
        carrito = [];
        localStorage.clear();
    })
};
