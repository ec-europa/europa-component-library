import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const cachedScripts = [];

const WebtoolsLoader = ({ src, options, onLoad, onError }) => {
  const [state, setState] = useState({ loaded: false, error: false });

  useEffect(() => {
    if (cachedScripts.includes(src)) {
      return setState({
        loaded: true,
        error: false,
      });
    }

    cachedScripts.push(src);

    /**
     * Create script tag.
     */
    const script = document.createElement('script');

    /**
     * Define handlers. They depend on script existence.
     */
    const onWebtoolsSuccess = () => {
      onLoad();
      return setState({ loaded: true, error: false });
    };

    const onWebtoolsError = () => {
      onError();
      const index = cachedScripts.indexOf(src);
      if (index >= 0) cachedScripts.splice(index, 1);
      if (script) script.remove();

      return setState({ loaded: true, error: true });
    };

    /**
     * Decorate the script tag.
     */
    script.src = src;

    ['type', 'async', 'defer', 'charset'].forEach(option => {
      if (options[option]) {
        script[option] = options[option];
      }
    });

    script.addEventListener('load', onWebtoolsSuccess);
    script.addEventListener('error', onWebtoolsError);

    document.body.appendChild(script);

    return () => {
      script.removeEventListener('load', onWebtoolsSuccess);
      script.removeEventListener('error', onWebtoolsError);
    };
  }, [src]);

  return [state.loaded, state.error];
};

WebtoolsLoader.propTypes = {
  src: PropTypes.string.isRequired,
  options: PropTypes.shape({
    type: PropTypes.string,
    charset: PropTypes.string,
    async: PropTypes.bool,
    defer: PropTypes.bool,
  }),
  onLoad: PropTypes.func,
  onError: PropTypes.func,
};

WebtoolsLoader.defaultProps = {
  options: {
    type: 'text/javascript',
    async: true,
    charset: 'UTF-8',
  },
  onLoad: () => {},
  onError: () => {},
};

export default WebtoolsLoader;
