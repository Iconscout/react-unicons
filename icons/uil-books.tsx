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
const UilBooks = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M22.47,18.82l-1-3.86h0L18.32,3.37a1,1,0,0,0-1.22-.71l-3.87,1a1,1,0,0,0-.73-.33H2.5a1,1,0,0,0-1,1v16a1,1,0,0,0,1,1h10a1,1,0,0,0,1-1v-8l2.2,8.22a1,1,0,0,0,1,.74,1.15,1.15,0,0,0,.26,0l4.83-1.29a1,1,0,0,0,.61-.47A1.05,1.05,0,0,0,22.47,18.82Zm-16,.55h-3v-2h3Zm0-4h-3v-6h3Zm0-8h-3v-2h3Zm5,12h-3v-2h3Zm0-4h-3v-6h3Zm0-8h-3v-2h3Zm2.25-1.74,2.9-.78.52,1.93-2.9.78Zm2.59,9.66-1.55-5.8,2.9-.78,1.55,5.8Zm1,3.86-.52-1.93,2.9-.78.52,1.93Z'
  }));
};

export default UilBooks;