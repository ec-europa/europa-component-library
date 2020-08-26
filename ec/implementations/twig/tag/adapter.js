const adapter = (initialData) => {
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  const tag = { tag: adaptedData };

  if (adaptedData.dismissButtonLabel) {
    tag.default_icon_path = '/icons.svg';
    tag.tag.type = 'removable';
    tag.tag.aria_label = adaptedData.dismissButtonLabel;
    delete tag.tag.dismissButtonLabel;
  } else if (adaptedData.href) {
    tag.tag.type = 'link';
    tag.tag.path = tag.tag.href;
    delete tag.tag.href;
  } else {
    tag.tag.type = 'button';
  }

  return tag;
};

export default adapter;
