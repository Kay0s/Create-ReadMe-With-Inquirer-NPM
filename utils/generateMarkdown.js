//function to generate markdown
function generateMarkdown(answers, licenseInfo) {
  return `# ${answers.title}

    ![badge](https://img.shields.io/badge/License-${answers.license}-blue)

    ## Table of Contents

    - [Description](#description)\n
    - [Installation](#installation)\n
    - [Usage](#usage)\n
    - [License](#license)\n
    - [Contributions](#contributions)\n
    - [Testing](#testing)\n
    - [Questions](#questions)\n
    ### Description\n
    ${answers.description}\n
    ### Installation\n
    ${answers.installation}\n
    ### Usage\n
    ${answers.usage}\n
    ### License\n
    ![badge](https://img.shields.io/badge/License-${answers.license}-blue)\n
    ${licenseInfo}\n
    ### Contributions\n
    ${answers.contributions}\n
    ### Testing\n
    ${answers.testing}\n
    ### Questions\n
    Have questions or feedback?\n
    Email:${answers.email}\n
    Let's connect:\n
    GitHub Profile:[${answers.git}](https://github.com/${answers.git}/)\n
    GitHub Repository:[${answers.git}](https://github.com/${answers.git}/)\n
    `;
}
module.exports = generateMarkdown;
