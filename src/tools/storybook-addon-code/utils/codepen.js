import { version } from '../package.json';

const baseUrl =
  ['ec.europa.eu', 'localhost'].indexOf(window.location.hostname) !== -1
    ? `https://cdn1.fpfis.tech.ec.europa.eu/ecl/v${version}/ec-preset-legacy-website/`
    : window.location.origin + window.location.pathname;

const replaceLogo = (code) =>
  code.replace(
    /dist\/images\/logo([\d-az-]*)\.([\da-z]*)\.svg/gi,
    `${baseUrl}images/logo/logo$1.svg`
  );

const replaceIcons = (code) =>
  code.replace(
    /dist\/images\/icons\.([\da-z]*)\.svg/gi,
    `${baseUrl}images/icons/sprites/icons.svg`
  );

const prefillPen = (code) =>
  JSON.stringify({
    title: 'ECL Pen',
    description: "Exported from ECL's playground",
    html: replaceLogo(replaceIcons(code)),
    css_external: `${baseUrl}styles/ecl-ec-preset-legacy-website.css`,
    js_external: `https://unpkg.com/svg4everybody@2.1.9/dist/svg4everybody.js;${baseUrl}scripts/ecl-ec-preset-legacy-website.js`,
    js: 'svg4everybody({ polyfill: true });\nECL.autoInit();',
  });

export default prefillPen;
