import React from 'react';
import PropTypes from 'prop-types';

const UilVideoSlash = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M7.71,6.29h0l-4-4A1,1,0,0,0,2.29,3.71L4.62,6A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3h9a3,3,0,0,0,1.9-.69l4.39,4.4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM14,16H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8H6.59l7.87,7.88A1,1,0,0,1,14,16Zm7.53-8.85a1,1,0,0,0-1,0L17,8.89A3,3,0,0,0,14,6H12.66a1,1,0,0,0,0,2H14a1,1,0,0,1,1,1v1.5h0a1.62,1.62,0,0,0,0,.19.65.65,0,0,0,.05.2h0s.05.06.07.1a1,1,0,0,0,.15.21s.1.06.15.1l.17.11a.85.85,0,0,0,.23,0,.7.7,0,0,0,.14,0h0a1.62,1.62,0,0,0,.19,0,.65.65,0,0,0,.2-.05h0L20,9.62v5.72a1,1,0,1,0,2,0V8A1,1,0,0,0,21.53,7.15Z'
  }));
};

UilVideoSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilVideoSlash.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilVideoSlash;