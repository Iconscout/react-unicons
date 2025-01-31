import * as React from 'react'
import { IconProps } from '../index'

const UilSilence = ({
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
      d: 'M9,11a1,1,0,1,0-1-1A1,1,0,0,0,9,11Zm6,0a1,1,0,1,0-1-1A1,1,0,0,0,15,11Zm1,3a1,1,0,0,0-2,0H13a1,1,0,0,0-2,0H10a1,1,0,0,0-2,0,1,1,0,0,0,0,2,1,1,0,0,0,2,0h1a1,1,0,0,0,2,0h1a1,1,0,0,0,2,0,1,1,0,0,0,0-2ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
    })
  )
}

export default UilSilence