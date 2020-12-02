const system = 'ec';
const baseUrl =
  ['ec.europa.eu', 'localhost'].indexOf(window.location.hostname) !== -1
    ? `https://v3--europa-component-library.netlify.app/playground/`
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

const prefillPen = (code) => {
  return JSON.stringify({
    title: 'ECL Pen',
    description: "Exported from ECL's playground",
    html: replaceLogo(replaceIcons(code)),
    css_external: `${baseUrl}${system}/styles/${system}-core.css`,
    js_external: `https://unpkg.com/svg4everybody@2.1.9/dist/svg4everybody.js;https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js;${baseUrl}${system}/scripts/${system}-core.js`,
    js: 'svg4everybody({ polyfill: true });\nECL.autoInit();',
  });
};

export default prefillPen;
