//Funcion Constructora
//function Auto(puertas, color, marca, año, ruedas) {
//    this.puertas = puertas;
//    this.color = color;
//    this.marca = marca;
//    this.año = año;
//    this.ruedas = ruedas;

//    this.informacion = function () {
//        console.log('Este es un ' + this.marca + ' de color ' + this.color);
//    };
//}

//var miAuto = new Auto(2, "negro", "Ferrari", 2020, 4);
//miAuto.informacion();
//console.log(miAuto);
//console.log(miAuto.marca);}


//Expresión de Clase
// class Auto {
//     constructor(puertas, color, marca, año, ruedas){
//         this.puertas = puertas;
//         this.color = color;
//         this.marca = marca;
//         this.año = año;
//         this.ruedas = ruedas
//     }

//     information() {
//         console.log('Este es un ' + this.marca + ' de color ' + this.color);
//     }
// }

// var miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015, 4);
// miSegundoAuto.information();
//console.log(miSegundoAuto);
//console.log(miSegundoAuto.marca);


class Futbol {
    constructor(jugador) {
        this.jugador = jugador;
    }

    obtenerNombre() {
        console.log(this.jugador);
    }
}

var argentina = new Futbol('Messi');
var brasil = new Futbol('Pele');

argentina.obtenerNombre();
brasil.obtenerNombre();