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
const UilBracketsCurly = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M6,6A2,2,0,0,1,8,4,1,1,0,0,0,8,2,4,4,0,0,0,4,6V9a2,2,0,0,1-2,2,1,1,0,0,0,0,2,2,2,0,0,1,2,2v3a4,4,0,0,0,4,4,1,1,0,0,0,0-2,2,2,0,0,1-2-2V15a4,4,0,0,0-1.38-3A4,4,0,0,0,6,9Zm16,5a2,2,0,0,1-2-2V6a4,4,0,0,0-4-4,1,1,0,0,0,0,2,2,2,0,0,1,2,2V9a4,4,0,0,0,1.38,3A4,4,0,0,0,18,15v3a2,2,0,0,1-2,2,1,1,0,0,0,0,2,4,4,0,0,0,4-4V15a2,2,0,0,1,2-2,1,1,0,0,0,0-2Z'
  }));
};

export default UilBracketsCurly;