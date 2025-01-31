import * as React from 'react'
import { IconProps } from '../index'

const UilBriefcase = ({
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
      d: 'M21,6H17V5a3,3,0,0,0-3-3H10A3,3,0,0,0,7,5V6H3A1,1,0,0,0,2,7v4a3,3,0,0,0,1,2.22V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V13.22A3,3,0,0,0,22,11V7A1,1,0,0,0,21,6ZM9,5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V6H9ZM19,19a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V14H7v1a1,1,0,0,0,2,0V14h6v1a1,1,0,0,0,2,0V14h2Zm1-8a1,1,0,0,1-1,1H17V11a1,1,0,0,0-2,0v1H9V11a1,1,0,0,0-2,0v1H5a1,1,0,0,1-1-1V8H20Z'
    })
  )
}

export default UilBriefcase