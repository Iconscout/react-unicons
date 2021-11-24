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
const UilLayerGroupSlash = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M10.26,5,12,4l7,4L15.85,9.83a1,1,0,0,0-.37,1.36,1,1,0,0,0,1.37.37L21.5,8.87a1,1,0,0,0,0-1.74l-9-5.2a1,1,0,0,0-1,0L9.26,3.23A1,1,0,0,0,8.89,4.6,1,1,0,0,0,10.26,5ZM3.71,2.29A1,1,0,0,0,2.29,3.71L4.54,6l-2,1.17a1,1,0,0,0,0,1.74l9,5.2a1,1,0,0,0,1,0l.1-.06,1.07,1.07-1.67,1L3.5,11.13a1,1,0,1,0-1,1.74l9,5.2a1,1,0,0,0,.5.13,1,1,0,0,0,.5-.13l2.63-1.52,1.07,1.07L12,20,3.5,15.13a1,1,0,0,0-1,1.74l9,5.2a1,1,0,0,0,1,0l5.17-3,2.62,2.63a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM5,8l1-.58,2.75,2.75Zm15.5,3.13-2.12,1.22a1,1,0,0,0,1,1.74l2.12-1.22a1,1,0,1,0-1-1.74Z'
  }));
};

export default UilLayerGroupSlash;