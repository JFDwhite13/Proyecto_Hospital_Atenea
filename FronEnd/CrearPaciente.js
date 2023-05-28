const button = document.getElementById("sub");

function crearPaciente() {
	const id = parseInt(document.getElementById("identificador").value);
	const name = document.getElementById("nombre").value;
	const lastname = document.getElementById("apellido").value;
	const birthday = document.getElementById("birthday").value;
	const number = document.getElementById("Telefono").value;

	const datos = {
		idn: id.toString(),
		name: name,
		lastname: lastname,
		birthday: birthday,
		number: number,
	};
	return datos;
}

async function SendForm(){
	try{
		const datos =crearPaciente();
		const options={
			method:"POST",
			body:JSON.stringify(datos),
			headers:{'Content-type':'application/json'}
		}
		const send = await fetch("http://localhost:3005/create_patient",options)
		const response = await send.json();
		const result= document.getElementById("result")
        result.innerHTML=JSON.stringify(response)

	}catch(e){
		console.log(e)
	}
	
}

button.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(crearPaciente());
  SendForm();
});