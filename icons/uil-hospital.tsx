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
const UilHospital = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M12.5,16.5h-1a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm0-4h-1a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-5,4h-1a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm0-4h-1a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm14-6h-3v-4a.99974.99974,0,0,0-1-1H6.5a.99974.99974,0,0,0-1,1v4h-3a.99974.99974,0,0,0-1,1v14a.99974.99974,0,0,0,1,1h19a.99974.99974,0,0,0,1-1V7.5A.99974.99974,0,0,0,21.5,6.5Zm-1,14H3.5V8.5h3a.99974.99974,0,0,0,1-1v-4h9v4a.99974.99974,0,0,0,1,1h3Zm-4-8a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM13.5,7H13V6.5a1,1,0,0,0-2,0V7h-.5a1,1,0,0,0,0,2H11v.5a1,1,0,0,0,2,0V9h.5a1,1,0,0,0,0-2Zm4,9.5h-1a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Z'
  }));
};

export default UilHospital;