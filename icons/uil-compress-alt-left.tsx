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
const UilCompressAltLeft = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M10.5,5.5a1,1,0,0,0-1,1V8.09L3.71,2.29A1,1,0,0,0,2.29,3.71L8.09,9.5H6.5a1,1,0,0,0,0,2h4a1,1,0,0,0,.38-.08,1,1,0,0,0,.54-.54,1,1,0,0,0,.08-.38v-4A1,1,0,0,0,10.5,5.5ZM21.71,20.29l-5.8-5.79H17.5a1,1,0,0,0,0-2h-4a1,1,0,0,0-.38.08,1,1,0,0,0-.54.54,1,1,0,0,0-.08.38v4a1,1,0,0,0,2,0V15.91l5.79,5.8a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29Z'
  }));
};

export default UilCompressAltLeft;