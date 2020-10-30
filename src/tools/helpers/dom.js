// Query helper
export const queryAll = (selector, context = document) =>
  [].slice.call(context.querySelectorAll(selector));

export const queryOne = (selector, context = document) =>
  context.querySelector(selector);

export default queryAll;
