// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
![badge](https://img.shields.io/badge/License-${data.license}-blue)

# Table of Contents
1.[Description](#description)\n
2.[Installation](#installationInstructions)\n
3.[Usage](#usageInformation)\n
4.[License](#license)\n
5.[Contributions](#contributionGuidelines)\n
6.[Testing](#testInstructions)\n
7.[Questions](#gitHubUsername)\n

# Description
 ${data.description}


# Installation 
${data.installationInstructions}


# Usage 
${data.usageInformation}

# License
if {
  ${data.license} ==== MIT(Develop\mitLicense.txt)
}


# Contriubtions 
${data.contributionGuidelines}

# Testing
${data.testInstructions}

# Questions 
![GitHub Profile](https://github.com/${data.gitHubUsername})
${data.email}`;
}

module.exports = generateMarkdown;
