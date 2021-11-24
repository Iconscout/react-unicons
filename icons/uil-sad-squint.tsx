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
const UilSadSquint = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M9.08,12.21l1.5-1.5a1,1,0,0,0,0-1.42l-1.5-1.5A1,1,0,0,0,7.66,9.21l.8.79-.8.79a1,1,0,0,0,0,1.42,1,1,0,0,0,.71.29A1,1,0,0,0,9.08,12.21Zm-.72,3.12a1,1,0,0,0-.13,1.4,1,1,0,0,0,1.41.13,3.76,3.76,0,0,1,4.72,0,1,1,0,0,0,1.41-.13,1,1,0,0,0-.13-1.4A5.81,5.81,0,0,0,8.36,15.33Zm8.22-7.54a1,1,0,0,0-1.42,0l-1.5,1.5a1,1,0,0,0,0,1.42l1.5,1.5a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42L15.79,10l.79-.79A1,1,0,0,0,16.58,7.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
  }));
};

export default UilSadSquint;