function formatPageHeaderInfo(i) {
  const iconType = i.icon.name.split('--');
  const info = {
    icon: {
      type: iconType[0],
      name: iconType[1],
      path: '/icons.svg',
    },
    text: i.text,
  };

  return info;
}

const adapter = (initialData) => {
  // Copy reference specification demo data.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  if (adaptedData.infos && Array.isArray(adaptedData.infos)) {
    adaptedData.infos.forEach((info) => {
      const iconName = info.icon;
      info.icon = {};
      info.icon.name = iconName;
      info.icon.path = '/icons.svg';
    });
  }

  if (adaptedData.isHomepage) {
    adaptedData.variant = 'homepage';
    delete adaptedData.isHomepage;
  }

  if (adaptedData.isBranded) {
    adaptedData.variant = 'branded-homepage';
    delete adaptedData.isBranded;
  }

  if (adaptedData.backgroundImage) {
    adaptedData.background_image = true;
    adaptedData.background_image_url = adaptedData.backgroundImage;
    delete adaptedData.backgroundImage;
  }

  if (adaptedData.image) {
    adaptedData.background_image = true;
    adaptedData.background_image_url = adaptedData.image;
    delete adaptedData.image;
  }

  if (adaptedData.infos) {
    adaptedData.infos = adaptedData.infos.map((info) =>
      formatPageHeaderInfo(info)
    );
  }

  return adaptedData;
};

export default adapter;
