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
const UilCaretRight = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M19.5,11.13,5.5,3.05a1,1,0,0,0-1,0,1,1,0,0,0-.5.87V20.08a1,1,0,0,0,.5.87,1,1,0,0,0,1,0l14-8.08a1,1,0,0,0,0-1.74ZM6,18.35V5.65L17,12Z'
  }));
};

export default UilCaretRight;