// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = ""
  if (license === "Apache"){
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"

  }else if(license==="Boost"){
    licenseBadge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"

  }else if(license==="BSD"){
    licenseBadge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

## Description
- ${data.description}

# Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contribution](#contribution)
4. [Test Instruction](#test_instruction)
5. [License](#license)
6. [Username](#username)
7. [Github](#github)
8. [Email](#email)


## Installation
- ${data.installation}

## Usage
- ${data.usage}

## Contribution
- ${data.contribution}

## Test Instruction
- ${data.test}

## License
- ${data.license}

## Username
- ${data.username}

## Github
- ${data.github}

## Email
- ${data.email}

## Questions
_If there are any questions_
- ${data.questions}
---

Please contact:

Email: 
[${data.email}](mailto:${data.email});

Website: [${data.website}](https://www.yahoo.com);
`;
}

module.exports = generateMarkdown;
