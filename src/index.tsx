import * as ReactDOM from 'react-dom';
import AppRoutes from './app/App';

ReactDOM.render(<AppRoutes />, document.getElementById('root'));

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
