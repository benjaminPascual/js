function pedirDato(mensaje) {
	return prompt(mensaje);
}
function pedirNumero(mensaje) {
	return parseInt(prompt(mensaje));
}
function multiplicadorNeto() {
	let porcentaje = pedirNumero("ingrese el porcentaje de ganancia que desea");
		return ganancia = 1 + (porcentaje/100)
}

const productos = [ ]

let precio = 0
let ganancia = 0
let inicio = pedirDato("desea calcular el precio de un producto? (si/no)");

do{
	if (inicio ==="si" || inicio==="no") {
		while(inicio == "si"){
			
			let cantidad = pedirNumero("ingrese la candidad de productos a calcular");
			multiplicadorNeto();

			do{
				let nuevoProducto = {Nombre: pedirDato("ingrese el nombre del producto"), Precio: pedirNumero("ingrese el costo del producto")*ganancia};
				productos.push(nuevoProducto);
				console.log(productos[productos.length - 1])
			}while(productos.length != cantidad)

			inicio = pedirDato("se te olvido algun producto? desea agregar mas? (si/no)");
		}
	} else{
		alert("su respuesta debe ser si o no")
		inicio = pedirDato("desea calcular el precio de un producto? (si/no)");
	}
}while(inicio ==="si")



/*do{
	if (inicio ==="si" || inicio==="no") {
		while(inicio == "si"){
			let cantidad = pedirNumero("ingrese la candidad de productos a calcular");
			multiplicadorNeto();

			for (i = 0; i < cantidad; i++) {

				let producto = pedirDato("ingrese el nombre del producto")
				let costo = pedirNumero("ingrese el costo del producto");
					precio = costo*ganancia
				console.log("el precio de "+producto+" es "+precio)
				
			}

			inicio = pedirDato("se te olvido algun producto? desea agregar mas? (si/no)");
		}
	} else{
		alert("su respuesta debe ser si o no")
		inicio = pedirDato("desea calcular el precio de un producto? (si/no)");
	}
}while(inicio ==="si")*/