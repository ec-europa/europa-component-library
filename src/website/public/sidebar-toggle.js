window.onload = () => {
  const sidebar = document.querySelector('#root > nav');
  const button = document.querySelector('[data-toggle-sidebar]');
  const container = document.querySelector('#main-content').parentNode;

  if (!button || !sidebar || !container) return;

  button.addEventListener('click', () => {
    const isClosed = sidebar.getAttribute('data-nav-closed');

    if (isClosed) {
      const storedOpenClass = localStorage.getItem('openClass');
      const storedContainerOpenClass =
        localStorage.getItem('containerOpenClass');
      button.removeAttribute('data-toggle-closed');
      button.setAttribute('data-toggle-open', true);
      sidebar.removeAttribute('data-nav-closed');
      container.setAttribute('data-container-with-sidebar', true);
      if (storedOpenClass) {
        button.classList.add(storedOpenClass);
      }
      if (storedContainerOpenClass) {
        container.classList.add(storedContainerOpenClass);
      }
    } else {
      const openClass = [...button.classList].find((cls) =>
        cls.startsWith('_button-toggle--open'),
      );
      const containerOpenClass = [...container.classList].find((cls) =>
        cls.startsWith('_container--with-sidebar'),
      );
      localStorage.setItem('openClass', openClass);
      localStorage.setItem('containerOpenClass', containerOpenClass);
      button.classList.remove(openClass);
      button.setAttribute('data-toggle-closed', true);
      button.removeAttribute('data-toggle-open');
      sidebar.setAttribute('data-nav-closed', true);
      container.removeAttribute('data-container-with-sidebar');
      container.classList.remove(containerOpenClass);
    }
  });
};
