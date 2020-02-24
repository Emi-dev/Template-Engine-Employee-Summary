// function to generate the main HTML
function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <title>Employees</title>
            <style>
                body {
                    background-color: rgb(227, 231, 231);
                }
                .jumbotron {
                    color: darkslategray;
                    background-color: rgb(160, 236, 211);
                }
                .card {
                    float: left;
                }
                h2 {
                    font-size: large;
                }
                .manager {
                    color: rgb(243, 210, 215);
                    background-color: rgb(223, 46, 128);
                }
                .engineer {
                    color: rgb(229, 188, 229);
                    background-color: rgb(122, 24, 118);
                }
                .intern {
                    color: rgb(195, 238, 221);
                    background-color: rgb(37, 165, 101);
                }
                ul {
                    background-color: thistle;
                }
            </style>
        </head>
        <body class="d-flex flex-column">
            <div class="jumbotron text-center">
                <h1><i class="fas fa-users"></i></i> Employees</h1>
            </div>
            <div class="container row m-auto">
                ${data}
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/js/bootstrap.min.js"></script>
        </body>
    </html>`
}

module.exports = generateHTML;