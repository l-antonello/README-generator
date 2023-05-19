// declare variables
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input - done
const questions = [
    // title prompt
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
       
    },
    // description prompt
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project.",
       
    },

    // installation prompt
    {
        type: "input",
        name: "installation",
        message: "Enter your installation instructions",
       
    },

    // usage prompt
    {
        type: "input",
        name: "usage",
        message: "Enter how your program is used",
       
    },

    // license prompt
    {
        type: "list",
        name: "license",
        message: "Please select a license for this project.",
        choices: [
            "MIT",
            "GNU",
            "Apache",
            "Boost",
            "Mozilla",
            "No License"
        ],
       
    },

    // contribution prompt
    {
        type: "input",
        name: "contributing",
        message: "How can users contribute to your project.",
       
    },

    // test prompt
    {
        type: "input",
        name: "tests",
        message: "Please enter any testing instructions you would like to provide for this project.",
      
    },

    // github username prompt
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
    },

    // email address prompt
    {
        type: "input",
        name: "userEmail",
        message: "What is your GitHub email address that contributors may contact?",
        validate: function (value) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                return true;
            } else {
                return "Not a valid email address. Please enter a valid email address.";
            }
        },
    },
];


// TODO: Create a function to write README file -done; 
// generates README
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

function init(){
    inquirer.prompt(questions).then((answers)=> {
        writeToFile('README.md', generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
