import { fetchMovieId } from 'components/Api/Api';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function getDataMovieId() {
      try {
        const result = await fetchMovieId(movieId);
        setResult(result);
      } catch (error) {
        console.error(error.code);
      }
    }
    getDataMovieId();
  }, [movieId]);

  const { title, overview, vote_average, poster_path, genres } = result;

  return (
    <>
      <Link to={backLinkLocationRef.current}>Back</Link>
      <div>
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            width="300"
          />
        )}

        <div>
          <h1>{title}</h1>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres &&
              genres.map((genre, ind) => <li key={ind}>{genre.name}</li>)}
          </ul>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to={'review'}>Review</Link>
            </li>
          </ul>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;
