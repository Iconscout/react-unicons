import React from 'react';
import PropTypes from 'prop-types';

const UilCloudShowers = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M8,11a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V12A1,1,0,0,0,8,11Zm4,6a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V18A1,1,0,0,0,12,17ZM8,17a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V18A1,1,0,0,0,8,17ZM18.42,6.22A7,7,0,0,0,5.06,8.11,4,4,0,0,0,2,12a4,4,0,0,0,1.34,3,1,1,0,1,0,1.32-1.5A2,2,0,0,1,4,12a2,2,0,0,1,2-2A1,1,0,0,0,7,9a5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67A3,3,0,0,1,20,11a2.91,2.91,0,0,1-.74,2,1,1,0,0,0,1.48,1.34,5,5,0,0,0-2.32-8.08ZM12,11a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V12A1,1,0,0,0,12,11Zm4,0a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V12A1,1,0,0,0,16,11Zm0,6a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V18A1,1,0,0,0,16,17Z'
  }));
};

UilCloudShowers.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCloudShowers.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCloudShowers;