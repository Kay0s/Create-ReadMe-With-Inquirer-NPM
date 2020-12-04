//function to generate markdown
function generateMarkdown(answers, licenseInfo) {
  return `# ${answers.title}

![badge](https://img.shields.io/badge/License-${answers.license}-blue)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Testing](#testing)
- [Questions](#questions)

## Description

  ${answers.description}

## Installation

  ${answers.installation}

## Usage

  ${answers.usage}

## License

  ![badge](https://img.shields.io/badge/License-${answers.license}-blue)
  ${licenseInfo}

## Contributions

  ${answers.contributions}

## Testing

  ${answers.testing}

## Questions

  Have questions or feedback?\n
  Email:${answers.email}\n
  Let's connect:\n
  GitHub Profile:[${answers.git}](https://github.com/${answers.git}/)\n
  GitHub Repository:[${answers.git}](https://github.com/${answers.git}/)
  `;
}
module.exports = generateMarkdown;
