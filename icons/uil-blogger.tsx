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
const UilBlogger = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M9.71008,10.46008h2.23883a.77084.77084,0,1,0,0-1.54168H9.71008a.77084.77084,0,1,0,0,1.54168Zm9.71826-8.45837H4.555A2.57277,2.57277,0,0,0,1.9917,4.56506V19.43829A2.57278,2.57278,0,0,0,4.555,22.00171H19.42822a2.57268,2.57268,0,0,0,2.56348-2.56329V4.56506A2.57267,2.57267,0,0,0,19.42834,2.00171ZM18.35577,11.6795l-.01965,2.67542a4.0515,4.0515,0,0,1-4.03857,4.02179h-4.639a4.04922,4.04922,0,0,1-4.04181-4.0249V9.65747A4.05258,4.05258,0,0,1,9.65851,5.62671h2.82373a4.45954,4.45954,0,0,1,3.1203,2.19971,3.15646,3.15646,0,0,1,.36182,1.36767c.06738.50556.10284.88123.33007,1.08942.31934.28949,1.50727.09448,1.74219.27844l.17883.13983.10889.22168.036.17755Zm-4.097,1.8639H9.71008a.75035.75035,0,1,0,0,1.5h4.54871a.75024.75024,0,1,0,0-1.5Z'
  }));
};

export default UilBlogger;