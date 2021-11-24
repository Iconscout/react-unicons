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
const UilLaptopCloud = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M4.5,10H10a3,3,0,0,0,1.07-5.8,4,4,0,0,0-7.48,1A2.5,2.5,0,0,0,4.5,10Zm0-3a1,1,0,0,0,1-1,2,2,0,0,1,3.89-.64,1,1,0,0,0,.78.66A1,1,0,0,1,11,7a1,1,0,0,1-1,1H4.5a.5.5,0,0,1,0-1ZM21,16H20V9a3,3,0,0,0-3-3H16a1,1,0,0,0,0,2h1a1,1,0,0,1,1,1v7H6V13a1,1,0,0,0-2,0v3H3a1,1,0,0,0-1,1v2a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V17A1,1,0,0,0,21,16Zm-1,3a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V18H20Z'
  }));
};

export default UilLaptopCloud;