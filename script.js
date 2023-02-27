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
    const imagen = document.getElementById("imagen-experiencia");
   /* function frames(){
        let animacion= document.getElementById("imagen-experiencia").animate([
            0% {'opacity': 0},
           25%{ 'opacity':0.25},
           50% {'opacity' :0.58},
           100%{'opacity':1},
        ],{
            easing: "linear",
            iterations:1,
            duration: 2000,
        }); return animacion.finished;
    }*/
function carrusel(){
    
    
    let imagen = document.getElementById("imagen-experiencia");
    
    if (contador<7){
       contador ++;
    imagen.src=array[contador];
    /*window.setInterval(frames)*/
    console.log("hecho"+ contador);
    }
    else {contador=0;
        imagen.style.backgroundImage= "url('"+array[contador]+"')";
    }
}

window.setInterval(carrusel, 3000);


