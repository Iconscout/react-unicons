import * as React from 'react'
import { IconProps } from '../index'

const UilGrinTongueWinkAlt = ({
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
      d: 'M9.21,10.54a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41,3.08,3.08,0,0,0-4.24,0,1,1,0,1,0,1.41,1.41A1,1,0,0,1,9.21,10.54ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15,9a1,1,0,1,0,1,1A1,1,0,0,0,15,9Zm0,4H9a1,1,0,0,0,0,2,3,3,0,0,0,6,0,1,1,0,0,0,0-2Zm-3,3a1,1,0,0,1-1-1h2A1,1,0,0,1,12,16Z'
    })
  )
}

export default UilGrinTongueWinkAlt