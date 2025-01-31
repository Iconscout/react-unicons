import * as React from 'react'
import { IconProps } from '../index'

const UilFocus = ({
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
      d: 'M8,2H3A1,1,0,0,0,2,3V8A1,1,0,0,0,4,8V4H8A1,1,0,0,0,8,2ZM8,20H4V16a1,1,0,0,0-2,0v5a1,1,0,0,0,1,1H8a1,1,0,0,0,0-2ZM21,2H16a1,1,0,0,0,0,2h4V8a1,1,0,0,0,2,0V3A1,1,0,0,0,21,2Zm0,13a1,1,0,0,0-1,1v4H16a1,1,0,0,0,0,2h5a1,1,0,0,0,1-1V16A1,1,0,0,0,21,15Z'
    })
  )
}

export default UilFocus