// UNIDAD 2

//9. Se le solicita al usuario que ingrese su nombre y luego su apellido. Realice un programa que arme y muestre el mensaje "Bienvenido", seguido del nombre y apellido del usuario.

var nombreUsuario = prompt("Buen día, ingrese su nombre")
var apellidoUsuario = prompt("Ingrese su apellido, por favor")
alert("Bienvenido: " + nombreUsuario + " " + apellidoUsuario)

// 10. Se le solicita al usuario que ingrese el diámetro de un círculo. Realice un programa para calcular e informar el perímetro y el área del círculo. Se considerará para este ejercicio que el valor de PI será 3.1416.

var ingreseDiametro = prompt("Ingrese diámetro de un círculo")
var radioCirculo = ingreseDiametro / 2
var perimetroCirculo = (3.1416 * 2) * radioCirculo
var areaCirculo = 3.1416 * (radioCirculo * 2)
alert("El perímetro del círculo es: " + perimetroCirculo + " y el área es: " + areaCirculo)

// 11. Se le solicita al usuario que ingrese 4 números. Realice un programa para calcular e informar la suma y el promedio.

var numero1 = parseFloat(prompt("Ingrese un número"))
var numero2 = parseFloat(prompt("Ingrese otro número"))
var numero3 = parseFloat(prompt("Ingrese otro número"))
var numero4 = parseFloat(prompt("Ingrese otro número"))
var respuestaSuma = numero1 + numero2 + numero3 + numero4
var respuestaPromedio = respuestaSuma / 4
alert("La suma de sus números es: " + respuestaSuma)
alert("El promedio de sus números es: " + respuestaPromedio)

// 12. Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que ingrese el valor de la hora y la cantidad de horas trabajadas en el mes. Realice un programa para calcular e informar el sueldo mensual del empleado.

var valorHoras = parseFloat(prompt("Ingrese el valor por hora"))
var horasTrabajadas = parseFloat(prompt("Ingrese la cantidad de horas trabajadas"))
var sueldoMes = valorHoras * horasTrabajadas
alert("El sueldo mensual es: " + sueldoMes)

// 13. Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que ingrese el valor de la hora, la cantidad de horas trabajadas en el mes y los años de antigüedad en la empresa. Realice un programa para calcular e informar el sueldo mensual del empleado, teniendo en cuenta que se le asigna un bono mensual igual al 15% del sueldo por año de antigüedad.

var valorHoras2 = parseFloat(prompt("Ingrese el valor por hora"))
var horasTrabajadas2 = parseFloat(prompt("Ingrese la cantidad de horas trabajadas"))
var añosAntiguedad = parseFloat(prompt("Ingrese los años de antiguedad"))
var sueldoSinBono = valorHoras2 * horasTrabajadas2
var bono = (sueldoSinBono * 0.15) * añosAntiguedad
var sueldoTotal = sueldoSinBono + bono
console.log("El sueldo total del empleado es de: " + sueldoTotal)

// 14. Realizar un sistema para el cálculo de sueldo de una empresa de seguros. Se le solicita que ingrese el valor de la hora, la cantidad de horas trabajadas en el mes, los años de antigüedad, la cantidad de seguros vendidos y el valor del seguro más caro vendido. Realice un programa para calcular e informar el sueldo mensual del empleado, teniendo en cuenta que se le asigna un bono igual al 50% del seguro más caro vendido, un bono igual al 25% del sueldo por la cantidad de seguros vendidos y otro bono igual al 15% del sueldo por año de antigüedad. Una vez obtenido el sueldo final, calcular e informar el valor promedio de la hora del empleado.

var valorHoras3 = parseFloat(prompt("Ingrese el valor por hora"))
var horasTrabajadas3 = parseFloat(prompt("Ingrese la cantidad de horas trabajadas"))
var añosAntiguedad3 = parseFloat(prompt("Ingrese los años de antiguedad"))
var segurosVendidos = parseFloat(prompt("Ingrese la cantidad de seguros vendidos"))
var seguroMasCaro = parseFloat(prompt("Ingrese el valor del seguro mas caro vendido"))
var sueldoMensual = horasTrabajadas3 * valorHoras3
var bonoSeguroMasCaro = seguroMasCaro * 0.50
var bonoSegurosVendidos = (sueldoMensual * 0.25) * segurosVendidos
var bonoPorAntiguedad = (sueldoMensual * 0.15) * añosAntiguedad3
var sueldoTotal3 = sueldoMensual + bonoSeguroMasCaro + bonoSegurosVendidos + bonoPorAntiguedad
alert("El sueldo total es: " + sueldoTotal3)