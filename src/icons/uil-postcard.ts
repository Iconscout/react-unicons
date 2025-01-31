import * as React from 'react'
import { IconProps } from '../index'

const UilPostcard = ({
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
      d: 'M17,11h1a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v1A1,1,0,0,0,17,11ZM6,12h5a1,1,0,0,0,0-2H6a1,1,0,0,0,0,2ZM22,4H2A1,1,0,0,0,1,5V19a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V5A1,1,0,0,0,22,4ZM21,18H3V6H21ZM6,16h5a1,1,0,0,0,0-2H6a1,1,0,0,0,0,2Z'
    })
  )
}

export default UilPostcard