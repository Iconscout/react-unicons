import * as React from 'react'
import { IconProps } from '../index'

const UilOutline = ({
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
      d: 'M19.2,7.3c-1.9-0.4-3.3-2-3.4-3.9V3.1h-3.1v12.5c0,1.5-1.2,2.6-2.6,2.6c-0.8,0-1.6-0.4-2.1-1l0,0l0,0C7,16,7.2,14.3,8.4,13.4C9,13,9.5,13,10.2,13V9.8c-3.2-0.4-5.5,1.8-6,4.9c-0.2,1.8,0.3,3.5,1.6,4.8c2.2,2.3,5.9,2.3,8.2,0.1c1.1-1.1,1.7-2.6,1.7-4.1V9.2c1.3,0.9,2.8,1.4,4.4,1.4V7.4C19.8,7.4,19.5,7.4,19.2,7.3z'
    })
  )
}

export default UilOutline