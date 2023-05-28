
async function GenerarEspecialidad(){
	try{
		const response = await fetch('http://localhost:3005/list_allEspecialidades');
		
		const data= await response.json();
		const element= document.getElementById("especialidad")
		let idCounter = 1; // Variable global para el id autoincremental

		data.forEach(especialidad => {
		const option = document.createElement("option");
		option.value = idCounter;
		option.textContent = especialidad.name;
		option.id = `${idCounter}`; // Asignar el id autoincremental
		element.appendChild(option);
		
		idCounter++; // Incrementar el contador de id
		});

		
	}catch(e){
		console.log(e);
	}
}

GenerarEspecialidad();