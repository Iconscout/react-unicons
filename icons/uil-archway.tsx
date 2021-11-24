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
const UilArchway = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M22,20H21V8h1a1,1,0,0,0,0-2H21V3a1,1,0,0,0-1-1H4A1,1,0,0,0,3,3V6H2A1,1,0,0,0,2,8H3V20H2a1,1,0,0,0,0,2H22a1,1,0,0,0,0-2Zm-7,0H9V16.47a6.21,6.21,0,0,1,3-5.33,6.21,6.21,0,0,1,3,5.33Zm4,0H17V16.47a8.17,8.17,0,0,0-4.55-7.36,1,1,0,0,0-.9,0A8.17,8.17,0,0,0,7,16.47V20H5V8H19ZM19,6H5V4H19Z'
  }));
};

export default UilArchway;