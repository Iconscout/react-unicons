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
const UilLayerGroup = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M2.5,8.86l9,5.2a1,1,0,0,0,1,0l9-5.2A1,1,0,0,0,22,8a1,1,0,0,0-.5-.87l-9-5.19a1,1,0,0,0-1,0l-9,5.19A1,1,0,0,0,2,8,1,1,0,0,0,2.5,8.86ZM12,4l7,4-7,4L5,8Zm8.5,7.17L12,16,3.5,11.13a1,1,0,0,0-1.37.37,1,1,0,0,0,.37,1.36l9,5.2a1,1,0,0,0,1,0l9-5.2a1,1,0,0,0,.37-1.36A1,1,0,0,0,20.5,11.13Zm0,4L12,20,3.5,15.13a1,1,0,0,0-1.37.37,1,1,0,0,0,.37,1.36l9,5.2a1,1,0,0,0,1,0l9-5.2a1,1,0,0,0,.37-1.36A1,1,0,0,0,20.5,15.13Z'
  }));
};

export default UilLayerGroup;