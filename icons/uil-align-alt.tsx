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
const UilAlignAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M10,11H3a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Zm0,8H3a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2ZM14,5h7a1,1,0,0,0,0-2H14a1,1,0,0,0,0,2ZM10,7H3A1,1,0,0,0,3,9h7a1,1,0,0,0,0-2Zm0,8H3a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2ZM10,3H7A1,1,0,0,0,7,5h3a1,1,0,0,0,0-2ZM21,7H14a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Zm0,4H14a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Zm-4,8H14a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2Zm4-4H14a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Z'
  }));
};

export default UilAlignAlt;