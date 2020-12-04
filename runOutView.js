const DEFAULTS = {
  threshold: [
    0, 1,
  ],
  count: 1,
};

/**
 * Calls a function once when an element first enters the viewport.
 * @param  {HTMLElement}   element The element to observe
 * @param  {Function}      fn      The function to be called
 * @param  {Number}        count   The maximum number of times fn can be called.
 * @return {IntersectionObserver}
 */

export default function runInView(element, fn = () => {}, options) {
  if (!window.IntersectionObserver) {
    return window.requestAnimationFrame(fn({ target: element }));
  }
  const thisOptions = Object.assign(DEFAULTS, options);
  let i = 0;
  const observer = new window.IntersectionObserver(([entry]) => {
    if (meetsThreshold(entry, thisOptions)) {
      fn(entry);
      i += 1;
      if (i <= thisOptions.count) {
        observer.unobserve(entry.target);
      }
    }
  }, {
    threshold: thisOptions.threshold,
  });
  observer.observe(element);
  return observer;
}

function meetsThreshold({ isIntersecting }) {
  return !isIntersecting;
}
