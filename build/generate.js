const path = require('path')
const fs = require('fs-extra')
const cheerio = require('cheerio')
const upperCamelCase = require('uppercamelcase')

// Ensure the src directory exists
const srcPath = path.join(process.cwd(), 'src')

fs.removeSync(srcPath)
fs.mkdirSync(srcPath)

const iconsPath = path.join(srcPath, 'icons') // Single directory for all icons
const iconsIndexPath = path.join(srcPath, 'index.ts')
const uniconsConfig = require('@iconscout/unicons/json/line.json')

// Clear Directories
fs.removeSync(iconsPath)
fs.mkdirSync(iconsPath)

const indexTs = [
  `import { SVGProps } from 'react'

export interface IconProps extends SVGProps<SVGElement> {
  size?: string | number
  color?: string
}
`,
]

try {
  uniconsConfig.forEach((icon) => {
    const baseName = `uil-${icon.name}`
    const name = upperCamelCase(baseName)

    try {
      const svgFile = fs.readFileSync(
        path.resolve('node_modules/@iconscout/unicons', icon.svg),
        'utf-8'
      )

      let data = svgFile.replace(/<svg[^>]+>/gi, '').replace(/<\/svg>/gi, '')

      const $ = cheerio.load(data, {
        xmlMode: true,
      })
      const svgPath = $('path').attr('d')

      if (!svgPath) {
        console.warn(`Warning: No path found for icon ${name}`)
        return
      }

      const componentContent = `import * as React from 'react'
import { IconProps } from '../index'

const ${name} = ({
  color = 'currentColor',
  size = 24,
  ...props
}: IconProps) => {
  return React.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: color,
      ...props
    },
    React.createElement('path', {
      d: '${svgPath}'
    })
  )
}

export default ${name}`

      // Write file once
      fs.writeFileSync(path.join(iconsPath, `${baseName}.ts`), componentContent)

      // Add to main index exports
      indexTs.push(`export { default as ${name} } from './icons/${baseName}'`)
    } catch (err) {
      console.error(`Error processing icon ${name}:`, err)
    }
  })

  fs.writeFileSync(iconsIndexPath, indexTs.join('\n'), 'utf-8')

  console.log(`✓ Generated ${uniconsConfig.length} icon components`)
} catch (err) {
  console.error('Error during generation:', err)
  process.exit(1)
}
