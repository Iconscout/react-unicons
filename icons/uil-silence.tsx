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
const UilSilence = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M9,11a1,1,0,1,0-1-1A1,1,0,0,0,9,11Zm6,0a1,1,0,1,0-1-1A1,1,0,0,0,15,11Zm1,3a1,1,0,0,0-2,0H13a1,1,0,0,0-2,0H10a1,1,0,0,0-2,0,1,1,0,0,0,0,2,1,1,0,0,0,2,0h1a1,1,0,0,0,2,0h1a1,1,0,0,0,2,0,1,1,0,0,0,0-2ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
  }));
};

export default UilSilence;