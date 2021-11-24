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
const UilCalendarSlash = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M11.66,7H15V8a1,1,0,0,0,2,0V7h1a1,1,0,0,1,1,1v3H17.66a1,1,0,0,0,0,2H19v1.34a1,1,0,1,0,2,0V8a3,3,0,0,0-3-3H17V4a1,1,0,0,0-2,0V5H11.66a1,1,0,0,0,0,2ZM21.71,20.29l-1.6-1.6h0L3.71,2.29A1,1,0,0,0,2.29,3.71L4.2,5.61A3,3,0,0,0,3,8V18a3,3,0,0,0,3,3H18a3,3,0,0,0,1.29-.3l1,1a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM5,8a1,1,0,0,1,.66-.93L9.59,11H5ZM6,19a1,1,0,0,1-1-1V13h6.59l6,6Z'
  }));
};

export default UilCalendarSlash;