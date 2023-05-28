async function GenerateTable(){
    const request = await fetch("http://localhost:3005/list_alldoctors");
    const data = await request.json();
    data.forEach((doctor)=>{
        const tbody = document.querySelector("#especies-table tbody");
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${doctor.idcard}</td>
          <td>${doctor.name}</td>
          <td>${doctor.lastname}</td>
          <td>${doctor.consultationroomname}</td>
          <td>${doctor.correo}</td>
		  <td>${doctor.area}</td>`;
        tbody.appendChild(row);
    });

}
GenerateTable();