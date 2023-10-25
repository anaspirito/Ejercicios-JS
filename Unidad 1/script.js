// UNIDAD 1

// 1.Realice un algoritmo que muestre el nombre y apellido de un usuario

var nombreUsuario = "Ana"
var apellidoUsuario = "Spirito"
console.log("Mi nombre es: " + nombreUsuario + " " + apellidoUsuario)

// 2. Realice un algoritmo que muestre el promedio de 3 notas

var nota1 = 9
var nota2 = 8
var nota3 = 8
console.log("El promedio es: " + (nota1 + nota2 + nota3)/3)

// 3. Realice el algoritmo para calcular e informar el perímetro del triángulo.

var ladoTriangulo1 = 15
var ladoTriangulo2 = 15
var ladoTriangulo3 = 20
console.log(ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3)

// 4. Realice el algoritmo para calcular e informar el perímetro y el área del cuadrado.

var ladosCuadrado = 15
var perimetroCuadrado = ladosCuadrado*4
var areaCuadrado = ladosCuadrado * ladosCuadrado
console.log("El perímetro es: " + perimetroCuadrado)
console.log("el área es: " + areaCuadrado)

// 5. Realice el algoritmo para calcular e informar el perímetro y el área del rectángulo.

var arribaAbajoRectangulo = 25
var ladosRactangulo = 13
var perimetroRectangulo = arribaAbajoRectangulo * 2 + ladosRactangulo * 2
var areaRectangulo = arribaAbajoRectangulo * ladosRactangulo
console.log("Perímetro del rectángulo: " + perimetroRectangulo)
console.log("Área del rectángulo: " + areaRectangulo)

// 6. Realice el algoritmo para calcular e informar el resto de la división entera entre los valores.

var valor1 = 10
var valor2 = 3
var restoDivision = valor1 % valor2
console.log("El resto de la división es: " + restoDivision)

// 7. Realice el algoritmo que arme y muestre el mensaje "Bienvenido", seguido del nombre y apellido del usuario.

var nombreBienvenido = "Robert"
var apellidoBienvenido = "Smith"
console.log("Bienvenido: " + nombreBienvenido + " " + apellidoBienvenido)

// 8. Realice el algoritmo para calcular e informar el perímetro y el área del círculo. Se considerará para este ejercicio que el valor de PI será 3.1416.

var radioCirculo = 10
var perimetroCirculo =  radioCirculo * (3.1416 *2)
var areaCirculo = 3.1416 * (radioCirculo*2)
console.log("El perímetro del círculo es: " + perimetroCirculo)
console.log("El área del círculo es: " + areaCirculo)