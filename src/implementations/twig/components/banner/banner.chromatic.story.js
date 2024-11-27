import bannerDataImage from '@ecl/specs-component-banner/demo/data--image';
import banner from './banner.html.twig';

export default {
  title: 'Components/Banner',
  parameters: { layout: 'fullscreen' },
};

export const States = (_, { loaded: { component } }) => component;

States.render = async () => {
  const renderedBannerStates = `<h4>Without title</h4>
    ${await banner({ ...bannerDataImage, title: '', link: {} })}
    <h4>Without description</h4>
    ${await banner({ ...bannerDataImage, description: '', link: {} })}
    <h4>With a CTA button</h4>
    ${await banner(bannerDataImage)}
    <h4>Without credits</h4>
    ${await banner({ ...bannerDataImage, credit: '', link: {} })}
    `;
  return renderedBannerStates;
};
States.tags = ['!dev'];
States.parameters = {
  chromatic: {
    viewports: [480, 768, 1024, 1200],
  },
};

export const Sizes = (_, { loaded: { component } }) => component;

Sizes.render = async () => {
  const renderedBannerSizes = `<h4>Large size</h4>
    ${await banner({ ...bannerDataImage, size: 'l', link: {} })}
    <h4>Medium size</h4>
    ${await banner({ ...bannerDataImage, size: 'm', link: {} })}
    <h4>Small size</h4>
    ${await banner({ ...bannerDataImage, description: '', size: 's', link: {} })}
    <h4>Extra small size</h4>
    ${await banner({ ...bannerDataImage, description: '', size: 'xs', link: {} })}
    `;
  return renderedBannerSizes;
};
Sizes.tags = ['!dev'];
Sizes.parameters = {
  chromatic: {
    viewports: [480, 768, 1024, 1200],
  },
};

export const Displays = (_, { loaded: { component } }) => component;

Displays.render = async () => {
  const renderedBannerDisplays = `<h4>Large font size</h4>
    ${await banner({ ...bannerDataImage, font_size: 'l', link: {} })}
    <h4>Dark box background</h4>
    ${await banner({ ...bannerDataImage, box_background: 'dark', link: {} })}
    <h4>Transparent box</h4>
    ${await banner({ ...bannerDataImage, box_background: 'none', font_color: 'light', link: {} })}
    <h4>Centered alignment</h4>
    ${await banner({ ...bannerDataImage, horizontal: 'center', link: {} })}
    <h4>Right alignment</h4>
    ${await banner({ ...bannerDataImage, horizontal: 'right', link: {} })}
    <h4>Top alignment</h4>
    ${await banner({ ...bannerDataImage, size: 'l', vertical: 'top', link: {} })}
    <h4>Bottom alignment</h4>
    ${await banner({ ...bannerDataImage, size: 'l', vertical: 'bottom', link: {} })}
    `;
  return renderedBannerDisplays;
};
Displays.tags = ['!dev'];
Displays.parameters = {
  chromatic: {
    viewports: [480, 768, 1024, 1200],
  },
};
