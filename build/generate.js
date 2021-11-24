const path = require('path')
const fs = require('fs-plus')
const cheerio = require('cheerio')
const upperCamelCase = require('uppercamelcase')

const iconsComponentPath = path.join(process.cwd(), 'icons')
const iconsIndexPath = path.join(process.cwd(), 'index.ts')
const uniconsConfig = require('@iconscout/unicons/json/line.json')

// Clear Directories
fs.removeSync(iconsComponentPath)
fs.mkdirSync(iconsComponentPath)

const indexJs = []

uniconsConfig.forEach(icon => {
    const baseName = `uil-${icon.name}`
    const location = path.join(iconsComponentPath, `${baseName}.tsx`)
    const name = upperCamelCase(baseName)
    const svgFile = fs.readFileSync(path.resolve('node_modules/@iconscout/unicons', icon.svg), 'utf-8')

    let data = svgFile.replace(/<svg[^>]+>/gi, '').replace(/<\/svg>/gi, '')
    // Get Path Content from SVG
    const $ = cheerio.load(data, {
        xmlMode: true
    })
    const svgPath = $('path').attr('d')

    const template = `import React from 'react';

type Props = {
    /**
     * The color of the icon
     * @default 'currentColor'
     */
    color?: string;
    /**
     * The size of the icon
     * @default 24
     */
    size?: string | number;
} & React.SVGProps${"<" + "SVGElement" + ">"}

/**
 * 
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const ${name} = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: '${svgPath}'
  }));
};

export default ${name};`

    fs.writeFileSync(location, template, 'utf-8')

    // Add it to index.js
    indexJs.push(`export { default as ${name} } from './icons/${baseName}'`)
})

fs.writeFileSync(iconsIndexPath, indexJs.join('\n'), 'utf-8')

console.log(`Generated ${uniconsConfig.length} icon components.`)