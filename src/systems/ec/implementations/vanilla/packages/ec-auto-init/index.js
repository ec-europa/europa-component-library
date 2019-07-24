import { queryAll } from '@ecl/ec-base/helpers/dom';

export const autoInit = (root = document) => {
  // Auto init messages
  const messages = queryAll('[data-ecl-message]', root);
  messages.forEach(messageElement => {
    const message = new ECL.Message(messageElement);
    message.init();
  });
};

export default autoInit;
