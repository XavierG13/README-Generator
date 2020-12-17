// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ## Description:
  ${data.description}

  ## Installation Process:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  ![Badge for GitHub](https://img.shields.io/static/v1?label=${data.license}&message=License&color=blue)

  ## Contributors:
  ${data.contributing}

  ## Testing:
  ${data.tests}

  ### Github Username:
  ${data.username}

  ### Email Address:
  ${data.email}

`;
}

module.exports = generateMarkdown;
