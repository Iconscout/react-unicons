import * as React from 'react'
import { IconProps } from '../index'

const UilPaintTool = ({
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
      d: 'M18,1H10A3,3,0,0,0,7,4H6A3,3,0,0,0,3,7v3a3,3,0,0,0,3,3h6a1,1,0,0,1,1,1v1a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2V17a2,2,0,0,0-2-2V14a3,3,0,0,0-3-3H6a1,1,0,0,1-1-1V7A1,1,0,0,1,6,6H7a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V4A3,3,0,0,0,18,1ZM15,17v4H13V17ZM19,6a1,1,0,0,1-1,1H10A1,1,0,0,1,9,6V4a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1Z'
    })
  )
}

export default UilPaintTool