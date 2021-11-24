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
const UilTablet = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Zm1,17a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1Zm-5.29-2.71A1,1,0,0,0,11.8,16l-.18.06a.76.76,0,0,0-.18.09l-.15.12a1,1,0,0,0-.21.33,1,1,0,0,0,.21,1.09,1.46,1.46,0,0,0,.33.22,1,1,0,0,0,1.09-.22A1,1,0,0,0,13,17a.84.84,0,0,0-.08-.38A1.15,1.15,0,0,0,12.71,16.29Z'
  }));
};

export default UilTablet;