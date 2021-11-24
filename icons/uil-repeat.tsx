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
const UilRepeat = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M5.5,17.5H4V6.5h7.8L11,7.29a1,1,0,0,0,1.41,1.42l2.5-2.5a1,1,0,0,0,0-1.42l-2.5-2.5a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l.79.79H3a1,1,0,0,0-1,1v13a1,1,0,0,0,1,1H5.5a1,1,0,0,0,0-2ZM21,4.5H18.5a1,1,0,0,0,0,2H20v11H11.63l.79-.79a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0l-2.5,2.5a1,1,0,0,0,0,1.42l2.5,2.5a1,1,0,0,0,1.41-1.42l-.79-.79H21a1,1,0,0,0,1-1V5.5A1,1,0,0,0,21,4.5Z'
  }));
};

export default UilRepeat;