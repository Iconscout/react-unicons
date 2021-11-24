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
const UilBasketball = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M12,2A10,10,0,0,0,3.6,6.59l0,0A10,10,0,0,0,18.26,19.79l0,0A10,10,0,0,0,12,2Zm2,2.26A8,8,0,0,1,19.74,10,9.78,9.78,0,0,0,15,11.38a15.7,15.7,0,0,0-2.4-2.21A10.06,10.06,0,0,0,14,4.26ZM12,4a7.9,7.9,0,0,1-1.14,4.07c-.15-.08-.29-.17-.44-.24A15.52,15.52,0,0,0,6.33,6.36,8,8,0,0,1,12,4ZM5,8.16A13.75,13.75,0,0,1,9.49,9.6l.13.08A7.93,7.93,0,0,1,4,12,8,8,0,0,1,5,8.16Zm5,11.58A8,8,0,0,1,4.26,14a9.9,9.9,0,0,0,7.08-3.21,14,14,0,0,1,2,1.8A10,10,0,0,0,10,19.74ZM12,20a8,8,0,0,1,2.56-5.85c.06.08.12.15.17.23a14,14,0,0,1,1.84,4.18A7.93,7.93,0,0,1,12,20Zm6.21-3a16,16,0,0,0-1.8-3.75L16.2,13A7.93,7.93,0,0,1,20,12,8,8,0,0,1,18.21,17Z'
  }));
};

export default UilBasketball;