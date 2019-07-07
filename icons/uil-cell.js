import React from 'react';
import PropTypes from 'prop-types';

const UilCell = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.49,4.73,17,2.17a1,1,0,0,0-1,0L12,4.45,8,2.17a1,1,0,0,0-1,0L2.51,4.73A1,1,0,0,0,2,5.6v5.12a1,1,0,0,0,.51.87l4,2.27V18.4a1,1,0,0,0,.51.87l4.5,2.56a1,1,0,0,0,1,0L17,19.27a1,1,0,0,0,.51-.87V13.86l4-2.27a1,1,0,0,0,.51-.87V5.6A1,1,0,0,0,21.49,4.73ZM4,10.14v-4l3.5-2,3.5,2v4l-3.5,2Zm11.5,7.68-3.5,2-3.5-2v-4l3.5-2,3.5,2ZM20,10.14l-3.5,2-3.5-2v-4l3.5-2,3.5,2Z'
  }));
};

UilCell.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCell.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCell;