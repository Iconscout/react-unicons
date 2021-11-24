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
const UilSignRight = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M7,6v5a1,1,0,0,0,1,1h3v8H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2H13V12h5a1,1,0,0,0,.78-.37l2-2.5a1,1,0,0,0,0-1.25l-2-2.5A1,1,0,0,0,18,5H13V3a1,1,0,0,0-2,0V5H8A1,1,0,0,0,7,6ZM9,7h8.52l1.2,1.5L17.52,10H9Z'
  }));
};

export default UilSignRight;