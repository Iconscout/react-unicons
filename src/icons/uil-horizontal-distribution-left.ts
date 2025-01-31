import * as React from 'react'
import { IconProps } from '../index'

const UilHorizontalDistributionLeft = ({
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
      d: 'M11,4H6V3A1,1,0,0,0,4,3V21a1,1,0,0,0,2,0V20h5a1,1,0,0,0,1-1V5A1,1,0,0,0,11,4ZM10,18H6V6h4ZM19,5H16V3a1,1,0,0,0-2,0V21a1,1,0,0,0,2,0V19h3a1,1,0,0,0,1-1V6A1,1,0,0,0,19,5ZM18,17H16V7h2Z'
    })
  )
}

export default UilHorizontalDistributionLeft