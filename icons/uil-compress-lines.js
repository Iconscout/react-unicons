import React from 'react';
import PropTypes from 'prop-types';

const UilCompressLines = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M17,20H13V16.41l.79.8a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-2.5-2.5a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-2.5,2.5a1,1,0,0,0,1.42,1.42l.79-.8V20H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2ZM7,4h4V7.59l-.79-.8A1,1,0,1,0,8.79,8.21l2.5,2.5a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l2.5-2.5a1,1,0,1,0-1.42-1.42l-.79.8V4h4a1,1,0,0,0,0-2H7A1,1,0,0,0,7,4Z'
  }));
};

UilCompressLines.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCompressLines.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCompressLines;