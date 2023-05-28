async function GenerateTable() {
	try {
	  const response = await fetch("http://localhost:3005/list_allpatients");
	  const data = await response.json();
  
	  const tbody = document.querySelector("#especies-table tbody");
  
	  data.forEach((paciente) => {
		const row = document.createElement("tr");
		row.innerHTML = `
		  <td>${paciente.id}</td>
		  <td>${paciente.name}</td>
		  <td>${paciente.lastname}</td>
		  <td>${calculateAge(paciente.birthday)}</td>
		  <td>${paciente.number}</td>`;
		tbody.appendChild(row);
	  });
	} catch (error) {
	  console.log("Error:", error);
	}
  }
  
  function calculateAge(birthday) {
	const birthDate = new Date(birthday);
	const currentDate = new Date();
  
	let age = currentDate.getFullYear() - birthDate.getFullYear();
  
	// Verificar si aún no se ha cumplido el aniversario de este año
	const currentMonth = currentDate.getMonth() + 1;
	const birthMonth = birthDate.getMonth() + 1;
	const currentDay = currentDate.getDate();
	const birthDay = birthDate.getDate();
  
	if (birthMonth > currentMonth || (birthMonth === currentMonth && birthDay > currentDay)) {
	  age--;
	}
  
	return age;
  }
  
  
  GenerateTable();
  