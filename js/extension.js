function pedir(mensaje) {
	return prompt(mensaje);
}
function pedirNumero(mensaje) {
	return parseInt(mensaje);
}
function multiplicadorNeto() {
	let porcentaje = pedirNumero(pedir("ingrese el porcentaje de ganancia que desea"));
		return ganancia = 1 + (porcentaje/100)
}

let precio = 0
let ganancia = 0
let inicio = pedir("desea calcular el precio de un producto? (si/no)");

while(inicio == "si"){
	let cantidad = pedirNumero(pedir("ingrese la candidad de productos a calcular"));
	multiplicadorNeto();

	for (i = 0; i < cantidad; i++) {

		let producto = pedir("ingrese el nombre del producto")
		let costo = pedirNumero(pedir("ingrese el costo del producto"));
			precio = costo*ganancia
		console.log("el precio de "+producto+" es "+precio)
		
	}

	inicio = pedir("se te olvido algun producto? desea agregar mas? (si/no)");
}