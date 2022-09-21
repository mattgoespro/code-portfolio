import { store } from '@shared/redux/store';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './app/App';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Scroll to top on page refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
