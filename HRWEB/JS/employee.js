const Link = "https://improved-couscous-jj9vrjw4p656hj6rw-5005.app.github.dev/employeees";

fetch(Link).then(response=>{
    if(!response.ok){
        throw new Error ("Failed to Fetch Data");
    }
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#countrytable tbody");
    data.forEach(e=>{
        const row = document.createElement("tr");
        row.innerHTML= `
        <td>${e.employee_id}</td>
        <td>${e.first_name}</td>
        <td>${e.last_name}</td>
        <td>${e.salary}</td>
        <td>${e.commission_pct}</td>
        <td>${e.hire_date}</td>
        <td>${e.department_id}</td>
        <td>${e.last_name}</td>
        <td>${e.last_name}</td>
        `;
        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});