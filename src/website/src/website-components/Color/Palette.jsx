import React, {
  useLayoutEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Palette.module.scss';

const PaletteContext = createContext(null);
export const usePaletteRef = () => useContext(PaletteContext);

export const Palette = ({ children, mode }) => {
  const olRef = useRef(null);

  const [bgColor, setBgColor] = useState(null);

  useLayoutEffect(() => {
    const node = olRef.current;
    if (!node) return;

    const computed = getComputedStyle(node);
    setBgColor(computed.getPropertyValue('background-color'));
  }, []);

  return (
    <PaletteContext.Provider value={olRef}>
      <ol
        ref={olRef}
        className={classNames(styles.palette, {
          [styles[`mode--${mode}`]]: mode,
        })}
      >
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, {
                paletteRef: olRef,
                paletteBg: bgColor,
              })
            : child,
        )}
      </ol>
    </PaletteContext.Provider>
  );
};

Palette.propTypes = {
  children: PropTypes.node.isRequired,
  mode: PropTypes.string,
};

Palette.defaultProps = {
  mode: '',
};

export default Palette;
