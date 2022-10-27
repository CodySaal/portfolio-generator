import fs from "fs"
import inquirer from "inquirer";
import generateHTML from "./generateHTML.js"

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
            // generate HTML string
            const html = generateHTML(answers)
            console.log(html)
            // write (save) the file
            fs.writeFile("./portfolio.html", html, error => {
                if (error) throw error

                console.log("HTML saved!")
            })
        })
        .catch(error => console.log(error))
