import * as React from 'react'
import { IconProps } from '../index'

const UilCloud = ({
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
      d: 'M18.42,9.21a7,7,0,0,0-13.36,1.9A4,4,0,0,0,6,19H17a5,5,0,0,0,1.42-9.79ZM17,17H6a2,2,0,0,1,0-4,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.66A3,3,0,0,1,17,17Z'
    })
  )
}

export default UilCloud