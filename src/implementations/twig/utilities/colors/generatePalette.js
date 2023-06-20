/* eslint-disable no-use-before-define, no-bitwise, no-plusplus, no-multi-assign */
const generatePalette = (baseColor, step, colorName) => {
  const variations = {};

  const lighten = (color, percentage) => {
    const hslColor = rgbToHsl(hexToRgb(color));
    const lightenedL = hslColor[2] + percentage / 100;

    return hslToHex(hslColor[0], hslColor[1], lightenedL);
  };

  const darken = (color, percentage) => {
    const hslColor = rgbToHsl(hexToRgb(color));
    const darkenedL = hslColor[2] - percentage / 100;

    return hslToHex(hslColor[0], hslColor[1], darkenedL);
  };

  const hexToRgb = (color) => {
    const hex = color.replace(/^#/, '');
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return [r, g, b];
  };

  const rgbToHsl = (rgb) => {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    let h;
    let s;
    const l = (r + g + b) / 3;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
        default:
          break;
      }
      h /= 6;
    }

    return [h, s, l];
  };

  const hslToHex = (h, s, l) => {
    let r;
    let g;
    let b;

    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return `#${rgbToHex(
      Math.round(r * 255),
      Math.round(g * 255),
      Math.round(b * 255)
    )}`;
  };

  const rgbToHex = (r, g, b) => {
    const componentToHex = (c) => {
      const hex = c.toString(16);
      return hex.length === 1 ? `0${hex}` : hex;
    };

    return `${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
  };

  for (let i = 0; i <= 9; i++) {
    const percentage = i * step;
    const variationName = `${colorName}-${100 - i * 10}`;
    const variationColor = lighten(baseColor, percentage);

    variations[variationName] = variationColor;
  }

  variations[`${colorName}-100`] = baseColor;

  for (let j = 1; j <= 5; j++) {
    const percentage = j * step;
    const variationName = `${colorName}-${100 + j * 10}`;
    const variationColor = darken(baseColor, percentage);

    variations[variationName] = variationColor;
  }

  Object.keys(variations).forEach((key) => {
    document.documentElement.style.setProperty(`--${key}`, variations[key]);
  });

  return variations;
};

export default generatePalette;
