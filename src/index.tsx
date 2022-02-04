import * as ReactDOM from 'react-dom';
import App from './app/App';

ReactDOM.render(<App />, document.getElementById('root'));

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
