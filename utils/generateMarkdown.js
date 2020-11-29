// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
# ${data.badge}
# ${data.description}
# ${data.installationInstructions}
 
# ${data.usageInformation}

# ${data.license}

# ${data.contributionGuidelines}
# ${data.testInstructions}
# ${data.gitHubUsername}
#${data.email}`;
}

module.exports = generateMarkdown;
