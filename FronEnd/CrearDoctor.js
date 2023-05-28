const button = document.getElementById("sub");

function crearDoctor() {
	const idcard = parseInt(document.getElementById("identificador").value);
	const name = document.getElementById("nombre").value;
	const lastname = document.getElementById("apellido").value;
	const especialidadId = parseInt(document.getElementById("especialidad").value);
	const consultationroomname = document.getElementById("consultorio").value;
	const email = document.getElementById("correo").value;

	const datos = {
		idcardn: idcard.toString(),
		name: name,
		lastname: lastname,
		especialidadId: especialidadId,
		consultationroomname: consultationroomname,
		email: email
	};

	return datos;
}

async function SendForm(){
	try{
		const datos =crearDoctor();
		const options={
			method:"POST",
			body:JSON.stringify(datos),
			headers:{'Content-type':'application/json'}
		}
		const send = await fetch("http://localhost:3005/create_doctor",options)
		const response = await send.json();
		const result= document.getElementById("result")
        result.innerHTML=JSON.stringify(response)

	}catch(e){
		console.log(e)
	}
	
}

button.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(crearDoctor());
  SendForm();
});
