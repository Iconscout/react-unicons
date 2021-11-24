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
const UilCloudBlock = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M18.42,7.72A7,7,0,0,0,5.06,9.61a4,4,0,0,0-.38,7.66,1.13,1.13,0,0,0,.32.05,1,1,0,0,0,.32-2A2,2,0,0,1,4,13.5a2,2,0,0,1,2-2,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67,3,3,0,0,1,1,5.53,1,1,0,1,0,1,1.74A5,5,0,0,0,22,12.5,5,5,0,0,0,18.42,7.72Zm-9.25,6a4,4,0,1,0,5.66,0A4.1,4.1,0,0,0,9.17,13.67ZM10,16.5a2,2,0,0,1,2-2,2.09,2.09,0,0,1,.51.07L10.07,17A2.09,2.09,0,0,1,10,16.5Zm3.41,1.41a2,2,0,0,1-1.91.5L13.93,16a2.09,2.09,0,0,1,.07.51A2,2,0,0,1,13.41,17.91Z'
  }));
};

export default UilCloudBlock;