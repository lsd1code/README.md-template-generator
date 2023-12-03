#!/usr/bin/env node
import chalk from 'chalk'
import { writeFile } from 'fs/promises'
import { join } from 'path'

const generateTemplate = async (templates) => {
  try {
    const template = getTemplate(templates)
    await writeFile(join(process.cwd(), 'README.md'), template)
    successMsg()
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
}

const getTemplate = (templates) => {
  const randIdx = Math.floor(Math.random() * templates.length)
  return templates[randIdx]
}

const successMsg = () => {
  console.log(`
${chalk.italic.redBright("✨ README.md file created successfully ✨")}

${chalk.white("Feel free to customize this template based on your project's specific details and structure.\nProviding comprehensive information in your README.md will make it easier for others to understand, use, and contribute to your project.")}

${chalk.blueBright("🍕 Happy Coding 💯")}
  `);
}

const templates = [
`# Project Title

[Short project description and purpose]

## Table of Contents

- [Project Title](#project-title)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## Introduction

[Provide a brief introduction to your project. Include its purpose, main features, and any relevant background information.]

## Features

[List key features of your project.]

## Getting Started

[Explain how to get started with your project. Include any necessary steps such as installing dependencies and setting up configurations.]

### Prerequisites

[List any prerequisites that users need to have installed before they can use your project.]

### Installation

[Provide step-by-step instructions on how to install your project. Include code snippets if necessary.]

## Usage

[Provide examples and instructions on how to use your project. Include code snippets, screenshots, or any other relevant information.]

## Contributing

[Explain how others can contribute to your project. Include guidelines for submitting issues, feature requests, and pull requests.]

## License

[Specify the license under which your project is distributed. For example, MIT License, Apache License 2.0, etc.]

## Acknowledgments

[List any acknowledgments, credits, or references to other projects or resources that inspired or helped your project.]
`,
`# Project Name

[One-sentence project description]

## Overview

[Provide a high-level overview of your project. Explain its purpose and why it is valuable.]

## Table of Contents

- [Project Name](#project-name)
  - [Overview](#overview)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## Features

[List the key features of your project. Use bullet points for better readability.]

- Feature 1
- Feature 2
- ...

## Getting Started

[Provide information on how to get started with your project. Include steps for setting up the environment and getting the project running.]

### Prerequisites

[List any prerequisites or dependencies that users need to have installed before using your project.]

### Installation

[Provide step-by-step instructions on how to install your project. Include code snippets and commands.]

## Usage

[Offer examples and use cases to demonstrate how users can utilize your project. Include code snippets, screenshots, or links to documentation.]

## Contributing

[Explain how others can contribute to your project. Include information on reporting bugs, suggesting features, and submitting pull requests.]

## License

[Specify the license under which your project is distributed. For example, MIT License, Apache License 2.0, etc.]

## Contact

[Provide contact information for the project maintainer or team. This could include an email address, links to social media profiles, or a link to the project's issue tracker.]
`,
`# Project Title

[Provide a catchy and concise title for your project.]

## Overview

[Include a brief overview of your project, its purpose, and any key features.]

## Table of Contents

- [Project Title](#project-title)
  - [Overview](#overview)
  - [Features](#features)
  - [Demo](#demo)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Folder Structure](#folder-structure)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## Features

[List the key features of your web application.]

- Feature 1
- Feature 2
- ...

## Demo

[Include a link or embed a screenshot/gif/video showcasing your project in action.]

## Technologies Used

[List the technologies, frameworks, and libraries used in your project.]

- Frontend: [Technology/Framework]
- Backend: [Technology/Framework]
- Database: [Database System]
- Other: [Any other relevant technologies]

## Installation

[Provide step-by-step instructions on how to set up and run your project locally.]

1. Clone the repository: ${`git clone [repository-url]`}
2. Navigate to the project directory: ${`cd [project-directory]`}
3. Install dependencies: ${`npm install`} or ${`yarn install`}
4. Configure [any necessary configurations]
5. Start the application: ${`npm start`} or ${`yarn start`}

## Usage

[Explain how users can interact with your web application. Include any important usage instructions.]

## Folder Structure

[Outline the structure of your project's folders and files.]
`,
`# Project Name

[Include a short description or tagline for your project.]

## Table of Contents

- [Project Name](#project-name)
  - [Description](#description)
  - [Demo](#demo)
  - [Technologies](#technologies)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Configuration](#configuration)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## Description

[Provide a more detailed description of your project, its purpose, and what problem it solves.]

## Demo

[Include a link or embed a screenshot/gif/video showcasing your project in action.]

## Technologies

[List the technologies, frameworks, and tools used in your project.]

- Frontend: [Technology/Framework]
- Backend: [Technology/Framework]
- Database: [Database System]
- Authentication: [Auth System]
- Testing: [Testing Framework]
- Deployment: [Hosting Platform]

## Features

[List the key features and functionalities of your web application.]

- Feature 1
- Feature 2
- ...

## Getting Started

[Provide instructions on how to get the project up and running on a local machine.]

### Installation

1. Clone the repository: ${`git clone [repository-url]`}
2. Navigate to the project directory: ${`cd [project-directory]`}
3. Install dependencies: ${`npm install`} or ${`yarn install`}

### Configuration

[Include any necessary configuration steps, such as setting up environment variables.]

## Usage

[Explain how users can use your project. Include any important usage instructions, examples, or screenshots.]

## Contributing

[Provide guidelines for others who want to contribute to your project. Include information on how to submit issues, propose features, and submit pull requests.]

## License

[Specify the license under which your project is distributed. For example, MIT License, Apache License 2.0, etc.]

## Contact

[Include your contact information or a way for others to reach out if they have questions or feedback.]

Feel free to adjust and customize this template according to the specific details of your project. A well-structured README.md will help others understand and engage with your web development project more effectively.
`
]

await (async () => {
  try {
    await generateTemplate(templates)
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
})()