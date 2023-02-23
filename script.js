function ir(algo){
    aux= document.getElementById(algo);
    aux.scrollIntoView({block: "center", behavior: "smooth"});
}


const array=["recursos/carpinteria.jpg",
"recursos/disco.jpg",
"recursos/escenario.jpg",
"recursos/espalda.jpg",
"recursos/carma.jpg",
"recursos/evento.jpg",
"recursos/ludmila.jpg",
"recursos/parque.jpg",
"recursos/parque1.jpg"
];
    let contador=0;
function carrusel(){
    
    
    let imagen = document.getElementById("imagen-experiencia");
    
    if (contador<7){
       contador ++;
        imagen.style.backgroundImage="url('"+array[contador]+"')";
    console.log("hecho"+ contador);
    }
    else {contador=0;
        imagen.style.backgroundImage= "url('"+array[contador]+"')";
    }
}

window.setInterval(carrusel, 3000);


