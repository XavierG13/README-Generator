// packages
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user to make their choices and inputs
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is the project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a brief description: ",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide information of the installation process if any: ",
  },
  {
    type: "input",
    name: "usage",
    message: "Describe what this project is used for: ",
  },
  {
    type: "list",
    name: "license",
    message: "Chose the appropriate license for this project: ",
    choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
  },
  {
    type: "input",
    name: "contributing",
    message:
      "Please provide the github usernames if any, seperate multiple contributors with comma and no space: ",
  },
  {
    type: "input",
    name: "tests",
    message: "If test is included provide examples.",
  },
  {
    type: "input",
    name: "username",
    message: "Please enter your GitHub username: ",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email: ",
  },
];

// function to write README file
function writeToFile(file, data) {
  fs.writeFile(file, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("README.md has been generated.");
  });
}

// function to initialize program and write the generateMarkdown files responses 
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(generateMarkdown(response));

    writeToFile("README.md", generateMarkdown(response));
  });
}

// function call to initialize program
init();
