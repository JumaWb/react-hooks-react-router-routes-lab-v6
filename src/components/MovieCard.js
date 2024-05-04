import {Link} from 'react-router-dom';
import Movie from '../pages/Movie';

function MovieCard({movie}) {
  const{title, id}=movie
  return (
    <article>
        <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
    </article>
  );
};

export default MovieCard;