import React from 'react';
import { Props } from '../index';

/**
 * 
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const UilSubway = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M16,17a1,1,0,0,0,1-1,1.36,1.36,0,0,0,0-.2.64.64,0,0,0-.06-.18.76.76,0,0,0-.09-.18l-.12-.15a1.15,1.15,0,0,0-.33-.21,1,1,0,0,0-.76,0,1.15,1.15,0,0,0-.33.21l-.12.15a.76.76,0,0,0-.09.18.64.64,0,0,0-.06.18,1.36,1.36,0,0,0,0,.2,1,1,0,0,0,1,1ZM18,2H6A3,3,0,0,0,3,5V17a3,3,0,0,0,1.2,2.39l-.91.9a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L6.41,20H17.59l1.7,1.71a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-.91-.9A3,3,0,0,0,21,17V5A3,3,0,0,0,18,2ZM5,8h6v4H5Zm14,9a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V14H19Zm0-5H13V8h6Zm0-6H5V5A1,1,0,0,1,6,4H18a1,1,0,0,1,1,1ZM8,17a1,1,0,0,0,1-1,1.36,1.36,0,0,0,0-.2.64.64,0,0,0-.06-.18.76.76,0,0,0-.09-.18l-.12-.15a1.15,1.15,0,0,0-.33-.21,1,1,0,0,0-.76,0,1.15,1.15,0,0,0-.33.21l-.12.15a.76.76,0,0,0-.09.18A.64.64,0,0,0,7,15.8,1.36,1.36,0,0,0,7,16a1,1,0,0,0,.29.7A1,1,0,0,0,8,17Z'
  }));
};

export default UilSubway;