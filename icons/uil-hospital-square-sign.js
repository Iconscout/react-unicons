import React from 'react';
import PropTypes from 'prop-types';

const UilHospitalSquareSign = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M15 6a1 1 0 0 0-1 1v4h-4V7a1 1 0 0 0-2 0v10a1 1 0 0 0 2 0v-4h4v4a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1Zm4-4H5a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V5a3.003 3.003 0 0 0-3-3Zm1 17a1.001 1.001 0 0 1-1 1H5a1.001 1.001 0 0 1-1-1V5a1.001 1.001 0 0 1 1-1h14a1.001 1.001 0 0 1 1 1Z'
  }));
};

UilHospitalSquareSign.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilHospitalSquareSign.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilHospitalSquareSign;