import React from 'react';
import PropTypes from 'prop-types';

const UilSolid = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M20.4,7.1c-0.1-0.1-0.2-0.1-0.4-0.1h0c-0.3,0-0.5,0-0.8-0.1c-1.7-0.4-2.9-1.7-3-3.4V3.1c0-0.3-0.2-0.5-0.5-0.5h-3.1c-0.3,0-0.5,0.2-0.5,0.5v12.5c0,1.2-1,2.1-2.1,2.1c0,0,0,0,0,0c-0.7,0-1.3-0.3-1.7-0.8c-0.7-0.9-0.5-2.3,0.4-3c0.4-0.3,0.8-0.3,1.6-0.3c0.1,0,0.3,0,0.4-0.1s0.2-0.2,0.2-0.4V9.8c0-0.2-0.2-0.5-0.4-0.5c-1.6-0.2-3.2,0.2-4.4,1.2c-1.1,1-1.9,2.4-2.1,4.1c-0.3,1.9,0.4,3.9,1.7,5.2c1.2,1.3,2.9,1.9,4.5,1.9c1.6,0,3.2-0.6,4.4-1.8c1.2-1.2,1.9-2.8,1.9-4.5v-5.5c1.2,0.6,2.5,1,3.8,1c0.3,0,0.5-0.2,0.5-0.5V7.4C20.6,7.3,20.5,7.2,20.4,7.1z'
  }));
};

UilSolid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilSolid.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilSolid;