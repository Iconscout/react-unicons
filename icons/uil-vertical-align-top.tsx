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
const UilVerticalAlignTop = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M21,2H3A1,1,0,0,0,3,4H6V21a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V16h3a1,1,0,0,0,1-1V4h3a1,1,0,0,0,0-2ZM12,20H8V4h4Zm4-6H14V4h2Z'
  }));
};

export default UilVerticalAlignTop;