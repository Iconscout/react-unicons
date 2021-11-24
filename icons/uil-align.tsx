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
const UilAlign = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M3,15H13a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm0-4H13a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2ZM3,7H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,7ZM21,17H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM19.64,9.57a1,1,0,1,0-1.28,1.53l1.08.9-1.08.9a1,1,0,0,0-.13,1.41,1,1,0,0,0,.77.36,1,1,0,0,0,.64-.24l2-1.66a1,1,0,0,0,0-1.54Z'
  }));
};

export default UilAlign;