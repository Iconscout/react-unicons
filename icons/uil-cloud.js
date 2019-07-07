import React from 'react';
import PropTypes from 'prop-types';

const UilCloud = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M18.42,9.21a7,7,0,0,0-13.36,1.9A4,4,0,0,0,6,19H17a5,5,0,0,0,1.42-9.79ZM17,17H6a2,2,0,0,1,0-4,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.66A3,3,0,0,1,17,17Z'
  }));
};

UilCloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCloud.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCloud;