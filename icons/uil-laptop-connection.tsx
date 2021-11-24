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
const UilLaptopConnection = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M21,18H14.82A3,3,0,0,0,13,16.18V13h7a1,1,0,0,0,0-2H19V5a3,3,0,0,0-3-3H8A3,3,0,0,0,5,5v6H4a1,1,0,0,0,0,2h7v3.18A3,3,0,0,0,9.18,18H3a1,1,0,0,0,0,2H9.18a3,3,0,0,0,5.64,0H21a1,1,0,0,0,0-2ZM7,11V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1v6Zm5,9a1,1,0,1,1,1-1A1,1,0,0,1,12,20Z'
  }));
};

export default UilLaptopConnection;