// declare variables
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create a function to write README file -done; if/else for 5 licenses 
function getLicense(value) {
     if (value === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (value === "GNU GPLv3") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    } else if (value === "Apache 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (value === "Boost Software 1.0") {
        return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    } else {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }
}

// TODO: Create an array of questions for user input - done
const questions = [
// title prompt
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: validateInput,
    },
    // description prompt
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project.",
        validate: validateInput,
    },

    // installation prompt
    {
        type: "input",
        name: "installation",
        message: "Enter your installation instructions",
        validate: validateInput,
    },

    // usage prompt
    {
        type: "input",
        name: "usage",
        message: "Enter how your program is used",
        validate: validateInput,
    },

    // license prompt
    {
        type: "list",
        name: "license",
        message: "Please select a license for this project.",
        choices: [
            "MIT",
            "GNU GPLv3",
            "Apache 2.0",
            "Boost Software 1.0",
            "Mozilla",
        ],
        validate: validateInput,
    },

    // contribution prompt
    {
        type: "input",
        name: "contributing",
        message: "How can users contribute to your project.",
        validate: validateInput,
    },

    // test prompt
    {
        type: "input",
        name: "tests",
        message: "Please enter any testing instructions you would like to provide for this project.",
        validate: validateInput,
    },

    // github username prompt
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
        validate: validateInput,
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


// generates README
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

// Function call to initialize app
init();
