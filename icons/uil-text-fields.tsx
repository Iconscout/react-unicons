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
const UilTextFields = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M16,6a1,1,0,0,0-1-1H3A1,1,0,0,0,3,7H8V18a1,1,0,0,0,2,0V7h5A1,1,0,0,0,16,6Zm5,5H15a1,1,0,0,0,0,2h2v5a1,1,0,0,0,2,0V13h2a1,1,0,0,0,0-2Z'
  }));
};

export default UilTextFields;