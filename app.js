// import core modules
const fs = require("fs");
const inquirer = require("inquirer");
// import classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// import questions object
const questions = require("./lib/questions");
// import functions
const html = require("./templates/generateHTML");
const managerCard = require("./templates/generateManagerCard");
const engineerCard = require("./templates/generateEngineerCard");
const internCard = require("./templates/generateInternCard");

async function init() {
    try {
        let id = 1; // initialize the id variable with 1
        let employeeCards = ""; // variable to add the employees' cards html
        let addMore = true; // initialize the flag variable to add an employee

        while(addMore) {
            const employeeData = await inquirer.prompt(questions.employee);
            switch(employeeData.role) { // switch by the role (Manager or Engineer or Intern)
                case "Manager":
                    const managerData = await inquirer.prompt(questions.manager);
                    const manager = new Manager(employeeData.name, id, `${employeeData.name.replace(/\s/g, "")}@abc.com`, managerData.officeNumber);
                    employeeCards += managerCard(manager);
                    break;
                case "Engineer":
                    const engineerData = await inquirer.prompt(questions.engineer);
                    const engineer = new Engineer(employeeData.name, id, `${employeeData.name.replace(/\s/g, "")}@abc.com`, engineerData.github);
                    employeeCards += engineerCard(engineer);
                    break;
                case "Intern":
                    const internData = await inquirer.prompt(questions.intern);
                    const intern = new Intern(employeeData.name, id, `${employeeData.name.replace(/\s/g, "")}@abc.com`, internData.school);
                    employeeCards += internCard(intern);
                    break;
            }
            const addEmployee = await inquirer.prompt(questions.addEmployee);
            if(!addEmployee.yes) addMore = false;
            id++;
        }
        
        fs.writeFile("./output/team.html", html(employeeCards), function(err) {
            if(err) return console.log(err);
            console.log("team.html file successfully created!");
          
        });
    } catch(err) {
        console.log(err);
    }
}

init();