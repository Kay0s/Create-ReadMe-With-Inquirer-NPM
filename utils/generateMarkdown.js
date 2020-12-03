// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
# https://img.shields.io/badge/${data.license}
# Title of Contents
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
 ${data.license}


# Contriubtions 
${data.contributionGuidelines}

# Testing
${data.testInstructions}

# Questions 
${data.gitHubUsername}
${data.email}`;
}

module.exports = generateMarkdown;
