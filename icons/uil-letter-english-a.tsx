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
const UilLetterEnglishA = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M18.97021,19.75732,15.34912,5.27246A2.9958,2.9958,0,0,0,12.43848,3h-.877A2.9958,2.9958,0,0,0,8.65088,5.27246L5.02979,19.75732a1.0001,1.0001,0,0,0,1.94042.48536L8.28082,15h7.43836l1.31061,5.24268a1.0001,1.0001,0,0,0,1.94042-.48536ZM8.78082,13l1.81049-7.24219A.99825.99825,0,0,1,11.56152,5h.877a.99825.99825,0,0,1,.97021.75781L15.21918,13Z'
  }));
};

export default UilLetterEnglishA;