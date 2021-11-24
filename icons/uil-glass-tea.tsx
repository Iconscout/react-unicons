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
const UilGlassTea = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M19,3a3,3,0,0,0-2.23-1H7.23a3,3,0,0,0-3,3.33l1.56,14a3,3,0,0,0,3,2.67h6.42a3,3,0,0,0,3-2.67l1.56-14A3,3,0,0,0,19,3ZM16.2,19.11a1,1,0,0,1-1,.89H8.79a1,1,0,0,1-1-.89L6.78,10H17.22ZM17.44,8H6.56L6.24,5.11a1,1,0,0,1,.25-.78A1,1,0,0,1,7.23,4h9.54a1,1,0,0,1,.74.33,1,1,0,0,1,.25.78ZM14,18a1,1,0,0,0,1-1V13a1,1,0,0,0-2,0v4A1,1,0,0,0,14,18Zm-4,0a1,1,0,0,0,1-1V13a1,1,0,0,0-2,0v4A1,1,0,0,0,10,18Z'
  }));
};

export default UilGlassTea;