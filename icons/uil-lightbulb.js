import React from 'react';
import PropTypes from 'prop-types';

const UilLightbulb = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M17.45,12.46a7,7,0,0,0-1-9.83,7.09,7.09,0,0,0-5.92-1.4,7,7,0,0,0-4,11.15,4.76,4.76,0,0,1,1.08,2.86v.29A2,2,0,0,0,7,16.93v2a2,2,0,0,0,2,2v1a1,1,0,0,0,2,0v-1h2v1a1,1,0,0,0,2,0v-1a2,2,0,0,0,2-2v-2a2,2,0,0,0-.57-1.4V15.1A4.26,4.26,0,0,1,17.45,12.46ZM9,18.93v-2h6v2Zm6.89-7.72a6.18,6.18,0,0,0-1.46,3.72H9.56a6.67,6.67,0,0,0-1.5-3.78,5,5,0,0,1,2.84-8A5,5,0,0,1,17,8.07,4.92,4.92,0,0,1,15.89,11.21Z'
  }));
};

UilLightbulb.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilLightbulb;