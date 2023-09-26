
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
 
let mostrarProducto = document.getElementById('exhibidor');

let divCarrito = document.getElementById('ver-carrito');

let muestra = "";

productos[0].forEach((el) => {
    if (el.stock) {
        muestra += `
        <div class="contenedor-tarjeta">
        <div class="tarjeta-item"><h2>${el.nombre}</h2></div>
        <div class="tarjeta-item"><img src = "${el.imagen[0]}"></div>
        <div class="tarjeta-item">Colores: ${el.colores}</div>
        <div class="tarjeta-item">${el.precio} US$</div>
        <div class="tarjeta-item">${el.talles}</div>
        <div class="tarjeta-item">${el.tela}</div>
        <div class="agregar-carrito"><button class = "btn-agregar" value="${el.id}">Agregar al carrito</button></div>
        </div>
        `
    }
});

productos[1].forEach((el) => {
    if (el.stock) {
        muestra += `
        <div class="contenedor-tarjeta">
        <div class="tarjeta-item"><h2>${el.nombre}</h2></div>
        <div class="tarjeta-item"><img src = "${el.imagen[0]}"></div>
        <div class="tarjeta-item">Colores: ${el.colores}</div>
        <div class="tarjeta-item">${el.precio} US$</div>
        <div class="tarjeta-item">${el.talles}</div>
        <div class="tarjeta-item">${el.tela}</div>
        <div class="agregar-carrito"><button class = "btn-agregar" value="${el.id}">Agregar al carrito</button></div>
        </div>
        `
    }
});

productos[2].forEach((el) => {
    if (el.stock) {
        muestra += `
        <div class="contenedor-tarjeta">
        <div class="tarjeta-item"><h2>${el.nombre}</h2></div>
        <div class="tarjeta-item"><img src = "${el.imagen[0]}"></div>
        <div class="tarjeta-item">Colores: ${el.colores}</div>
        <div class="tarjeta-item">${el.precio} US$</div>
        <div class="tarjeta-item">${el.talles}</div>
        <div class="tarjeta-item">${el.tela}</div>
        <div class="agregar-carrito"><button class = "btn-agregar" value="${el.id}">Agregar al carrito</button></div>
        </div>
        `
    }
});
mostrarProducto.innerHTML = muestra;

// const agregarAlCarrito = (id) => {
//     const producto = productos.find((producto) => producto.id === id);
//     const productoEnCarrito = carrito.find((producto) => producto.id === id);
//     if(productoEnCarrito){
//         productoEnCarrito.cantidad++;
//     }else {
//         carrito.push(producto);
       
//     }
// };


// const botonAgregarCarrito = document.querySelectorAll('.btn-agregar'). forEach(button => {
//     button.addEventListener ('click', (e) => {
//         const productoId = parseInt(this.value);
//         agregarAlCarrito();
//     });
// });






// const agregarAlCarrito = (id) => {
//     const producto = productos.find((producto) => producto.id === id);
//     const productoEnCarrito = carrito.find((producto) => producto.id === id);
//     if(productoEnCarrito){
//         productoEnCarrito.cantidad++;
//     }else {
//         carrito.push(producto);
       
//     }
// };


// const botonAgregarCarrito = document.querySelectorAll('.btn-agregar'). forEach(button => {
//     button.addEventListener ('click', (e) => {
//         const productoId = parseInt(this.value);
//         agregarAlCarrito();
//     });
// });











// const  botonAgregarCarrito = document.querySelectorAll('.btn-agregar').forEach(button => {
//     button.addEventListener('click', (e) => {
//         const productoId = parseInt(this.value);
//         agregarAlCarro(productoId);
//     });
// });

// function agregarAlCarro(productoId) {

//     const productoParaAgregar = productos.flat().find(el => el.id === productoId);

//     if (productoParaAgregar) {
        
//         const productoexistente = carrito.find(item => item.id === productoParaAgregar.id);

//         if (productoexistente) {
            
//             productoexistente.cantidad++;
//         } else {
          
//             carrito.push({
//                 ...productoParaAgregar,
//                 cantidad: 1
//             });
//         }
//     }
// };


