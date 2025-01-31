import * as React from 'react'
import { IconProps } from '../index'

const UilScrollH = ({
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
      d: 'M4.71,6.29A1,1,0,0,0,3.29,7.71L7.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,0-1.42ZM16.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0,0,1.42l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z'
    })
  )
}

export default UilScrollH