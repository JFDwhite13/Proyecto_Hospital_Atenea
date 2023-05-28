

function crearCita() {
	const idpatient = parseInt(document.getElementById("identificador").value);
	const especialidad = document.getElementById("especialidad").value;
	const iddoctor = parseInt(document.getElementById("doctor2").value);


	const datos = {
		idespecialidad: especialidad,
		doctorIdcardn: iddoctor.toString(),
		pacienteIdn: idpatient.toString(),
	};

	return datos;
}

async function SendForm(){
	try{
		const datos =crearCita();
		const options={
			method:"POST",
			body:JSON.stringify(datos),
			headers:{'Content-type':'application/json'}
		}
		const send = await fetch("http://localhost:3005/create_cita",options)
		const response = await send.json();
		const result= document.getElementById("result")
        result.innerHTML=JSON.stringify(response)

	}catch(e){
		console.log(e)
	}
	
}



const btn2 = document.getElementById("submit")
btn2.addEventListener('click', (event)=>{
	event.preventDefault();
	SendForm();
})
