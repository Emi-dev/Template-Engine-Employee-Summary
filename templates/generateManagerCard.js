// function to generate the Manager card
function generateManagerCard(data) {
    return `
    <div class="card col-xs-12 col-sm-12 col-md-5 col-lg-3 rounded shadow h-100 mx-4 my-2 p-0" style="width: 18rem;">
        <div class="card-header manager">
            <h1>${data.name}</h1>
            <h2><i class="fas fa-mug-hot"></i> Manager</h2>
        </div>
        <ul class="list-group list-group-flush p-2">
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">Email: ${data.email}</li>
            <li class="list-group-item">Office: ${data.officeNumber}</li>
        </ul>
    </div>
    `
}

module.exports = generateManagerCard;