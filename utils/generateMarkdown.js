// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
# ${data.badge}
#Title of Contents
1.[Desciption](#Description)
2.[Installation](#Installation)
3.[Usage](#Usage)
4.[License](#License)
5.[Contributions](#Contributions)
6.[Testing](#Testing)
7.[Questions](#Questions)

# Description
 ${data.description}


#Installation 
${data.installationInstructions}


#Usage 
${data.usageInformation}

#License
 ${data.license}


#Contriubtions 
${data.contributionGuidelines}

#Testing
# ${data.testInstructions}

#Questions 
${data.gitHubUsername}
${data.email}`;
}

module.exports = generateMarkdown;
