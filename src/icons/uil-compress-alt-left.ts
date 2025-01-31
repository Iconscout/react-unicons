import * as React from 'react'
import { IconProps } from '../index'

const UilCompressAltLeft = ({
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
      d: 'M10.5,5.5a1,1,0,0,0-1,1V8.09L3.71,2.29A1,1,0,0,0,2.29,3.71L8.09,9.5H6.5a1,1,0,0,0,0,2h4a1,1,0,0,0,.38-.08,1,1,0,0,0,.54-.54,1,1,0,0,0,.08-.38v-4A1,1,0,0,0,10.5,5.5ZM21.71,20.29l-5.8-5.79H17.5a1,1,0,0,0,0-2h-4a1,1,0,0,0-.38.08,1,1,0,0,0-.54.54,1,1,0,0,0-.08.38v4a1,1,0,0,0,2,0V15.91l5.79,5.8a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29Z'
    })
  )
}

export default UilCompressAltLeft