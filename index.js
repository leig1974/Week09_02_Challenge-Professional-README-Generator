// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");
// TODO: Create an array of questions for user input
const questions = [  {
    // name = what key will the answer to this question be saved in
    name: 'title',
  //  message = what message will be displayed to the user when this question is being asked
    message: 'What is Project Title?',
    type: 'input',
  },
  {
    name: 'description',
    message: 'What is the description of the project?',
    type: 'input',
  },
  {
    name: 'installation',
    message: 'What are installation instructions?',
    type: 'input',
  },
  {
    name: 'usage',
    message: 'What is usage information?',
    type: 'input',
  },
{
    name: 'contribution',
    message: 'What are the contribution guidelines?',
    type: 'input',
  },
  {
    name: 'test',
    message: 'What are test instructions?',
    type: 'input',
  },
   
    {
    name: 'license',
    message: 'Please select license for Your Project?',
    type: 'list',
    choices: [
      'Apache',
      'Boost',
      'BSD'
    ]
  },
  {
    name: 'username',
    message: 'What is username?',
    type: 'input',
  },
  {
    name: 'github',
    message: 'What is Your github link?',
    type: 'input',
  },
  {
  name: 'email',
  message: 'What is Your email?',
  type: 'input',
},
{
  name: 'questions',
  message: 'please contact me with quesitons?',
  type: 'input',
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        writeToFile("./dist/readme.md", generateMarkdown(answers));
      });
      
}

// Function call to initialize app
init();

