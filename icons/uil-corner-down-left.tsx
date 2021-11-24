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
const UilCornerDownLeft = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M18.69,2a1,1,0,0,0-1,1V13.37a2,2,0,0,1-2,2h-8l2.92-2.92A1,1,0,0,0,9.24,11L4.61,15.66a1.19,1.19,0,0,0-.22.33,1,1,0,0,0,0,.76,1,1,0,0,0,.22.33l4.63,4.63a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42L7.73,17.37h8a4,4,0,0,0,4-4V3A1,1,0,0,0,18.69,2Z'
  }));
};

export default UilCornerDownLeft;