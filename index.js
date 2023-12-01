const { writeFile, readFile, readdir } = require('fs').promises
const { join } = require('path')

const successMsg = "README.md file created successfully.\n\nFeel free to customize this template based on your project's specific details and structure. Providing comprehensive information in your README.md will make it easier for others to understand, use, and contribute to your project."

const generateTemplate = async () => {
  try {
    const files = await readdir(join(__dirname, 'templates'))
    const template = getRandomTemplate(files)

    if(!template) {
      throw new Error('No templates available')
    }

    const data = await readFile(join(__dirname, 'templates', template), { encoding: 'utf-8' })
    await writeFile(join(__dirname, 'README.md'), data)
  
    console.log(successMsg)
  } catch (error) {
    console.log(`Error: ${error}`)
  }

  return true
}

const getRandomTemplate = (templates) => {
  if(!templates.length) {
    return
  }

  if(templates.length < 2) {
    return templates[0]
  } 

  const randIdx = Math.floor(Math.random() * templates.length)
  return templates[randIdx]
}

module.exports = generateTemplate