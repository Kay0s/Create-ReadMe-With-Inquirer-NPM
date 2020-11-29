// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}`;
  return `# ${data.badge}``Description`;
  return `# ${data.description}`;

  `Table of Contents``Installation``Usage``License``Contributing``Tests``Questions``Installation`;
  return `# ${data.installationInstructions}`;
  `Usage`;
  return `# ${data.usageInformation}`;
  `License`;
  return `# ${data.license}`;
  `Contributing`;
  return `# ${data.contributionGuidelines}`;
  `Tests`;
  return `# ${data.testInstructions}``Questions`;
  return `# ${data.gitHubUsername}`;
  return `#${data.email}`;
}

module.exports = generateMarkdown;
