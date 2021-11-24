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
const UilCopyright = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M11,9h2a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v4a3,3,0,0,0,3,3h2a3,3,0,0,0,3-3,1,1,0,0,0-2,0,1,1,0,0,1-1,1H11a1,1,0,0,1-1-1V10A1,1,0,0,1,11,9Zm1-7A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
  }));
};

export default UilCopyright;