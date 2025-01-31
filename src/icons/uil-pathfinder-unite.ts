import * as React from 'react'
import { IconProps } from '../index'

const UilPathfinderUnite = ({
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
      d: 'M21,7.54H16.46V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V15.46a1,1,0,0,0,1,1H7.54V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V8.54A1,1,0,0,0,21,7.54ZM20,20H9.54V15.46a1,1,0,0,0-1-1H4V4H14.46V8.54a1,1,0,0,0,1,1H20Z'
    })
  )
}

export default UilPathfinderUnite