import * as React from 'react'
import { IconProps } from '../index'

const UilBringBottom = ({
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
      d: 'M21,14H19a1,1,0,1,0,0,2h1v4H4V16h7a1,1,0,0,0,0-2H10V9A1,1,0,0,0,9,8H3A1,1,0,0,0,2,9v6H2v6a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V15A1,1,0,0,0,21,14ZM4,10H8v4H4ZM12.71,6.7,14,5.41V17a1,1,0,1,0,2,0V5.41L17.29,6.7A1,1,0,0,0,18,7a1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,0,1.41A1,1,0,0,0,12.71,6.7Z'
    })
  )
}

export default UilBringBottom