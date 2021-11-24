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
const UilMegaphone = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M19.99121,2.002a.99943.99943,0,0,0-1,1v.63672a9.03617,9.03617,0,0,1-7,3.36328h-6a3.00328,3.00328,0,0,0-3,3v2a3.00328,3.00328,0,0,0,3,3H6.475L4.07227,20.6084A.99931.99931,0,0,0,4.99121,22.002h4a.99857.99857,0,0,0,.91895-.60644L12.63391,15.04a9.02805,9.02805,0,0,1,6.3573,3.32507V19.002a1,1,0,0,0,2,0v-16A.99942.99942,0,0,0,19.99121,2.002Zm-14,11a1.00067,1.00067,0,0,1-1-1v-2a1.00068,1.00068,0,0,1,1-1h1v4Zm2.34082,7H6.50781l2.14258-5h1.82422ZM18.99121,15.5238a11.052,11.052,0,0,0-7-2.52185h-3v-4h3a11.05281,11.05281,0,0,0,7-2.52234Z'
  }));
};

export default UilMegaphone;