import { createRoot } from 'react-dom/client';
import App from './app/App';

const root = createRoot(document.getElementById('root')); // createRoot(container!) if you use TypeScript
root.render(<App />);

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
