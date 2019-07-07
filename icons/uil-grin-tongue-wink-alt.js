import React from 'react';
import PropTypes from 'prop-types';

const UilGrinTongueWinkAlt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M9.21,10.54a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41,3.08,3.08,0,0,0-4.24,0,1,1,0,1,0,1.41,1.41A1,1,0,0,1,9.21,10.54ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15,9a1,1,0,1,0,1,1A1,1,0,0,0,15,9Zm0,4H9a1,1,0,0,0,0,2,3,3,0,0,0,6,0,1,1,0,0,0,0-2Zm-3,3a1,1,0,0,1-1-1h2A1,1,0,0,1,12,16Z'
  }));
};

UilGrinTongueWinkAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilGrinTongueWinkAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilGrinTongueWinkAlt;