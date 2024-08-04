import {Link} from 'react-router-dom';

function MovieCard({movie}) {
  console.log(movie.genres,0)
  const genreSpan = [movie.genres].map(genre => {
    return <span key={genre}>{genre}</span>
  });
  return (
    <article>
        <h2>{movie.title}</h2>
        <p>{movie.time}</p>
        {genreSpan}
        <p><Link to = {`/movie/${movie.id}`}>View Info</Link></p>

    </article>
  );
};

export default MovieCard;