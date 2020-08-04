const fs = require('fs')
const colors = require('colors/safe')
const { kebabToPascalCase } = require('./utils')

module.exports = pageName => {
  if (!pageName) {
    return console.error(colors.red('The page name is required.'))
  }

  const folderPath = `./src/ui/pages/${pageName}`
  const filePath = `${folderPath}/${pageName}.page.jsx`
  const stylePath = `${folderPath}/${pageName}.style.scss`

  const className = kebabToPascalCase(pageName)

  const functionalComponentFileContent = `import React from 'react'
import './${pageName}.style.scss'

/**
 * @Route /${pageName}
 * @Component ${className}
 */
export const ${className} = ({}) => {
  return (
    <div className="${pageName}">
      <h1>${pageName}</h1>
    </div>
  )
}
`

  const styleFileContent = `.${pageName} {\n\n}`

  fs.mkdirSync(folderPath)
  fs.writeFileSync(filePath, functionalComponentFileContent)
  fs.writeFileSync(stylePath, styleFileContent)
  fs.appendFile(
    './src/ui/pages/index.js',
    `\nexport { ${className} } from './${pageName}/${pageName}.page'`,
    function (err) {
      if (err) return console.error(colors.red(err))

      console.log(colors.green(`Page created in ${filePath}`))
    }
  )
}
