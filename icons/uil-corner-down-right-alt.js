import React from 'react';
import PropTypes from 'prop-types';

const UilCornerDownRightAlt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M20.92,12.62a1,1,0,0,0-.21-.33l-3-3a1,1,0,0,0-1.42,1.42L17.59,12H8a1,1,0,0,1-1-1V7A1,1,0,0,0,5,7v4a3,3,0,0,0,3,3h9.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3a1,1,0,0,0,.21-.33A1,1,0,0,0,20.92,12.62Z'
  }));
};

UilCornerDownRightAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCornerDownRightAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCornerDownRightAlt;