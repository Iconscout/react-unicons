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
const UilCropAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M19,16H18V7a1,1,0,0,0-1-1H8V5A1,1,0,0,0,6,5V6H5A1,1,0,0,0,5,8H6v9a1,1,0,0,0,1,1h9v1a1,1,0,0,0,2,0V18h1a1,1,0,0,0,0-2Zm-3,0H8V8h8Z'
  }));
};

export default UilCropAlt;