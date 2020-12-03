// I create the variables needed to ask questions, store responses, and generate the ReadMe.md
const questions = require('inquirer');
var generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// array of questions for user


// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }
  
    console.log("Success! Your README.md file has been generated")
});
}


// function to initialize program
function init() {
    questions
    .prompt([
      {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What is the link to your repository?',
        name: 'repositoryLink',
      },
      {
        type: 'input',
        message: 'What is your Github User-Name?',
        name: 'userName',
      },
      {
        type: 'input',
        message: 'If someone has a question for the creator, who should they reach out to? (Please provide and email)',
        name: 'Email',
      },
      {
        type: 'input',
        message: 'What is the description for your project? ',
        name: 'Description',
      },
      {
        type: 'input',
        message: 'What are the uses for your project? ',
        name: 'Uses',
      },
      {
        type: 'input',
        message: 'What steps would a user need to take in order to install this locally?',
        name: 'installationSteps',
      },
      {
        type: 'list',
        message: "Please choose the license that you used for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3','ISC', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'licenses'
      },
      {
        type: 'input',
        message: 'Who are the contributing members for this project?',
        name: 'contributors',
      },
      {
        type: 'input',
        message: 'What tests have been run on this project?',
        name: 'tests',
      }
])
    .then((response) => {
      
    const markdown = generateMarkdown(response);
    writeToFile("README.md",markdown)
    })
        
}

// function call to initialize program
init();
