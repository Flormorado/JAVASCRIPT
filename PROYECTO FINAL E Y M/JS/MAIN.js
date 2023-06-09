// PRODUCTOS
const productos = [
    // Esferos
    {
        id: "esfero-01", //no importante
        titulo: "Esfero 01",//no importante
        imagen: "../img/Esferosretractil.jpg",//si es importante-- ubicacion y nombre preciso y completo con extension de imagen
        categoria: {
            nombre: "Esferos",//no importante
            id: "Esferos"//si es importante ES CLAVE va enlazado con nombre colocado en id en archivo TIENDA ON LINE
        },
        precio: 3000
    },
    {
        id: "esfero-02",
        titulo: "Esfero 02",
        imagen: "../img/esferopaper.JPG",
        categoria: {
            nombre: "Esferos",
            id: "Esferos"
        },
        precio: 1000
    },
    {
        id: "Esfero-03",
        titulo: "Esfero 03",
        imagen: "../img/Esferobic.JPG",
        categoria: {
            nombre: "Esferos",
            id: "Esferos"
        },
        precio: 1000
    },
    {
        id: "esfero-04",
        titulo: "Esfero 04",
        imagen: "../img/esferooffi-esco.JPG",
        categoria: {
            nombre: "Esferos",
            id: "Esferos"
        },
        precio: 1200
    },
    {
        id: "esfero-05",
        titulo: "Caja 05",
        imagen: "../img/cajadeesferooffi-esco.JPG",
        categoria: {
            nombre: "Cajas",
            id: "Esferos"
        },
        precio: 9000
    },
    {
        id: "esfero-06",
        titulo: "Caja 06",
        imagen: "../img/cajadeesferopaper.JPG",
        categoria: {
            nombre: "Cajas",
            id: "Esferos"
        },
        precio: 9000
    },
    
    // Lapices
    {
        id: "lapiz-01",
        titulo: "Lapiz 01",
        imagen: "../img/lapizdedibujo.jpg",
        categoria: {
            nombre: "Lapices",
            id: "Lapices"
        },
        precio: 3000
    },
    {
        id: "lapiz-02",
        titulo: "Lapiz 02",
        imagen: "../img/lapizpelikan.JPG",
        categoria: {
            nombre: "Lapices",
            id: "Lapices"
        },
        precio: 1000
    },
    
    ];
    const contenedorProductos = document.querySelector("#contenedor-productos");
    const botonesCategorias = document.querySelectorAll(".boton-categoria");
    const tituloPrincipal = document.querySelector("#titulo-principal");
    let botonesAgregar = document.querySelectorAll(".producto-agregar");
    const numerito = document.querySelector("#numerito");
    
    function cargarProductos(productosElegidos) {
    
        contenedorProductos.innerHTML = "";
    
        productosElegidos.forEach(producto => {
    
            const div = document.createElement("div");
            div.classList.add("producto");
            div.innerHTML = `
                <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="producto-detalles">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio">$${producto.precio}</p>
                    <button class="producto-agregar" id="${producto.id}">Agregar</button>
                </div>
            `;
    
            contenedorProductos.append(div);
        })
    
        actualizarBotonesAgregar();
    }
    
    cargarProductos(productos);
    
    botonesCategorias.forEach(boton => {
        boton.addEventListener("click", (e) => {
    
            botonesCategorias.forEach(boton => boton.classList.remove("active"));
            e.currentTarget.classList.add("active");
    
            if (e.currentTarget.id != "todos") {
                const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
                tituloPrincipal.innerText = productoCategoria.categoria.nombre;
                const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
                cargarProductos(productosBoton);
            } else {
                tituloPrincipal.innerText = "Todos los productos";
                cargarProductos(productos);
            }
    
        })
    });
    
    function actualizarBotonesAgregar() {
        botonesAgregar = document.querySelectorAll(".producto-agregar");
    
        botonesAgregar.forEach(boton => {
            boton.addEventListener("click", agregarAlCarrito);
        });
    }
    
    let productosEnCarrito;
    
    let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
    
    if (productosEnCarritoLS) {
        productosEnCarrito = JSON.parse(productosEnCarritoLS);
        actualizarNumerito();
    } else {
        productosEnCarrito = [];
    }
    
    function agregarAlCarrito(e) {
        const idBoton = e.currentTarget.id;
        const productoAgregado = productos.find(producto => producto.id === idBoton);
    
        if(productosEnCarrito.some(producto => producto.id === idBoton)) {
            const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
            productosEnCarrito[index].cantidad++;
        } else {
            productoAgregado.cantidad = 1;
            productosEnCarrito.push(productoAgregado);
        }
    
        actualizarNumerito();
    
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    }
    
    function actualizarNumerito() {
        let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
        numerito.innerText = nuevoNumerito;
    }
        