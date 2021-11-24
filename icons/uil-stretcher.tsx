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
const UilStretcher = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M18,4.5h3a1,1,0,0,0,0-2H18a1,1,0,0,0,0,2Zm3,2H3a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H4.55l5.11,2.56L7.08,16.35A3,3,0,0,0,5,15.5a3,3,0,1,0,3,3,2.2,2.2,0,0,0,0-.36l3.94-2L16,18.24a2.3,2.3,0,0,0,0,.26,3,3,0,1,0,3-3,3,3,0,0,0-2.15.92l-2.72-1.36,5.11-2.56H21a1,1,0,0,0,1-1v-4A1,1,0,0,0,21,6.5ZM5,19.5a1,1,0,1,1,1-1A1,1,0,0,1,5,19.5Zm14-2a1,1,0,1,1-1,1A1,1,0,0,1,19,17.5Zm-7.1-3.56L9,12.5h5.75ZM20,10.5H4v-2H20Z'
  }));
};

export default UilStretcher;