import * as React from 'react'
import { IconProps } from '../index'

const UilMediumM = ({
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
      d: 'M21.20905,6.41669H22V4.08331H14.51978l-2.48584,9.16663h-.068L9.50269,4.08331H2V6.41663h.76837A.89578.89578,0,0,1,3.5,7.11139v9.83032a.84093.84093,0,0,1-.73163.6416H2v2.33338H8V17.58331H6.5V7.25h.08752L10.0451,19.91669h2.712L16.25989,7.25h.07355V17.58331H14.83337v2.33338H22V17.58331h-.79095a.83931.83931,0,0,1-.70905-.6416V7.11145A.8976.8976,0,0,1,21.20905,6.41669Z'
    })
  )
}

export default UilMediumM