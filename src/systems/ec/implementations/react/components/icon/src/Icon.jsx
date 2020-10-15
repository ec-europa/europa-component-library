import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

const Icon = ({
  className,
  color,
  desc,
  descId,
  iconPath,
  shape,
  size,
  title,
  titleId,
  transform,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-icon', {
    [`ecl-icon--${size}`]: size,
    [`ecl-icon--${color}`]: color,
    [`ecl-icon--${transform}`]: transform,
  });

  let labelledBy = '';
  if ((title && titleId) || (desc && descId)) {
    labelledBy = `${titleId} ${descId}`;
  }

  return (
    <svg
      focusable="false"
      aria-hidden="true"
      {...(labelledBy && { 'aria-labelledby': labelledBy })}
      {...props}
      className={classNames}
    >
      {title && <title {...(titleId && { id: titleId })}>{title}</title>}
      {desc && <desc {...(descId && { id: descId })}>{desc}</desc>}
      <use xlinkHref={`${iconPath}#${shape}`} />
    </svg>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  desc: PropTypes.string,
  descId: PropTypes.string,
  iconPath: PropTypes.string,
  shape: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
  titleId: PropTypes.string,
  transform: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
  color: '',
  desc: '',
  descId: '',
  iconPath: defaultSprite,
  shape: '',
  size: 'm',
  title: '',
  titleId: '',
  transform: '',
};

export default Icon;
