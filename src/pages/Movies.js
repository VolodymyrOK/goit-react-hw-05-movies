import { fetchMovieQuery } from 'components/Api/Api';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryName = searchParams.get('query') ?? '';

  const [results, setResults] = useState([]);
  const [queryMovie, setQueryMovie] = useState('');

  useEffect(() => {
    async function searchMovies() {
      try {
        const dataFetch = await fetchMovieQuery(queryName);
        setResults(dataFetch.results);
      } catch (error) {
        console.log(error.code);
      }
    }
    searchMovies();
  }, [queryName]);

  const onSearchSubmit = evt => {
    evt.preventDefault();
    if (queryMovie.trim() === '')
      alert('enter the name of the movie to search');
    setSearchParams({ query: queryMovie });
  };
  const onSearchInput = evt => {
    setQueryMovie(evt.target.value.toLowerCase());
  };

  return (
    <div>
      <h1>Search Films</h1>
      <form onSubmit={onSearchSubmit}>
        <input
          type="text"
          value={queryMovie}
          onChange={onSearchInput}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>

      {/* <button onClick={() => setSearchParams({ query: queryMovie })}>
        Search
      </button> */}
      <ul>
        {/* {visibleMovies.map(movie => {
          return (
            <li key={movie}>
              <Link to={`${movie}`} state={{ from: location }}>
                {movie}
              </Link>
            </li>
          );
        })} */}
        {results &&
          results.map(({ id, title, poster_path }) => (
            <li key={id} to={`/movies/${id}`} state={{ from: location }}>
              {/* <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                  width="200"
                  height="auto"
                /> */}
              <p>{title}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Movies;
