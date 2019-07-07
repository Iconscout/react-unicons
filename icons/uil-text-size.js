import React from 'react';
import PropTypes from 'prop-types';

const UilTextSize = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M9,11H3a1,1,0,0,0,0,2H5v5a1,1,0,0,0,2,0V13H9a1,1,0,0,0,0-2ZM21,5H9A1,1,0,0,0,9,7h5V18a1,1,0,0,0,2,0V7h5a1,1,0,0,0,0-2Z'
  }));
};

UilTextSize.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilTextSize.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilTextSize;