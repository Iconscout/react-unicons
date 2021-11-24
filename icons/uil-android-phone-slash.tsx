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
const UilAndroidPhoneSlash = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M11.29,17.71a1,1,0,0,0,1.42,0,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76,1.15,1.15,0,0,0-.21-.33,1,1,0,0,0-1.42,0,1.15,1.15,0,0,0-.21.33.94.94,0,0,0,0,.76A1.15,1.15,0,0,0,11.29,17.71ZM8.66,4H16a1,1,0,0,1,1,1v7.34a1,1,0,0,0,2,0V5a3,3,0,0,0-3-3H8.66a1,1,0,0,0,0,2ZM21.71,20.29l-18-18A1,1,0,0,0,2.29,3.71L5,6.41V19a3,3,0,0,0,3,3h8a3,3,0,0,0,2.76-1.83l1.53,1.54a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM17,19a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8.41l10,10Z'
  }));
};

export default UilAndroidPhoneSlash;