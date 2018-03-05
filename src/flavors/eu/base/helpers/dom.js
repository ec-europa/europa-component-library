// Query helper
export const queryAll = (selector, context = document) =>
  [].slice.call(context.querySelectorAll(selector));

export default queryAll;
