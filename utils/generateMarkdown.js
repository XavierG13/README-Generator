// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  # Table of Contents:

  1. [Description](#${data.description})
  2. [Installation Process](#${data.installation})
  3. [Usage](${data.usage})
  4. [License](${data.license})
  5. [Contributors](${data.contributing})
  6. [Testing](${data.tests})
  7. [Github Username](${data.username})
  8. [Email Address](${data.email})


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
