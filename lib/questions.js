questions = {
    employee: [
        {
            type: "input",
            name: "name",
            message: "Enter the employee's name:"
        },
        {
            type: "list",
            name: "role",
            message: "Choose the employee's role:",
            choices: ["Manager", "Engineer", "Intern"]
        }
    ],

    manager: [
        {
            type: "input",
            name: "officeNumber",
            message: "Enter the employee's office number:"
        }
    ],

    engineer: [
        {
            type: "input",
            name: "github",
            message: "Enter the employee's GitHub ID:"
        }
    ],

    intern: [
        {
            type: "input",
            name: "school",
            message: "Enter the employee's school name:"
        }
    ],

    addEmployee: [
        {
            type: "confirm",
            name: "yes",
            message: "Do you have an employee to add?"
        },
    ]
}

module.exports = questions;