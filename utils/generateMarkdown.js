// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
# ${data.badge}
#Title of Contents
1.[Desciption](#Description)<a name="Desription"></a>
2.[Installation](#Installation)<a name="Installation"></a>
3.[Usage](#Usage)<a name="Usage"></a>
4.[License](#License)<a name="License"></a>
5.[Contributions](#Contributions)<a name="Contributions"></a>
6.[Testing](#Testing)<a name="Testing"></a>
7.[Questions](#Questions)<a name="Questions"></a>

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
