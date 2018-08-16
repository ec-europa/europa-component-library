/*
 * Messages behavior
 */

// Dismiss a selected message.
function dismissMessage(message) {
  if (message && message.parentNode !== null) {
    message.parentNode.removeChild(message);
  }
}

// Helper method to automatically attach the event listener to all the messages on page load
export function initMessages() {
  const selectorClass = 'ecl-message__dismiss';

  const messages = Array.prototype.slice.call(
    document.getElementsByClassName(selectorClass)
  );

  messages.forEach(message =>
    message.addEventListener('click', () =>
      dismissMessage(message.parentElement)
    )
  );
}

export default initMessages;
