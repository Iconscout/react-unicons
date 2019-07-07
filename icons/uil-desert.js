import React from 'react';
import PropTypes from 'prop-types';

const UilDesert = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M18,2a4,4,0,1,0,4,4A4,4,0,0,0,18,2Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,8ZM15,20H13V18a1,1,0,0,0-2,0v2H9V16.62l3.45-1.73A1,1,0,0,0,13,14V10a1,1,0,0,0-2,0v3.38l-2,1V8A1,1,0,0,0,7,8v8.38l-2-1V13a1,1,0,0,0-2,0v3a1,1,0,0,0,.55.89L7,18.62V20H3a1,1,0,0,0,0,2H15a1,1,0,0,0,0-2Z'
  }));
};

UilDesert.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilDesert.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilDesert;