import { Link } from 'react-router-dom';
import pepe from '../../../assets/images/pepe.png';
import './PageNotFound.scss';

export default function PageNotFound() {
  return (
    <div className="page-not-found">
      <div className="image">
        <img src={pepe} alt="Page Not Found" />
      </div>
      <div className="msg-page-not-found">
        <h2>Pepe is sad that he couldn&apos;t find the page you&apos;re looking for.</h2>
        <h2>
          Return{' '}
          <Link className="link" to="/home">
            Home
          </Link>{' '}
          to make him feel better.
        </h2>
      </div>
    </div>
  );
}
