// var devolverUsuario = function () {
//     return "Daniela";
// };

// var devolverSaludo = function () {
//     return "Hola";
// };

// var saludar = function (cb1, cb2) {
//     return cb1() + ' ' + cb2();
// };

// var resultado = saludar(devolverSaludo, devolverUsuario);
// console.log(resultado);  


var devolverFrase = function (comida) {
    return "Hoy quiero comer " + comida;
};

var hablar = function (comida, cb) {
    return cb (comida);
};

var fraseFinal = hablar('Pizza' , devolverFrase);
console.log(fraseFinal);