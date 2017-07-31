import debounce from 'lodash.debounce';

export function eclLangSelectPages() {
  window.addEventListener(
    'resize',
    debounce(() => {
      console.log('debounced event');
    }, 250)
  );
}

export default eclLangSelectPages;
