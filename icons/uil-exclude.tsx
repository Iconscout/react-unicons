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
const UilExclude = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M9.54,7.54h-1a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0,1,1,0,1,0,0-2Zm5.92,5.92a1,1,0,0,0-1,1,1,1,0,0,0,0,2h1a1,1,0,0,0,1-1v-1A1,1,0,0,0,15.46,13.46ZM21,7.54H16.46V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V15.46a1,1,0,0,0,1,1H7.54V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V8.54A1,1,0,0,0,21,7.54ZM20,20H9.54V16.46a1,1,0,0,0,0-2,1,1,0,0,0-2,0H4V4H14.46V7.54a1,1,0,0,0,0,2,1,1,0,0,0,2,0H20Z'
  }));
};

export default UilExclude;