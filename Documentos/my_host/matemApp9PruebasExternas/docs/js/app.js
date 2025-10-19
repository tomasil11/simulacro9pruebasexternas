// Objeto con la información de las cards

let nombreActividad01;

let cards = [
    {
        titulo: "Actividad #1",
        tipo: "Vídeo",
        img: "images/iconos/botonVideo01.png",
        ancho: 50,
        alto: 50,
        nombre: "Tipologías Textuales"
    }, 
    {
        titulo: "Actividad #2",
        tipo: "Crucigrama",
        img: "images/iconos/actividadesPedagogicas.png",
        ancho: 50,
        alto: 50,
        nombre: "Tipología Textual"
    },
    {
        titulo: "Actividad #3",
        tipo: "Infografía",
        img: "images/iconos/images.png",
        ancho: 50,
        alto: 50,
        nombre: "Tipologías Textuales" 
    }

]
// Fin de objeto

// Código ingreso de la card 1
document.getElementById("titulo-card1").innerHTML = cards[0].titulo;
document.getElementById("tipo-card1").innerHTML = cards[0].tipo;
let contenedorImages = document.getElementById("images-card1");
document.getElementById("actividad-card1").innerHTML = cards[0].nombre;


let imgElement = document.createElement("img");
imgElement.src = cards[0].img;
imgElement.width = cards[0].ancho;
imgElement.height = cards[0].alto;
contenedorImages.appendChild(imgElement);

// Fin código ingreso card1

// Código ingreso de la card 2
document.getElementById("titulo-card2").innerHTML = cards[1].titulo;
document.getElementById("tipo-card2").innerHTML = cards[1].tipo;
let contenedorImages02 = document.getElementById("images-card2");
document.getElementById("actividad-card2").innerHTML = cards[1].nombre;


let imgElement02 = document.createElement("img");
imgElement02.src = cards[1].img;
imgElement02.width = cards[1].ancho;
imgElement02.height = cards[1].alto;
contenedorImages02.appendChild(imgElement02);

// Fin código ingreso card2

// Código ingreso de la card 3
document.getElementById("titulo-card3").innerHTML = cards[2].titulo;
document.getElementById("tipo-card3").innerHTML = cards[2].tipo;
let contenedorImages03 = document.getElementById("images-card3");
document.getElementById("actividad-card3").innerHTML = cards[2].nombre;


let imgElement03 = document.createElement("img");
imgElement03.src = cards[2].img;
imgElement03.width = cards[2].ancho;
imgElement03.height = cards[2].alto;
contenedorImages03.appendChild(imgElement03);

// Fin código ingreso card3