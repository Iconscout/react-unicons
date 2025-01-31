import * as React from 'react'
import { IconProps } from '../index'

const UilHorizontalDistributionCenter = ({
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
      d: 'M19,5H18V3a1,1,0,0,0-2,0V5H15a1,1,0,0,0-1,1V18a1,1,0,0,0,1,1h1v2a1,1,0,0,0,2,0V19h1a1,1,0,0,0,1-1V6A1,1,0,0,0,19,5ZM18,17H16V7h2ZM11,4H9V3A1,1,0,0,0,7,3V4H5A1,1,0,0,0,4,5V19a1,1,0,0,0,1,1H7v1a1,1,0,0,0,2,0V20h2a1,1,0,0,0,1-1V5A1,1,0,0,0,11,4ZM10,18H6V6h4Z'
    })
  )
}

export default UilHorizontalDistributionCenter