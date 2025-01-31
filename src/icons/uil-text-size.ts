import * as React from 'react'
import { IconProps } from '../index'

const UilTextSize = ({
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
      d: 'M9,11H3a1,1,0,0,0,0,2H5v5a1,1,0,0,0,2,0V13H9a1,1,0,0,0,0-2ZM21,5H9A1,1,0,0,0,9,7h5V18a1,1,0,0,0,2,0V7h5a1,1,0,0,0,0-2Z'
    })
  )
}

export default UilTextSize