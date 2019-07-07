import React from 'react';
import PropTypes from 'prop-types';

const UilTrademark = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M9.5,7h-6a1,1,0,0,0,0,2h2v7a1,1,0,0,0,2,0V9h2a1,1,0,0,0,0-2Zm11.92.62a1,1,0,0,0-.54-.54,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21L17,10.09l-2.79-2.8a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.54.54A1,1,0,0,0,12.5,8v8a1,1,0,0,0,2,0V10.41l1.79,1.8a1,1,0,0,0,1.42,0l1.79-1.8V16a1,1,0,0,0,2,0V8A1,1,0,0,0,21.42,7.62Z'
  }));
};

UilTrademark.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilTrademark.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilTrademark;