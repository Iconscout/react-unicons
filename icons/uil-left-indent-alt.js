import React from 'react';
import PropTypes from 'prop-types';

const UilLeftIndentAlt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M9,5A1,1,0,0,0,8,6V18a1,1,0,0,0,2,0V6A1,1,0,0,0,9,5Zm4,2h8a1,1,0,0,0,0-2H13a1,1,0,0,0,0,2ZM5.77,9.69a1,1,0,0,0-1.41-.13l-2,1.67a1,1,0,0,0,0,1.54l2,1.67a1,1,0,0,0,1.41-.13,1,1,0,0,0-.13-1.41L4.56,12l1.08-.9A1,1,0,0,0,5.77,9.69ZM21,9H13a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Zm0,4H13a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Zm0,4H13a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z'
  }));
};

UilLeftIndentAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilLeftIndentAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilLeftIndentAlt;