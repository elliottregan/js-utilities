import runInView from '../runInView';
import runOutView from '../runOutView';

const DEFAULTS = {
  context: document,
  threshold: {
    bottom: 0,
    top: 0,
  },
};

export default function inViewEventListener(element, callback, event, options = DEFAULTS) {
  runInView(element, () => {
    options.context.addEventListener(event, callback);
  }, { count: NaN });

  runOutView(element, () => {
    options.context.removeEventListener(event, callback);
  }, { count: NaN });
}
