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
const UilHeadphones = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M12,3A10,10,0,0,0,2,13v7a1,1,0,0,0,1,1H6a3,3,0,0,0,3-3V16a3,3,0,0,0-3-3H4a8,8,0,0,1,16,0H18a3,3,0,0,0-3,3v2a3,3,0,0,0,3,3h3a1,1,0,0,0,1-1V13A10,10,0,0,0,12,3ZM6,15a1,1,0,0,1,1,1v2a1,1,0,0,1-1,1H4V15Zm14,4H18a1,1,0,0,1-1-1V16a1,1,0,0,1,1-1h2Z'
  }));
};

export default UilHeadphones;