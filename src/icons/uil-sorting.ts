import * as React from 'react'
import { IconProps } from '../index'

const UilSorting = ({
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
      d: 'M11.29,10.21a1,1,0,0,0,1.42,0l3-3a1,1,0,1,0-1.42-1.42L12,8.09,9.71,5.79A1,1,0,0,0,8.29,7.21Zm1.42,4.58a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42L12,16.91l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z'
    })
  )
}

export default UilSorting