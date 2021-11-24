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
const UilTear = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M12.56,2.17a1,1,0,0,0-1.12,0c-.3.2-7.19,5-7.19,12.08a7.75,7.75,0,0,0,15.5,0C19.75,7.05,12.85,2.36,12.56,2.17ZM12,20a5.76,5.76,0,0,1-5.75-5.75c0-5,4.21-8.77,5.75-10,1.55,1.21,5.75,5,5.75,10A5.76,5.76,0,0,1,12,20Z'
  }));
};

export default UilTear;