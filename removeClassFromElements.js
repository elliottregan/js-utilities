/**
 * Loops through DOM elements and removes given CSS class
 * @param {NodeList} elements
 * @param {String} cssClass
 * @return {void}
 */
export default function removeClassFromElements(elements, cssClass) {
  elements.forEach(element => {
    element.classList.remove(cssClass);
  });
}
