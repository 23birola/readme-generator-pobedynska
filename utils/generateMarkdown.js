// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
This project is licensed under the ${data.license} license. ![License Badge](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-blue.svg)(https://opensource.org/licenses/${data.license})

## Questions
For any questions, please contact [${data.github}](https://github.com/${data.github}) or email at ${data.email}.`;
}

module.exports = generateMarkdown;
