import * as React from 'react'
import { IconProps } from '../index'

const UilCornerUpLeft = ({
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
      d: 'M14.69,6.63h-7l2.92-2.92a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L4.61,6.92a1,1,0,0,0-.22.33,1,1,0,0,0,0,.76,1.19,1.19,0,0,0,.22.33L9.24,13a1,1,0,0,0,.7.3,1,1,0,0,0,.71-1.71L7.73,8.63h7a3,3,0,0,1,3,3V21a1,1,0,0,0,2,0V11.63A5,5,0,0,0,14.69,6.63Z'
    })
  )
}

export default UilCornerUpLeft