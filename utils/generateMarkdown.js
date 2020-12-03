// function to generate markdown for README
function generateMarkdown(data) {
  let license;
  if (data.license === "MIT") {
    //   //use fs to read Develop\mitLicense.txt
    //   license = //
  }

  return `# ${data.title}
 
![badge](https://img.shields.io/badge/License-${data.license}-blue)

# Table of Contents

- [Description](#description)\n
- [Installation](#installation)\n
- [Usage](#usage)\n
- [License](#license)\n
- [Contributions](#contributionGuidelines)\n
- [Testing](#testInstructions)\n
- [Questions](#gitHubUsername)\n

# Description
 ${data.description}


# Installation 
${data.installation}


# Usage 
${data.usage}

# License
${license}


# Contributions 
${data.contributionGuidelines}

# Testing
${data.testInstructions}

# Questions 
[${data.gitHubUsername}](https://github.com/${data.gitHubUsername}/)
${data.email}`;
}

module.exports = generateMarkdown;
