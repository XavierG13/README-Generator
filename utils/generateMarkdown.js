// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ![Badge for GitHub](https://img.shields.io/static/v1?label=${data.license}&message=License&color=blue)

  # Table of Contents:

  1. [Description](#description)
  2. [Installation Process](#installation-process)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributors](#contributors)
  6. [Testing](#testing)
  7. [Github Username](#github-username)
  8. [Email Address](#email-address)
  9. [Examples](#examples)

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
  - This application is covered under the ${data.license} license.
  
## Contributors:
  ${data.contributing}

## Testing:
  ${data.tests}

### Github Username:
  ${data.username}

### Email Address:
  ${data.email}

# Examples:

## Video:
[Video Example](https://drive.google.com/file/d/14vpevQMrTEyZZJQ7Sg3YhlCystQ6pROI/view)
## Images:
  ![img]()
`;
}

module.exports = generateMarkdown;
