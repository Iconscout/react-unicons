import * as React from 'react'
import { IconProps } from '../index'

const UilMehAlt = ({
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
      d: 'M9,11h1a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm6,3H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm0-5H14a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
    })
  )
}

export default UilMehAlt