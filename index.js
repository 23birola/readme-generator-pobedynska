const fs = require("fs");
const inquirer = require("inquirer");
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a brief description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use your project?',
    },
      {
      type: 'list',
      name: 'license',
      message: 'What is the license for your project?',
       choices: ['Apache', 'MIT', 'GNU',  'GPL', 'BSD','LGPL', 'MPL'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can others contribute to your project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What tests have you written for your project?',
  },
    {
      type: 'input',
      name: 'username',
      message: 'What is your gitHub username?',
  },
     {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
];

const writeFileAsync = util.promisify(fs.writeFile);
const promptProject = () =>
  inquirer.prompt(questions);

// function to write README file
//function writeToFile('README.md', data) {
//}

// function to initialize program
function init() {
  promptProject()
  .then((data) => writeFileAsync('outfiles/README.md', generateMarkdown(data)))
  .then(() => console.log('Successfully wrote to index.html'))
  .catch((err) => console.error(err));
}

// function call to initialize program
init();
