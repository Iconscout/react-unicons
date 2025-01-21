import React from 'react';
import PropTypes from 'prop-types';

const UilCapsule = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M19.5,4.5a5.12,5.12,0,0,0-7.24,0L4.5,12.26a5.12,5.12,0,1,0,7.24,7.24l7.76-7.76A5.12,5.12,0,0,0,19.5,4.5ZM10.32,18.09a3.21,3.21,0,0,1-4.41,0,3.13,3.13,0,0,1,0-4.41L9.09,10.5l4.41,4.41Zm7.77-7.77L14.91,13.5,10.5,9.09l3.18-3.18a3.12,3.12,0,0,1,4.41,4.41Z'
  }));
};

UilCapsule.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilCapsule;