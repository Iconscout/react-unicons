import React from 'react';

type Props = {
    /**
     * The color of the icon
     * @default 'currentColor'
     */
    color?: string;
    /**
     * The size of the icon
     * @default 24
     */
    size?: string | number;
} & React.SVGProps<SVGElement>

/**
 * 
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const UilBorderVertical = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M3,3A1,1,0,1,0,4,4,1,1,0,0,0,3,3ZM3,7A1,1,0,1,0,4,8,1,1,0,0,0,3,7ZM19,5a1,1,0,1,0-1-1A1,1,0,0,0,19,5ZM7,11a1,1,0,1,0,1,1A1,1,0,0,0,7,11Zm0,8a1,1,0,1,0,1,1A1,1,0,0,0,7,19ZM7,3A1,1,0,1,0,8,4,1,1,0,0,0,7,3ZM3,15a1,1,0,1,0,1,1A1,1,0,0,0,3,15Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,3,11Zm0,8a1,1,0,1,0,1,1A1,1,0,0,0,3,19Zm16-4a1,1,0,1,0,1,1A1,1,0,0,0,19,15Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,19,11Zm0,8a1,1,0,1,0,1,1A1,1,0,0,0,19,19ZM19,7a1,1,0,1,0,1,1A1,1,0,0,0,19,7ZM15,3a1,1,0,1,0,1,1A1,1,0,0,0,15,3ZM11,3a1,1,0,0,0-1,1V20a1,1,0,0,0,2,0V4A1,1,0,0,0,11,3Zm4,16a1,1,0,1,0,1,1A1,1,0,0,0,15,19Zm0-8a1,1,0,1,0,1,1A1,1,0,0,0,15,11Z'
  }));
};

export default UilBorderVertical;