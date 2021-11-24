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
const UilPresentationLine = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M21,14H20V3a1,1,0,0,0-1-1H5A1,1,0,0,0,4,3V14H3a1,1,0,0,0,0,2h8v1.15l-4.55,3A1,1,0,0,0,7,22a.94.94,0,0,0,.55-.17L11,19.55V21a1,1,0,0,0,2,0V19.55l3.45,2.28A.94.94,0,0,0,17,22a1,1,0,0,0,.55-1.83l-4.55-3V16h8a1,1,0,0,0,0-2Zm-3,0H6V4H18ZM9,12a1,1,0,0,0,.83-.45l1.33-2,1.13,1.14a1,1,0,0,0,.81.29,1,1,0,0,0,.73-.45l2-3a1,1,0,0,0-1.66-1.1l-1.33,2L11.71,7.29A1,1,0,0,0,10.9,7a1,1,0,0,0-.73.45l-2,3a1,1,0,0,0,.28,1.38A.94.94,0,0,0,9,12Z'
  }));
};

export default UilPresentationLine;