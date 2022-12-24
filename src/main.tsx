import { createRoot } from 'react-dom/client';
import { App } from './app/App';

const appRoot = document.getElementById('root');

createRoot(appRoot).render(<App />);

// Scroll to top on page refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
