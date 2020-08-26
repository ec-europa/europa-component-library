/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import specData from '@ecl/ec-specs-media-container/demo/data--video';

const adapter = (initialData) => {
  // Copy reference specification demo data.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  if (adaptedData.tracks && Array.isArray(adaptedData.tracks)) {
    adaptedData.tracks.forEach((track) => {
      track.src_lang = track.srcLang;
      delete track.srcLang;
    });
  }

  return adaptedData;
};

export default adapter(specData);
