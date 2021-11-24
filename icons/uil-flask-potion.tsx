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
const UilFlaskPotion = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M18.93,11.67a.42.42,0,0,0,0-.1A7.4,7.4,0,0,0,15,7.62V4h1a1,1,0,0,0,0-2H8A1,1,0,0,0,8,4H9V7.62a7.4,7.4,0,0,0-3.89,4,.42.42,0,0,0,0,.1,7.5,7.5,0,1,0,13.86,0ZM10.31,9.26A1,1,0,0,0,11,8.31V4h2V8.31a1,1,0,0,0,.69.95A5.43,5.43,0,0,1,16.23,11H7.77A5.43,5.43,0,0,1,10.31,9.26ZM12,20a5.51,5.51,0,0,1-5.5-5.5A5.34,5.34,0,0,1,6.72,13H17.28a5.34,5.34,0,0,1,.22,1.5A5.51,5.51,0,0,1,12,20Zm2-4a1,1,0,1,0,1,1A1,1,0,0,0,14,16Zm-4-1a1,1,0,1,0,1,1A1,1,0,0,0,10,15Z'
  }));
};

export default UilFlaskPotion;