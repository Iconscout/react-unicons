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
const UilDialpadAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M5,9.25A2.75,2.75,0,1,0,7.75,12,2.75,2.75,0,0,0,5,9.25Zm0,4A1.25,1.25,0,1,1,6.25,12,1.25,1.25,0,0,1,5,13.25Zm7-4A2.75,2.75,0,1,0,14.75,12,2.75,2.75,0,0,0,12,9.25Zm0,4A1.25,1.25,0,1,1,13.25,12,1.25,1.25,0,0,1,12,13.25Zm7-5.5A2.75,2.75,0,1,0,16.25,5,2.75,2.75,0,0,0,19,7.75Zm0-4A1.25,1.25,0,1,1,17.75,5,1.25,1.25,0,0,1,19,3.75Zm0,5.5A2.75,2.75,0,1,0,21.75,12,2.75,2.75,0,0,0,19,9.25Zm0,4A1.25,1.25,0,1,1,20.25,12,1.25,1.25,0,0,1,19,13.25ZM5,2.25A2.75,2.75,0,1,0,7.75,5,2.75,2.75,0,0,0,5,2.25Zm0,4A1.25,1.25,0,1,1,6.25,5,1.25,1.25,0,0,1,5,6.25Zm7,10A2.75,2.75,0,1,0,14.75,19,2.75,2.75,0,0,0,12,16.25Zm0,4A1.25,1.25,0,1,1,13.25,19,1.25,1.25,0,0,1,12,20.25Zm0-18A2.75,2.75,0,1,0,14.75,5,2.75,2.75,0,0,0,12,2.25Zm0,4A1.25,1.25,0,1,1,13.25,5,1.25,1.25,0,0,1,12,6.25Z'
  }));
};

export default UilDialpadAlt;