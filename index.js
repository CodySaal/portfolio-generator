import inquirer from "inquirer";

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your full name?",
            name: "name"
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
            name: "linkedinURL"
        },
        {
            type: "input",
            message: "What is your GitHub URL?",
            name: "githubURL"
        }
    ])
        .then((answers) => {
            console.log(answers)
        })
        .catch(error => console.log(error))
