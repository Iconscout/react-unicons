import React from 'react';
import PropTypes from 'prop-types';

const UilEnvelopeEdit = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M14,11.51h2.42a1,1,0,0,0,.71-.29l4.58-4.58a1,1,0,0,0,0-1.42L19.29,2.8a1,1,0,0,0-1.42,0L13.29,7.38a1.05,1.05,0,0,0-.29.71v2.42A1,1,0,0,0,14,11.51Zm1-3,3.58-3.58,1,1L16,9.51H15Zm6,2a1,1,0,0,0-1,1v7a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.9l5.88,5.89a3,3,0,0,0,4.27,0,1,1,0,0,0,0-1.4,1,1,0,0,0-1.43,0,1,1,0,0,1-1.4,0L5.41,7.49H10a1,1,0,0,0,0-2H5a3,3,0,0,0-3,3v10a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-7A1,1,0,0,0,21,10.49Z'
  }));
};

UilEnvelopeEdit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilEnvelopeEdit.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilEnvelopeEdit;