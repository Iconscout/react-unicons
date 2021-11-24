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
const UilBed = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M7,12.5a3,3,0,1,0-3-3A3,3,0,0,0,7,12.5Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,7,8.5Zm13-2H12a1,1,0,0,0-1,1v6H3v-8a1,1,0,0,0-2,0v13a1,1,0,0,0,2,0v-3H21v3a1,1,0,0,0,2,0v-9A3,3,0,0,0,20,6.5Zm1,7H13v-5h7a1,1,0,0,1,1,1Z'
  }));
};

export default UilBed;