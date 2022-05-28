let precio = 0
let ganancia = 0
let inicio = prompt( "desea calcular el precio de un producto? (si/no)")
while(inicio == "si"){
	let cantidad = parseInt( prompt("ingrese la candidad de productos a calcular"))
	let porcentaje = parseInt( prompt("ingrese el porcentaje de ganancia que desea"))
		ganancia = 1 + (porcentaje/100)

	for (i = 0; i < cantidad; i++) {

		let producto = prompt("ingrese el nombre del producto")
		let costo = parseInt( prompt("ingrese el costo del producto"))
			precio = costo*ganancia
		console.log("el precio de "+producto+"es"+precio+"(porcentaje%)")
		
	}

	inicio = prompt("se te olvido algun producto? desea agregar mas? (si/no)")
}