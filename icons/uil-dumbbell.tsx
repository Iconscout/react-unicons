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
const UilDumbbell = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M17.48,6.55v0h0L14.64,3.71a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l2.12,2.12-8.1,8.1L5.12,13.22a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l2.81,2.81v0h0l2.81,2.81a1,1,0,0,0,.71.3,1,1,0,0,0,.71-1.71L8.66,16.76l8.1-8.1,2.12,2.12a1,1,0,1,0,1.41-1.42ZM3.71,17.46a1,1,0,0,0-1.42,1.42l2.83,2.83a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42Zm18-12.34L18.88,2.29a1,1,0,0,0-1.42,1.42l2.83,2.83a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,5.12Z'
  }));
};

export default UilDumbbell;