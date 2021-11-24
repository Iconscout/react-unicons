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
const UilBorderTop = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M8,18.5a1,1,0,1,0,1,1A1,1,0,0,0,8,18.5Zm0-8a1,1,0,1,0,1,1A1,1,0,0,0,8,10.5Zm4,8a1,1,0,1,0,1,1A1,1,0,0,0,12,18.5ZM4,6.5a1,1,0,1,0,1,1A1,1,0,0,0,4,6.5Zm0,12a1,1,0,1,0,1,1A1,1,0,0,0,4,18.5Zm0-14H20a1,1,0,0,0,0-2H4a1,1,0,0,0,0,2Zm0,10a1,1,0,1,0,1,1A1,1,0,0,0,4,14.5Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,4,10.5Zm8-4a1,1,0,1,0,1,1A1,1,0,0,0,12,6.5Zm8,8a1,1,0,1,0,1,1A1,1,0,0,0,20,14.5Zm0,4a1,1,0,1,0,1,1A1,1,0,0,0,20,18.5Zm-8-4a1,1,0,1,0,1,1A1,1,0,0,0,12,14.5Zm8-8a1,1,0,1,0,1,1A1,1,0,0,0,20,6.5Zm0,4a1,1,0,1,0,1,1A1,1,0,0,0,20,10.5Zm-8,0a1,1,0,1,0,1,1A1,1,0,0,0,12,10.5Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,16,10.5Zm0,8a1,1,0,1,0,1,1A1,1,0,0,0,16,18.5Z'
  }));
};

export default UilBorderTop;