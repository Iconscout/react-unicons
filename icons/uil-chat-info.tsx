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
const UilChatInfo = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M19.29,3.71a1,1,0,0,0,1.42,0,1.15,1.15,0,0,0,.21-.33A1,1,0,0,0,21,3a1,1,0,0,0-.29-.71l-.15-.12a.76.76,0,0,0-.18-.09,1,1,0,0,0-1.09.21A1,1,0,0,0,19,3a1,1,0,0,0,.08.38A1.15,1.15,0,0,0,19.29,3.71ZM20,5a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V6A1,1,0,0,0,20,5Zm.06,8a1,1,0,0,0-1.11.87A7,7,0,0,1,12,20H6.41l.64-.63a1,1,0,0,0,0-1.41A7,7,0,0,1,12,6a6.91,6.91,0,0,1,3.49.94,1,1,0,0,0,1-1.72A8.84,8.84,0,0,0,12,4,9,9,0,0,0,5,18.62L3.29,20.29a1,1,0,0,0-.21,1.09A1,1,0,0,0,4,22h8a9,9,0,0,0,8.93-7.88A1,1,0,0,0,20.06,13Z'
  }));
};

export default UilChatInfo;