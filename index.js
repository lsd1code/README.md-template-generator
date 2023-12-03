#!/usr/bin/env node

import chalk from 'chalk'
import { writeFile, readFile, readdir } from 'fs/promises'
import { join } from 'path'

const generateTemplate = async () => {
  try {
    const templates = await readdir(join('./', 'templates'))
    const template = getTemplate(templates)

    if(!template) { 
      throw new Error('No templates available')
    }

    const data = await readFile(join('./', 'templates', template), { encoding: 'utf-8' })
    await writeFile(join(process.cwd(), 'README.md'), data)

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

await (async () => {
  try {
    await generateTemplate()
  } catch (error) {
    console.log(error.message)
  }
})()