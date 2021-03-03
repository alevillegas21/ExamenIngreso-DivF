
function mostrar()
{
	let nombre =''
	let i = 0
	let precio = 0
	let cant = 0
	let categ = ''
	let cant1 = 0;
	let cant2 = 0;
	let cant3 = 0;
	let categ1 = 0;
	let categ2 = 0;
	let categ3 = 0;
	let deterMenos200 = 0;
	let masCaro = 0;
	let catMasCaro = ''
	let fabMasCaro = ''
	let fabricante = ''
	
	while (i < 5) {
	
	
	while (nombre != 'ALCOHOL' && 
		nombre != 'IAC' && 
		nombre != 'QUAT' ) {
	
	nombre = prompt("Ingrese Nombre producto (ALCOHOL), (IAC) o (QUAT)");
	}
	
	precio= parseInt(prompt("Precio:"));
	while (precio < 100  || precio > 300) {
			
	precio = parseInt(prompt("ERROR: Precio:"));
	}
	
	
	cant= parseInt(prompt("Cantidad:"));
	while (cant < 1  || cant > 1000) {
			
	cant = parseInt(prompt("ERROR: Cantidad:"));
	}
	
	
	
	
	
	
	categ = prompt("Categoria (desinfectante, bactericida, detergente ) :");
	while (categ.toUpperCase() != "DESINFECTANTE" && categ.toUpperCase() != "BACTERICIDA" && categ.toUpperCase() != "DETERGENTE") {
			
	categ = prompt("ERROR: Categoria (desinfectante, bactericida, detergente ");
	}
	
	fabricante = prompt("fabricante: ");
	
	if (precio > masCaro) {
		masCaro = precio
		catMasCaro = categ
		fabMasCaro = fabricante
	}
	
	switch(categ.toUpperCase()) {
		case "DESINFECTANTE":
		categ1++
		break;
	
		case "BACTERICIDA":
		categ2++
		
		break;
	
		case "DETERGENTE":
		categ3++
		if (precio <= 200) {
			deterMenos200++
		}
		break;
	}
	
	switch(categ.toUpperCase()) {
		case "ALCOHOL":
		cant1++
		break;
	
		case "IAC":
		cant2++
		
		break;
	
		case "QUAT":
		cant3++
		break;
	}
	i++
	
	
	}
	
	
	console.log("Promedio tipo producto ALCOHOL: " + (cant1/5))
	console.log("Promedio tipo producto IAC: " + (cant2/5))
	console.log("Promedio tipo producto QUAT: " + (cant3/5))
	
	if (categ1 > categ2 && categ1 > categ3) {
		console.log("categoria con mas canteidad: DESINFECTANTE" )
	}
	else if (categ2 > categ3) {
	console.log("categoria con mas canteidad: BACTERICIDA" )
	}
	else {
		console.log("categoria con mas canteidad: DETERGENTE" )
	}
	
	console.log("Cantidad de detergentes de menos a 200 (inclusive) : " + deterMenos200)
	
	
	console.log("Precio mas caro es: " + masCaro)
	console.log("Fabricante del producto mas caro es: " + fabMasCaro)
	console.log("Categoria producto mas caro es: " + catMasCaro)
}
