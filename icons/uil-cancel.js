import React from 'react';
import PropTypes from 'prop-types';

const UilCancel = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.77,11.36l-5-6A1,1,0,0,0,16,5H5A3,3,0,0,0,2,8v8a3,3,0,0,0,3,3H16a1,1,0,0,0,.77-.36l5-6A1,1,0,0,0,21.77,11.36ZM15.53,17H5a1,1,0,0,1-1-1V8A1,1,0,0,1,5,7H15.53l4.17,5ZM12.71,9.29a1,1,0,0,0-1.42,0L10,10.59,8.71,9.29a1,1,0,1,0-1.42,1.42L8.59,12l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L10,13.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,12l1.3-1.29A1,1,0,0,0,12.71,9.29Z'
  }));
};

UilCancel.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCancel.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCancel;