import inquirer from "inquirer";

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your full name?",
            name: "full name"
        },
        {
            type: "input",
            message: "Where do you live?",
            name: "location"
        },
        {
            type: "input",
            message: "Tell us a little about yourself.",
            name: "bio"
        },
        {
            type: "input",
            message: "What is your LinkedIn URL?",
            name: "LinkedIn"
        },
        {
            type: "input",
            message: "What is your GitHub URL?",
            name: "GitHub"
        }
    ])