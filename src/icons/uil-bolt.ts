import * as React from 'react'
import { IconProps } from '../index'

const UilBolt = ({
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
      d: 'M19.87,8.6A1,1,0,0,0,19,8H14.42l1.27-4.74a1,1,0,0,0-.17-.87A1,1,0,0,0,14.73,2h-7a1,1,0,0,0-1,.74l-2.68,10a1,1,0,0,0,.17.87,1,1,0,0,0,.8.39H8.89L7.08,20.74a1,1,0,0,0,1.71.93l10.9-12A1,1,0,0,0,19.87,8.6Zm-9.79,8.68,1.07-4a1,1,0,0,0-.17-.87,1,1,0,0,0-.79-.39H6.35L8.49,4h4.93L12.15,8.74a1,1,0,0,0,1,1.26h3.57Z'
    })
  )
}

export default UilBolt