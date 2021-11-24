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
const UilMedicalSquareFull = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,20H4V4H20ZM7,14.79H9v2a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1v-2h2a1,1,0,0,0,1-1v-4a1,1,0,0,0-1-1H15v-2a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v2H7a1,1,0,0,0-1,1v4A1,1,0,0,0,7,14.79Zm1-4h2a1,1,0,0,0,1-1v-2h2v2a1,1,0,0,0,1,1h2v2H14a1,1,0,0,0-1,1v2H11v-2a1,1,0,0,0-1-1H8Z'
  }));
};

export default UilMedicalSquareFull;