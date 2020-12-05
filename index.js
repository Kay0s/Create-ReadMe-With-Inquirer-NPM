//
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const getLicense = require("./utils/getLicense");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Please type a description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please type installation instructions.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please type the usage information.",
  },
  {
    type: "input",
    name: "contributions",
    message: "Please type the contribution guidelines.",
  },
  {
    type: "input",
    name: "tests",
    message: "Please type the test instructions.",
  },
  {
    type: "list",
    name: "license",
    message: "Please select the license for application.",
    choices: ["Apache", "MIT", "GNU GPLv3"],
  },
  {
    type: "input",
    name: "git",
    message: "Please type your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email.",
  },
];

// function to write README file
function writeToFile(fileName, answers) {
  fs.writeFile(fileName, answers, (err) => {
    if (err) {
      console.log(error, "Please resubmit your answers.");
    }
  });
}

// function to initialize program
const init = () => {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers, "Success!  README.md generated");
    const licenseInfo = getLicense(answers);
    writeToFile("createdReadMe.md", generateMarkdown(answers, licenseInfo));
  });
};

// function call to initialize program
init();
