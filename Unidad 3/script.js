// UNIDAD 3

// 15. Se le solicita al usuario que ingrese un número. Realice un programa para informar si el número es cero, par o impar.

var numero = parseInt(prompt("Ingrese un número"))
if (numero == 0) {
    alert("El numero es cero")
} else if (numero % 2 == 0) {
    alert("El numero es par");
} else {
    alert("El numero es impar");
}

// 16. Se le solicita al usuario que ingrese un número. Realice un programa para informar si el número es múltiplo de 3.

var numero2 = parseInt(prompt("Ingrese un número"))
if (numero2 % 3 == 0) {
    alert("El número es múltiplo de 3")
} else {
    alert("El número no es múltiplo de 3")
}

// 17. Se le solicita al usuario que ingrese una letra. Realice el algoritmo para informar si el valor ingresado es una vocal.

var letra = prompt("Ingrese una letra")
if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    alert("La letra es una vocal")
} else {
    alert("La letra es una consonante")
}

// 18. Se le solicita al usuario que ingrese los extremos de un rango numérico y un número. Realice un programa para informar si el número está dentro del rango. Si está en rango, informar si el número es par. Si no está dentro del rango, informar si es número es impar. Tenga en cuenta que el rango debe tener una diferencia mínima de 5 números enteros.

var primerNumero = parseInt(prompt("Ingrese el primer número de un rango numérico"))
var ultimoNumero = parseInt(prompt("Ingrese el último número del rango numérico"))
var numeroMedio = parseInt(prompt("Ingrese un número"))

if (numeroMedio >= primerNumero && numeroMedio <= ultimoNumero && ultimoNumero - primerNumero >= 5) {
    if (numeroMedio % 2 == 0) {
        alert("El número es par y se encuentra dentro del rango")
    } else{
        alert("El número es impar y se encuentra dentro del rango")
    }
}
else if(numeroMedio < primerNumero || numeroMedio > ultimoNumero || ultimoNumero - primerNumero < 5 ){
    alert("Se encuentra fuera del rango o el rango es menor a 5")
}

// 19. Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /). Realice un programa para calcular e informar la operación solicitada entre ambos números.

var ingreseNumero1 = parseInt(prompt("Ingrese un número"))
var ingreseNumero2 = parseInt(prompt("Ingrese otro número"))
var operador = parseInt(prompt("Ingrese un operador (+ - / *)"))
switch(operador){
    case "+":
        alert(ingreseNumero1 + ingreseNumero2)
        break
    case "-":
        alert(ingreseNumero1 - ingreseNumero2)
        break
     case "/":
        alert(ingreseNumero1 / ingreseNumero2)
        break
    case "*":
        alert(ingreseNumero1 * ingreseNumero2)
        break
    default:
        alert("No se ha podido encontrar el operador, intente de nuevo.")
        break
}

// 20. Se le solicita al usuario que ingrese los tres lados de un triángulo. Realice el algoritmo para informar si el triángulo es equilátero, isósceles o escaleno.

var ladoTriangulo1 = parseFloat(prompt("Ingrese el valor del primer lado de un triangulo"))
var ladoTriangulo2 = parseFloat(prompt("Ingrese el valor del segundo lado de un triangulo"))
var ladoTriangulo3 = parseFloat(prompt("Ingrese el valor del tercer lado de un triangulo"))
if(ladoTriangulo1 == ladoTriangulo2 && ladoTriangulo2 == ladoTriangulo3){
    alert("El triangulo es equilatero")
}
else if(ladoTriangulo1 == ladoTriangulo2 || ladoTriangulo2 == ladoTriangulo3 || ladoTriangulo1 == ladoTriangulo3){
    alert("El triangulo es isosceles")
}
else{
    alert("El triangulo es escaleno")
}

/*
21. Realizar un sistema para el cálculo de sueldo de una empresa. Se le solicita al usuario que ingrese la categoría a la que pertenece que define el sueldo básico mensual (categoría 1: u$s 2000, categoría 2: u$s 3000, categoría 3: u$s 4000) y las horas extras. Se sabe que:
a. Si es de la categoría 1 y trabajó más de 20 horas extra, suma un bono de u$s 500 más.
b. Si es de la categoría 3 y trabajó más de 30 horas extra, suma un bono de u$s 1000 más.
Realice un programa para calcular e informar el sueldo mensual del empleado, indicando si su sueldo supera o no los u$s 4000.
*/

var categoria = parseInt(prompt("Ingrese la categoria del empleado: (1 - 2 - 3)"));
var horasExtras = parseInt(prompt("Ingrese la cantidad de horas extras trabajadas"))

var sueldo = 0
var bono = 0
switch (categoria) {
    case 1:
        sueldo = 2000
        if(horasExtras > 20){
            bono = 500
        }
        alert("El sueldo del empleado es: u$s" + (sueldo + bono))
        break
    case 2:
        sueldo = 3000
        alert("El sueldo del empleado es: u$s" + sueldo)
        break
    case 3:
        sueldo = 4000
        if(horasExtras > 30){
            bono = 1000
        }
        alert("El sueldo del empleado es: u$s" + (sueldo + bono))
        break
    default:
        alert("La categoria ingresada no se encuentra, intente de nuevo.")
        break
}