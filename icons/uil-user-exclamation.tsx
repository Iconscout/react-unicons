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
const UilUserExclamation = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M14.55,12.22a4.92,4.92,0,0,0,1.7-3.72,5,5,0,0,0-10,0A4.92,4.92,0,0,0,8,12.22a8,8,0,0,0-4.7,7.28,1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,14.55,12.22Zm-3.3-.72a3,3,0,1,1,3-3A3,3,0,0,1,11.25,11.5Zm8.5-5a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0v-2A1,1,0,0,0,19.75,6.5ZM19,11.79a1.05,1.05,0,0,0-.29.71,1,1,0,0,0,.29.71,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,.9.9,0,0,0,.54-.54.84.84,0,0,0,.08-.38A1,1,0,0,0,19,11.79Z'
  }));
};

export default UilUserExclamation;