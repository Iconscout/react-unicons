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
const UilDesktopAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M19,2H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H8v2H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2H16V18h3a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM14,20H10V18h4Zm6-5a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V14H20Zm0-3H4V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z'
  }));
};

export default UilDesktopAlt;