import React from 'react';
import PropTypes from 'prop-types';

const UilChartGrowthAlt = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,20H4V18H7a1,1,0,0,0,0-2H4V14h7a1,1,0,0,0,0-2H4V10H15a1,1,0,0,0,0-2H4V6H19a1,1,0,0,0,0-2H4V3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,0-2Z'
  }));
};

UilChartGrowthAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilChartGrowthAlt;