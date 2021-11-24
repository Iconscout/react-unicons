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
const UilGlassMartini = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M18,20H13V14.94A9,9,0,0,0,21,6a8.72,8.72,0,0,0-.67-3.39,1,1,0,0,0-.22-.32L20,2.21a.92.92,0,0,0-.21-.13A.94.94,0,0,0,19.51,2l-.1,0H4.59L4.5,2a.94.94,0,0,0-.29.06A2.12,2.12,0,0,0,4,2.2l-.12.09a1,1,0,0,0-.22.32A8.72,8.72,0,0,0,3,6a9,9,0,0,0,8,8.94V20H6a1,1,0,0,0,0,2H18a1,1,0,0,0,0-2ZM5,6a6.91,6.91,0,0,1,.29-2H18.71A6.91,6.91,0,0,1,19,6,7,7,0,0,1,5,6Z'
  }));
};

export default UilGlassMartini;