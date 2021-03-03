function mostrar()
{
  let nombre;
	let situacionLaboral;
	let edad;
	let cantidadMaterias;
	let sexo;
	let nota = 0;
	let mejorProemdio = 0;
    let nombreMejorPromedio = "";
	let mayorEdadEstudiante = 0;
    let nombreMayorEstudiante="";
    let promedioAcumuladoBuscando = 0;
    let cantidadBuscando;
    let promediotrabajando;
    let cantidadTrabajando;
    let promedioEstudiante
    let cantidadEstudiante;

	do{
		nombre = prompt("Ingrese el nombre");
        situacionLaboral = prompt("Ingrese la situacion laboral (buscando , trabajando, solo estudiante)");
		while(isNaN(situacionLaboral) == false || situacionLaboral != "buscando" && situacionLaboral != "trabajando" && situacionLaboral != "solo estudiante"){
			situacionLaboral = prompt("Error. Ingrese la obra social (OSDE, PAMI, otras)");
		}
		edad = parseInt(prompt("Ingrese la edad"));
		while(isNaN(edad) || edad < 17 ){
			edad = parseInt(prompt("Error. Ingrese la edad. solo mayores de edad"));
		}

		sexo = prompt("Ingrese el sexo (f o m)");
		while(isNaN(sexo) == false || sexo != 'f' && sexo != 'm'){
			sexo = prompt("Error. Ingrese el sexo (f o m)");
		}

		cantidadMaterias = parseInt(prompt("Ingrese la cantidad de materias"));
		while(isNaN(cantidadMaterias) || cantidadMaterias < 0 || cantidadMaterias >8){
			cantidadMaterias = parseFloat(prompt("Error. Ingrese la cantidad de materia"));
		}
		promedio = parseFloat(prompt("Ingrese promedio"));
		while(isNaN(promedio) || promedio < 0 || promedio >10){
			cantidadMaterias = parseFloat(prompt("Error. Ingrese promedio"));
		}
        if(promedio < mejorProemdio && (situacionLaboral == "buscando" || situacionLaboral == "solo estudiante")){
            mejorProemdio = promedio;
            nombreMejorPromedio = nombre;
        }
        if(edad > mayorEdadEstudiante && situacionLaboral == "solo estudiante" ){
           mayorEdadEstudiante = edad;
           nombreMayorEstudiante = nombre;
        }
        if(situacionLaboral == "buscando"){
            cantidadBuscando = cantidadBuscando+1;
            promedioAcumuladoBuscando = promedioAcumuladoBuscando + promedio;
        }
        if(situacionLaboral == "trabajando"){
            cantidadTrabajando = cantidadTrabajando+1;
            promediotrabajando = promediotrabajando + promedio;
        }
        if(situacionLaboral == "solo estudiante"){
            cantidadEstudiante = cantidadEstudiante+1;
            promedioEstudiante = promedioEstudiante + promedio;
        }
     
		}while(seguir == "si");
	if(numeroPsajerosPAMI > numeroTotalPasajeros/2){
        ValorFinalConDescuento = valorViajeSindescuento * 0.75;
	}

    if(nombreMejorPromedio)
	    console.log(" A - Nombre del mejor promedio que está buscando o trabajando  " + nombreMejorPromedio);
    else
        console.log(" A - No existe mejor promedio que está buscando o trabajando");
        
    if(nombreMayorEstudiante)
	    console.log(" B - Nombre del mas viejo solo estudiante  " + nombreMayorEstudiante);
    else
        console.log(" B - No existe mas viejo solo estudiante");
	console.log(" C - Promedio de nota situación buscando " + (promedioAcumuladoBuscando/cantidadBuscando)) ;

	console.log(" D - Promedio de nota situación trabajando " +(promediotrabajando/cantidadTrabajando) );

    console.log(" E - proemdio de nota situación solo estudiante " (promedioEstudiante/cantidadEstudiante));

}
