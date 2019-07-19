const replaceLogo = code =>
  code.replace(
    /static\/media\/logo(.*)\.(.*)\.svg/gi,
    'https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.9.0/ec-preset-legacy-website/images/logo/logo$1.svg'
  );

const replaceIcons = code =>
  code.replace(
    /static\/media\/icons\.(.*)\.svg/gi,
    'https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.9.0/ec-preset-legacy-website/images/icons/sprites/icons.svg'
  );

const prefillPen = code => {
  return JSON.stringify({
    title: 'ECL Pen',
    description: "Exported from ECL's playground",
    html: replaceLogo(replaceIcons(code)),
    css_external:
      'https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.9.0/ec-preset-legacy-website/styles/ecl-ec-preset-legacy-website.css',
    js_external:
      'https://unpkg.com/svg4everybody@2.1.9/dist/svg4everybody.js;https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.9.0/ec-preset-legacy-website/scripts/ecl-ec-preset-legacy-website.js',
    js: 'svg4everybody({ polyfill: true });',
  });
};

export default prefillPen;
