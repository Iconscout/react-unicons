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
const UilAdjustAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M20.83,7.32h0a.2.2,0,0,0,0-.08,10,10,0,0,0-3.38-3.65l0,0h0A9.89,9.89,0,0,0,12,2a1,1,0,0,0-1,1V21a1,1,0,0,0,1,1h.28A10,10,0,0,0,20.83,7.32ZM13,4.06a8,8,0,0,1,2.49.74L13,9.12Zm0,9.06L17.17,5.9a7.89,7.89,0,0,1,1.58,1.83L13,17.69Zm1.16,6.57L19.75,10A8.36,8.36,0,0,1,20,12,7.94,7.94,0,0,1,14.16,19.69Z'
  }));
};

export default UilAdjustAlt;