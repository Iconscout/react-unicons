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
const UilFolderSlash = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M21.71,20.29l-1.6-1.6h0L3.71,2.29A1,1,0,0,0,2.29,3.71L3.69,5.1A3,3,0,0,0,3,7V18a3,3,0,0,0,3,3H18a3,3,0,0,0,1.29-.3l1,1a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM6,19a1,1,0,0,1-1-1V7a1,1,0,0,1,.12-.46L17.59,19ZM10.62,6a1,1,0,0,1,.89.67l.54,1.64A1,1,0,0,0,13,9h5a1,1,0,0,1,1,1v4.34a1,1,0,1,0,2,0V10a3,3,0,0,0-3-3H13.72L13.4,6a3,3,0,0,0-2.68-2,1,1,0,0,0-.1,2Z'
  }));
};

export default UilFolderSlash;