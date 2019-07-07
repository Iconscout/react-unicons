import React from 'react';
import PropTypes from 'prop-types';

const UilTextFields = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M16,6a1,1,0,0,0-1-1H3A1,1,0,0,0,3,7H8V18a1,1,0,0,0,2,0V7h5A1,1,0,0,0,16,6Zm5,5H15a1,1,0,0,0,0,2h2v5a1,1,0,0,0,2,0V13h2a1,1,0,0,0,0-2Z'
  }));
};

UilTextFields.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilTextFields.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilTextFields;