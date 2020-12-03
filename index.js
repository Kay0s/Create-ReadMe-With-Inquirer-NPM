//
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
    name: "contribution",
    message: "Please type the contribution guidelines.",
  },
  {
    type: "input",
    name: "test",
    message: "Please type the test instructions.",
  },
  {
    type: "list",
    name: "license",
    message: "Please select the license for application.",
    choices: ["MIT", "GNU GPLv3"],
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
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(error, "Please resubmit your answers.");
    }
  });
}

// function to initialize program
const init = () => {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers, "Success!  README.md generated");
    writeToFile("createdReadMe.md", generateMarkdown(answers));
  });
};

// function call to initialize program
init();

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// ```

//links = screencastify and GitHub repository

//create a .gitignore files (npm modules/mode_modles bin build .DS_Store *.exe, node.gitignore)
