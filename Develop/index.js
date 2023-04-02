// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");
// TODO: Create an array of questions for user input
const questions = [  {
    // name = what key will the answer to this question be saved in
    name: 'Professional README Generator',
  //  message = what message will be displayed to the user when this question is being asked
    message: 'What is your username?',
    type: 'input',

  },
  {
    name: 'password',
    message: 'What do you want your password to be?',
    type: 'password',
  },
  {
    name: 'pokemon',
    message: 'Which pokemon do you want to choose?',
    type: 'list',
    choices: ['Bulbasaur', 'Squirtle', 'Charmander'],
  },
  {
    name: 'license',
    message: 'What is your preferred way of communication?',
    type: 'rawlist',
    choices: [
      'Cell phone',
      'Email',
      'Smoke signals',
      'Carrier pidgeon',
      'Semaphor',
      'Telekenises',
      'Telegraph',
      'Morse code',
      'Passive aggressive comments',
      'Memes',
      'Emojis'
    ],
  },
    {
    name: 'languages',
    message: 'What languages do you know?',
    type: 'checkbox',
    choices: [
      'JS',
      'TS',
      'HTML',
      'English',
      'Spanish',
    ]
  }];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        writeToFile("readme.md", generateMarkdown(answers));
      });
      
}

// Function call to initialize app
init();
