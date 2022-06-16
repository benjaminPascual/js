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

			const agregarProducto = (nombreProducto, costoProducto, categoriaProducto) => {
					let nuevoProducto = {
						Id: productos.length + 1,
						Nombre: nombreProducto,
						Categoria: categoriaProducto,
						Costo: costoProducto,
						Precio: costoProducto*ganancia,
					}
			productos.push(nuevoProducto)
			}

			do{
				let nombre = pedirDato("ingrese el nombre del producto")
				let costo = pedirNumero("ingrese el costo del producto")
				let categoria = pedirDato("ingrese la categoria del producto")
				agregarProducto(nombre,costo,categoria)
				console.log(productos[productos.length - 1])
			}while(productos.length != cantidad)

			inicio = pedirDato("se te olvido algun producto? desea agregar mas? (si/no)");
		}

	} else{
		alert("su respuesta debe ser si o no")
		inicio = pedirDato("desea calcular el precio de un producto? (si/no)");
	}
}while(inicio ==="si")

let inicio2 = pedirDato("desea aumentar el precio de una categoria? (si/no)");
do{
	if (inicio2 ==="si" || inicio2==="no") {
		while(inicio2 == "si"){
			
			let categoriaSolicitada = pedirDato("ingrese la categoria que desea aumentar")
			let nuevoArray = productos.filter((el)=> el.Categoria.includes(categoriaSolicitada))

			const actualizado = nuevoArray.map((el) => {
				return {
					Id: el.Id,
					Nombre: el.Nombre,
					Categoria: el.Categoria,
					Costo: el.Costo,
					Precio: el.Precio*1.10,
				}
			})

			console.log(actualizado)

			inicio2 = pedirDato("se te olvido algun producto? desea agregar mas? (si/no)");
		}

	} else{
		alert("su respuesta debe ser si o no")
		inicio2 = pedirDato("desea calcular el precio de un producto? (si/no)");
	}
}while(inicio2 ==="si")
