import { render } from 'react-dom';
import App from './app/App';

render(<App />, document.getElementById('root'));

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
