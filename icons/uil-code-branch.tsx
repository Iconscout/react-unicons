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
const UilCodeBranch = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M17,6.06a3,3,0,0,0-1.15,5.77A2,2,0,0,1,14,13.06H10a3.91,3.91,0,0,0-2,.56V7.88a3,3,0,1,0-2,0v8.36a3,3,0,1,0,2.16.05A2,2,0,0,1,10,15.06h4a4,4,0,0,0,3.91-3.16A3,3,0,0,0,17,6.06Zm-10-2a1,1,0,1,1-1,1A1,1,0,0,1,7,4.06Zm0,16a1,1,0,1,1,1-1A1,1,0,0,1,7,20.06Zm10-10a1,1,0,1,1,1-1A1,1,0,0,1,17,10.06Z'
  }));
};

export default UilCodeBranch;