import { formatLink, formatIcon, formatButton } from '@ecl-twig/data-utils';

function formatItem(i) {
  const item = {
    description: i.description,
    meta: i.meta,
    share_path: i.shareHref,
    video: i.video,
    image: i.image,
  };

  if (i.video && i.video.tracks && Array.isArray(i.video.tracks)) {
    i.video.tracks.forEach((track) => {
      track.src_lang = track.srcLang;
      delete track.srcLang;
    });
  } else if (!i.image || !i.image.alt) {
    // Fallback to previous structure
    item.path = i.src;
    item.alt = i.alt;
  }

  if (i.icon) {
    item.icon = formatIcon(i.icon);
  }

  return item;
}

const adapter = (initialData) => {
  const footer = formatLink(initialData.footerLink);
  footer.icon.path = '/icons.svg';
  const adaptedData = {
    items: initialData.items.map((item) => formatItem(item)),
    footer,
    overlay: {
      close: formatButton(initialData.overlay.close),
      previous: formatButton(initialData.overlay.previous),
      next: formatButton(initialData.overlay.next),
      counter_separator: initialData.overlay.counterSeparator,
      download: formatLink(initialData.overlay.download),
      share: formatLink(initialData.overlay.share),
    },
  };
  adaptedData.view_all_label = initialData.viewAllLabel;
  adaptedData.counter_label = initialData.counterLabel;
  adaptedData.overlay.download.link.path = '/example';
  adaptedData.overlay.share.link.path = '/example';

  return adaptedData;
};

export default adapter;
