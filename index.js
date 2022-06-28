// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        // project file name
        type: 'input',
        message: 'Enter the filename of your project',
        name: 'filename',
    },
    {
        // title of project
        type: 'input',
        message: 'Enter the title of your project',
        name: 'title',
    },
    {
        // deployed URL
        type: 'input',
        message: 'Enter the deployed link to the project (if applicable)',
        name: 'deployedURL',
    },
    {
        // description
        type: 'input',
        message: 'Enter a desciption of the project',
        name: 'description',
    },
    {
        // install
        type: 'input',
        message: 'Enter the install method',
        name: 'install',
    },
    {
        // install code
        type: 'input',
        message: 'Enter an example of an installation code (if applicable)',
        name: 'install_code',
    },
    {
        // usage
        type: 'input',
        message: 'Enter information about project usage',
        name: 'usage',
    },
    {
        // usage code
        type: 'input',
        message: 'Enter an example of usage code (if applicable)',
        name: 'usage_code',
    },
    {
        // licesne
        type: 'list',
        message: 'Choose a license for the project',
        name: 'license',
        choices: [
            "None",
            "Apache 2.0 License",
            "BSD 3-Clause License",
            "MIT License",
            "IBM Public License Version 1.0",
        ]
    },
    {
        // tests
        type: 'input',
        message: 'Enter test conditions',
        name: 'test',
    },
    {
        // contributions
        type: 'input',
        message: 'Enter your projects contribution preferences',
        name: 'contributions',
    },
    {
        // github username
        type: 'input',
        message: 'Enter your gitHub username',
        name: 'github_username',
    },
    {
        // email
        type: 'input',
        message: 'Enter your prefered contact email address',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        fs.writeFile(`${fileName}.md`, generateMarkdown(data), (err) =>
            err ? console.error("error") : console.log("Data captured!"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) =>
            writeToFile(response.fileName, response)
        );
}

// Function call to initialize app
init();
