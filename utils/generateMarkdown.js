// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ![Badge for GitHub](https://img.shields.io/static/v1?label=${data.license}&message=License&color=blue)

  # Table of Contents:

  1. [Description](${data.description})
  2. [Installation Process](${data.installation})
  3. [Usage](${data.usage})
  4. [License](${data.license})
  5. [Contributors](${data.contributing})
  6. [Testing](${data.tests})
  7. [Github Username](${data.username})
  8. [Email Address](${data.email})

## Questions:
- Contact Me:
  - If you have any questions about the application please email me at ${data.email}.
  - Here you can find my Github page [XavierG13](https://github.com/${data.username})

  ## Description:
  ${data.description}

  ## Installation Process:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:

  ## Contributors:
  ${data.contributing}

  ## Testing:
  ${data.tests}

  ### Github Username:
  ${data.username}

  ### Email Address:
  ${data.email}

  ## Images:
  ![img]()

`;
}

module.exports = generateMarkdown;
