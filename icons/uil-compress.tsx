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
const UilCompress = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M16,9h5a1,1,0,0,0,0-2H17V3a1,1,0,0,0-2,0V8A1,1,0,0,0,16,9ZM8,15H3a1,1,0,0,0,0,2H7v4a1,1,0,0,0,2,0V16A1,1,0,0,0,8,15ZM8,2A1,1,0,0,0,7,3V7H3A1,1,0,0,0,3,9H8A1,1,0,0,0,9,8V3A1,1,0,0,0,8,2ZM21,15H16a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V17h4a1,1,0,0,0,0-2Z'
  }));
};

export default UilCompress;