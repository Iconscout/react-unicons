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
const UilForward = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M20.67,9.69,14,5.84a2.67,2.67,0,0,0-4,2.31h0L6,5.84A2.67,2.67,0,0,0,2,8.15v7.7a2.63,2.63,0,0,0,1.33,2.3,2.61,2.61,0,0,0,1.34.37A2.69,2.69,0,0,0,6,18.16l4-2.31h0a2.65,2.65,0,0,0,1.33,2.31,2.66,2.66,0,0,0,2.67,0l6.67-3.85a2.67,2.67,0,0,0,0-4.62ZM10,13.54,5,16.42a.67.67,0,0,1-1-.57V8.15a.67.67,0,0,1,1-.57l5,2.88Zm9.67-1L13,16.43a.69.69,0,0,1-.67,0,.66.66,0,0,1-.33-.58V8.15a.66.66,0,0,1,.33-.58.78.78,0,0,1,.34-.09.63.63,0,0,1,.33.09l6.67,3.85a.67.67,0,0,1,0,1.16Z'
  }));
};

export default UilForward;