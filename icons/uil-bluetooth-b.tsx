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
const UilBluetoothB = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M13.41,12l3.8-3.79a1,1,0,0,0,0-1.42l-4.5-4.5a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.54.54A1,1,0,0,0,11,3V9.59L8.21,6.79A1,1,0,1,0,6.79,8.21L10.59,12l-3.8,3.79a1,1,0,1,0,1.42,1.42L11,14.41V21a1,1,0,0,0,.08.38,1,1,0,0,0,.54.54.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4.5-4.5a1,1,0,0,0,0-1.42ZM13,5.41,15.09,7.5,13,9.59Zm0,13.18V14.41l2.09,2.09Z'
  }));
};

export default UilBluetoothB;