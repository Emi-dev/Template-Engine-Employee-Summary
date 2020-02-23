const fs = require("fs");
const inquirer = require("inquirer");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./lib/questions");

const html = require("./templates/generateHTML");
const managerCard = require("./templates/generateManagerCard");
const engineerCard = require("./templates/generateEngineerCard");
const internCard = require("./templates/generateInternCard");

async function init() {
    try {
        let id = 1;
        let employeeCards = "";
        let addMore = true;

        while(addMore) {
            const employeeData = await inquirer.prompt(questions.employee);
            console.log(employeeData.role);
            switch(employeeData.role) {
                case "Manager":
                    const managerData = await inquirer.prompt(questions.manager);
                    const manager = new Manager(employeeData.name, id, `${employeeData.name.replace(/\s/g, "")}@abc.com`, managerData.officeNumber);
                    employeeCards += managerCard(manager);
                    console.log(employeeCards);
                    break;
                case "Engineer":
                    const engineerData = await inquirer.prompt(questions.engineer);
                    const engineer = new Engineer(employeeData.name, id, `${employeeData.name.replace(/\s/g, "")}@abc.com`, engineerData.github);
                    employeeCards += engineerCard(engineer);
                    console.log(employeeCards);
                    break;
                case "Intern":
                    const internData = await inquirer.prompt(questions.intern);
                    const intern = new Intern(employeeData.name, id, `${employeeData.name.replace(/\s/g, "")}@abc.com`, internData.school);
                    employeeCards += internCard(intern);
                    console.log(employeeCards);
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