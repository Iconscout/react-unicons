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
const UilShieldExclamation = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M12.92,15a.56.56,0,0,0-.09-.17l-.12-.15a1,1,0,0,0-1.42,0,.61.61,0,0,0-.12.15.56.56,0,0,0-.09.17.7.7,0,0,0-.06.19,1.23,1.23,0,0,0,0,.19.88.88,0,0,0,.08.39,1,1,0,0,0,1.3.54,1.19,1.19,0,0,0,.33-.22,1,1,0,0,0,.21-.32,1,1,0,0,0,.08-.39,1.23,1.23,0,0,0,0-.19A.7.7,0,0,0,12.92,15ZM12,7.36a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,7.36Zm7.63-3.71a1,1,0,0,0-.84-.2,8,8,0,0,1-6.22-1.27,1,1,0,0,0-1.14,0A8,8,0,0,1,5.21,3.45a1,1,0,0,0-.84.2A1,1,0,0,0,4,4.43v7.45a9,9,0,0,0,3.77,7.33l3.65,2.6a1,1,0,0,0,1.16,0l3.65-2.6A9,9,0,0,0,20,11.88V4.43A1,1,0,0,0,19.63,3.65ZM18,11.88a7,7,0,0,1-2.93,5.7L12,19.77,8.93,17.58A7,7,0,0,1,6,11.88V5.58a10,10,0,0,0,6-1.39,10,10,0,0,0,6,1.39Z'
  }));
};

export default UilShieldExclamation;