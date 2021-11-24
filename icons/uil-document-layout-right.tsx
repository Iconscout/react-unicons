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
const UilDocumentLayoutRight = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M13,18H3a1,1,0,0,0,0,2H13a1,1,0,0,0,0-2ZM3,8h8a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm0,4h8a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm18,2H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM21,4H15a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V5A1,1,0,0,0,21,4Zm-1,6H16V6h4Z'
  }));
};

export default UilDocumentLayoutRight;