function mostrar()
{
	let nombre;
	let obraSocial;
	let edad;
	let temperatura;
	let sexo;
	let contadorOSDEmas60 = 0;
	let nombreMujerMasJoven = 0;
	let temperaturaMujerMasJoven = 0;
    let edadMasJoven = 0;
	let valorViajeSindescuento = 0;
    let numeroTotalPasajeros=0;
    let numeroPsajerosPAMI =0;
	let ValorFinalConDescuento=0;
    let flag = 1;

	do{
		nombre = prompt("Ingrese el nombre");
		edad = parseInt(prompt("Ingrese la edad"));
		while(isNaN(edad) || edad < 17 ){
			edad = parseInt(prompt("Error. Ingrese la edad. solo mayores de edad"));
		}
		sexo = prompt("Ingrese el sexo (f o m)");
		while(isNaN(sexo) == false || sexo != "f" && sexo != "m"){
			sexo = prompt("Error. Ingrese el sexo (f o m)");
		}
		obraSocial = prompt("Ingrese la obra social (OSDE, PAMI, otras)");
		while(isNaN(obraSocial) == false || obraSocial != "OSDE" && obraSocial != "PAMI" && obraSocial != "otras"){
			obraSocial = prompt("Error. Ingrese la obra social (OSDE, PAMI, otras)");
		}
		temperatura = parseFloat(prompt("Ingrese la temperatura"));
		while(isNaN(temperatura) || temperatura < 35){
			temperatura = parseFloat(prompt("Error. Ingrese la temperatura"));
		}

        if(obraSocial == "OSDE"  && edad > 60){
            contadorOSDEmas60 = contadorOSDEmas60 + 1;
        }
        if(obraSocial == "PAMI" ){
            numeroPsajerosPAMI = numeroPsajerosPAMI + 1;
        }
        if(sexo == "f"  && ( edad < edadMasJoven || flag)){
            edadMasJoven = edad;
            nombreMujerMasJoven= nombre;
            temperaturaMujerMasJoven= temperatura;
            flag = 0;
        }
        numeroTotalPasajeros = numeroTotalPasajeros+1;

        valorViajeSindescuento = valorViajeSindescuento + 600;
		seguir = prompt("Desea ingresesar un dato más?")
		}while(seguir == "si");
	if(numeroPsajerosPAMI > numeroTotalPasajeros/2){
        ValorFinalConDescuento = valorViajeSindescuento * 0.75;
	}


	console.log(" La cantidad de personas con OSDE de mas de 60 años. " + contadorOSDEmas60);
	console.log(" La mujer  mas joven. es "+ nombreMujerMasJoven+ " y su edad es " + edadMasJoven);
	console.log(" Valor del viaje sin descuento: " + valorViajeSindescuento);
    if(numeroPsajerosPAMI > numeroTotalPasajeros/2){
        console.log("Valor del viaje con descuento "+ ValorFinalConDescuento)
    }	
}
