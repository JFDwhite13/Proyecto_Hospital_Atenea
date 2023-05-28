async function GenerarDoctor(){
	try{
		const id = parseInt(document.getElementById("especialidad").value);
		const response = await fetch('http://localhost:3005/list_alldoctors/'+id);
		
		const data= await response.json();
		console.log(data)
		const element= document.getElementById("doctor")
		element.innerHTML=`<label for="doctor" class="mt-4">Doctor:</label>
		<select id="doctor2" class="form-control" required>
			<option value="" id="1">Seleccionar especialidad</option>
		</select>`
		const element2=document.getElementById("doctor2") 

		data.forEach(doctor => {
		const option = document.createElement("option");
		option.value = doctor.iddoctor;
		option.textContent = (`${doctor.doctorname} ${doctor.doctorlastname}`);
		option.id = `"${doctor.iddoctor}"`
		element2.appendChild(option);
		});

		const btn2=document.getElementById("submit")
		btn2.disabled=false;
	}catch(e){
		console.log(e);
	}
}
const btn = document.getElementById("submit-d")
btn.addEventListener('click', (event)=>{
	event.preventDefault();
	GenerarDoctor();
})