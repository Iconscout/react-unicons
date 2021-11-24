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
const UilCloudRain = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M12.56,12.67a1,1,0,0,0-1.12,0c-.11.08-2.69,1.86-2.69,4.58a3.25,3.25,0,0,0,6.5,0C15.25,14.5,12.67,12.74,12.56,12.67ZM12,18.5a1.25,1.25,0,0,1-1.25-1.25A3.66,3.66,0,0,1,12,14.8a3.61,3.61,0,0,1,1.25,2.45A1.25,1.25,0,0,1,12,18.5ZM18.42,7.72A7,7,0,0,0,5.06,9.61a4,4,0,0,0,.61,7.87h.08a1,1,0,0,0,1-.92,1,1,0,0,0-.92-1.08A2,2,0,0,1,4,13.5a2,2,0,0,1,2-2,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67,3,3,0,0,1,.43,5.79,1,1,0,0,0,.62,1.9,5,5,0,0,0-.14-9.53Z'
  }));
};

export default UilCloudRain;