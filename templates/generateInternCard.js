function generateInternCard(data) {
    return `
    <div class="card rounded mx-4 my-2" style="width: 18rem;">
        <div class="card-header intern">
            <h1>${data.name}</h1>
            <h2><i class="fas fa-user-graduate"></i> Intern</h2>
        </div>
        <ul class="list-group list-group-flush p-2">
        <li class="list-group-item">ID: ${data.id}</li>
        <li class="list-group-item">Email: ${data.email}</li>
        <li class="list-group-item">School: ${data.school}</li>
        </ul>
    </div>
    `
}

module.exports = generateInternCard