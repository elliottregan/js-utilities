/**
 * Quickly validates a string as a querySelector.
 * @param {String} selector
 */
export default function isValidSelector(selector) {
  if (!selector) return false;
  const queryCheck = s => document.createDocumentFragment().querySelector(s);
  try {
    queryCheck(selector);
  } catch {
    return false;
  }
  return true;
}
