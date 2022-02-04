import './index.scss';
import * as ReactDOM from 'react-dom';
import AppRoutes from './src/App';

ReactDOM.render(<AppRoutes />, document.getElementById('root'));

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
