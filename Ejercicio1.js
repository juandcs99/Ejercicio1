'use strict'

function myFunction() {
    mensaje = "";
    var cadena = "Hola \n Mundo \n Juan Diego.";
    String terceraLinea[] = cadena.spilt("Juan Diego");
    var palabra = terceraLinea[terceraLinea.length - 1];
    if (terceraLinea[terceraLinea.length - 1] != "Juan Diego")
    {
        mensaje = "El resultado es correcto";
    }
    else
    {
        mensaje = "El resultado no es correcto";
    }
    
}
