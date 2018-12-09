import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function IconV(props) {
  const {
    className,
    direction,
    ...rest
  } = props;

  const cssClass = className ?
    `icon-css-v icon-css-v--${direction} ${className}`
    :
    `icon-css-v icon-css-v--${direction}`;

  return (
    <i
      className={cssClass}
      {...rest}
    />
  );
}
IconV.propTypes = {
  /** 方向 */
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
};

export default IconV;
