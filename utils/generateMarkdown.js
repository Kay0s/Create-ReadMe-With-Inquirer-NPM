// function to generate markdown for README
function getLicense(license) {
  if (license === "MIT") {
    return `MIT License
  
          Copyright (c) [year] [fullname]
          
          Permission is hereby granted, free of charge, to any person obtaining a copy
          of this software and associated documentation files (the "Software"), to deal
          in the Software without restriction, including without limitation the rights
          to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
          copies of the Software, and to permit persons to whom the Software is
          furnished to do so, subject to the following conditions:
          
          The above copyright notice and this permission notice shall be included in all
          copies or substantial portions of the Software.
          
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
          AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
          LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
          OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
          SOFTWARE.`;
  }
}
function generateMarkdown(data) {
  return `# ${data.title}
 
![badge](https://img.shields.io/badge/License-${data.license}-blue)

# Table of Contents

- [Description](#description)\n
- [Installation](#installation)\n
- [Usage](#usage)\n
- [License](#license)\n
- [Contributions](#contributions)\n
- [Testing](#testing)\n
- [Questions](#questions)\n

# Description
 ${data.description}


# Installation 
${data.installation}


# Usage 
${data.usage}

# License
${getLicense(data.license)}


# Contributions 
${data.contributions}

# Testing
${data.testing}

# Questions 
${data.questions}
[${data.git}](https://github.com/${data.git}/)
${data.email}`;
}

module.exports = generateMarkdown;
