import React from 'react';
import PropTypes from 'prop-types';

const UilDollarAlt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M14,11H13V7h2a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-3-3H13V3a1,1,0,0,0-2,0V5H10a4,4,0,0,0,0,8h1v4H9a1,1,0,0,1-1-1,1,1,0,0,0-2,0,3,3,0,0,0,3,3h2v2a1,1,0,0,0,2,0V19h1a4,4,0,0,0,0-8Zm-3,0H10a2,2,0,0,1,0-4h1Zm3,6H13V13h1a2,2,0,0,1,0,4Z'
  }));
};

UilDollarAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilDollarAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilDollarAlt;