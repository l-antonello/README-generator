// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'No License'){
    return ''
  }
  return`![License:${license}](https://img.shields.io/badge/License-${license}-brightgreen.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if(license === 'No License'){
  return ''
}
return`![License:${license}](https://www.gnu.org/licenses/${license}-brightgreen.svg)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {

  return `
## TITLE
${data.title}

# INSTALLATION
${data.installation}

# USAGE
${data.usage}

# LICENSE
${renderLicenseBadge(data.license)}

# DESCRIPTION
${data.description}
# Tests
${data.tests}

# CONTACT INFO
* GitHub Username: ${data.userName}
* Contact Email: ${data.userEmail}
`;
}

module.exports = generateMarkdown;
