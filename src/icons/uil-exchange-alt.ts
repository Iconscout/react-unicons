import * as React from 'react'
import { IconProps } from '../index'

const UilExchangeAlt = ({
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
      d: 'M21.71,9.29l-4-4a1,1,0,0,0-1.42,1.42L18.59,9H7a1,1,0,0,0,0,2H21a1,1,0,0,0,.92-.62A1,1,0,0,0,21.71,9.29ZM17,13H3a1,1,0,0,0-.92.62,1,1,0,0,0,.21,1.09l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.41,15H17a1,1,0,0,0,0-2Z'
    })
  )
}

export default UilExchangeAlt