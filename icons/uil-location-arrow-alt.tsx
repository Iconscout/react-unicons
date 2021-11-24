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
const UilLocationArrowAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M21.68,17.65l-7-14a3,3,0,0,0-5.36,0l-7,14a3,3,0,0,0,3.9,4.08l5.37-2.4h0a1.06,1.06,0,0,1,.82,0l5.37,2.4a3,3,0,0,0,3.9-4.08Zm-2,2a1,1,0,0,1-1.13.22l-5.37-2.39a3,3,0,0,0-2.44,0L5.41,19.9a1,1,0,0,1-1.3-1.35l7-14a1,1,0,0,1,1.78,0l7,14A1,1,0,0,1,19.72,19.68Z'
  }));
};

export default UilLocationArrowAlt;