import * as React from 'react'
import { IconProps } from '../index'

const UilAnchor = ({
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
      d: 'M19,13H17a1,1,0,0,0,0,2h.91A6,6,0,0,1,13,19.91V11h1a1,1,0,0,0,0-2H13V7.82a3,3,0,1,0-2,0V9H10a1,1,0,0,0,0,2h1v8.91A6,6,0,0,1,6.09,15H7a1,1,0,0,0,0-2H5a1,1,0,0,0-1,1,8,8,0,0,0,16,0A1,1,0,0,0,19,13ZM12,6a1,1,0,1,1,1-1A1,1,0,0,1,12,6Z'
    })
  )
}

export default UilAnchor