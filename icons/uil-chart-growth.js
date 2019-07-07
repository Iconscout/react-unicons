import React from 'react';
import PropTypes from 'prop-types';

const UilChartGrowth = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,20H20V5a1,1,0,0,0-2,0V20H16V9a1,1,0,0,0-2,0V20H12V13a1,1,0,0,0-2,0v7H8V17a1,1,0,0,0-2,0v3H4V3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,0-2Z'
  }));
};

UilChartGrowth.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilChartGrowth.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilChartGrowth;