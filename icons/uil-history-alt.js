import React from 'react';
import PropTypes from 'prop-types';

const UilHistoryAlt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M11.44,2A10,10,0,0,0,4.56,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1H8.06a1,1,0,0,0,0-2H5.66A8,8,0,1,1,11.44,20a1,1,0,1,0,0,2,10,10,0,1,0,0-20Zm0,6a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h2a1,1,0,0,0,0-2h-1V9A1,1,0,0,0,11.44,8Z'
  }));
};

UilHistoryAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilHistoryAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilHistoryAlt;