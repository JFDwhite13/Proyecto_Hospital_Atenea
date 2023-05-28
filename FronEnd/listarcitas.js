async function GenerateTable() {
	try {
	  const response = await fetch("http://localhost:3005/list_allcitas");
	  const data = await response.json();
  
	  const tbody = document.querySelector("#especies-table tbody");
	  console.log(data)
  
	  data.forEach((cita) => {
		const row = document.createElement("tr");
		row.innerHTML = `
		  <td>${cita.idcita}</td>
		  <td>${cita.patientname} ${cita.patientlastname}</td>
		  <td>${cita.doctorname} ${cita.doctorlastname}</td>
		  <td>${cita.especialidad}</td>`;

		tbody.appendChild(row);
	  });
	} catch (error) {
	  console.log("Error:", error);
	}
  }

  GenerateTable();
  