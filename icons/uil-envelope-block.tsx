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
const UilEnvelopeBlock = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M17.5,13.26A5,5,0,1,0,14,11.79,5,5,0,0,0,17.5,13.26Zm2.12-2.88a3,3,0,0,1-3.4.58l4-4A3,3,0,0,1,19.62,10.38ZM15.38,6.14a3,3,0,0,1,2.12-.88,3,3,0,0,1,1.28.3l-4,4A3,3,0,0,1,15.38,6.14Zm5.12,8.12a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H4.5a1,1,0,0,1-1-1V9.67l5.88,5.88a3,3,0,0,0,2.11.88,3,3,0,0,0,2.16-.91,1,1,0,0,0,0-1.39,1,1,0,0,0-1.43,0,1,1,0,0,1-1.4,0L4.91,8.26H9.5a1,1,0,0,0,0-2h-5a3,3,0,0,0-3,3v10a3,3,0,0,0,3,3h14a3,3,0,0,0,3-3v-4A1,1,0,0,0,20.5,14.26Z'
  }));
};

export default UilEnvelopeBlock;