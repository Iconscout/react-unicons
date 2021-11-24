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
const UilFastMail = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M4.79,10.5h-2a1,1,0,1,0,0,2h2a1,1,0,0,0,0-2ZM21.57,7.66l0-.06,0,0h0A3,3,0,0,0,19.2,6.5H11.27a3,3,0,0,0-2,.74h0v0A2.93,2.93,0,0,0,8.31,9l-.88,5a3,3,0,0,0,.66,2.45,3,3,0,0,0,2.29,1.07h7.94a3,3,0,0,0,3-2.48l.88-5A3,3,0,0,0,21.57,7.66Zm-2.74.84-3.4,2.76a1,1,0,0,1-1.38-.12L11.72,8.5Zm.48,6.17a1,1,0,0,1-1,.83H10.38a1,1,0,0,1-.76-.36,1,1,0,0,1-.22-.81l.8-4.53,2.35,2.66a3,3,0,0,0,4.14.35L20.13,10ZM5.79,6.5h-3a1,1,0,1,0,0,2h3a1,1,0,0,0,0-2Z'
  }));
};

export default UilFastMail;