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
const UilMobileVibrate = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M9.88,14.12,9.73,14l-.18-.1-.18-.05a1,1,0,0,0-.9.27.83.83,0,0,0-.22.33.94.94,0,0,0,0,.76,1.07,1.07,0,0,0,.54.54,1,1,0,0,0,.38.08,1.09,1.09,0,0,0,.39-.08.87.87,0,0,0,.32-.22,1,1,0,0,0,.22-.32,1,1,0,0,0,.07-.38.84.84,0,0,0-.08-.38A.93.93,0,0,0,9.88,14.12ZM3.51,8.76a1,1,0,0,0,.71-.3L8.46,4.22a1,1,0,0,0,0-1.41,1,1,0,0,0-1.41,0L2.81,7.05a1,1,0,0,0,0,1.41A1,1,0,0,0,3.51,8.76Zm17.68,6.78a1,1,0,0,0-1.41,0l-4.24,4.24a1,1,0,0,0,.7,1.71,1,1,0,0,0,.71-.3L21.19,17A1,1,0,0,0,21.19,15.54Zm.17-5.66a3,3,0,0,0-.87-2.12L16.24,3.51a3.08,3.08,0,0,0-4.24,0L3.51,12a3,3,0,0,0,0,4.24l4.25,4.25h0a3,3,0,0,0,4.24,0L20.49,12A3,3,0,0,0,21.36,9.88Zm-2.29.71-8.48,8.48a1,1,0,0,1-1.42,0h0L4.93,14.83a1,1,0,0,1,0-1.42l8.48-8.48a1,1,0,0,1,1.42,0l4.24,4.24a1,1,0,0,1,0,1.42Z'
  }));
};

export default UilMobileVibrate;