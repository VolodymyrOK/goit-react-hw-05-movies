import { fetchMovieQuery } from 'components/Api/Api';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

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

        if (dataFetch.results.length === 0) alert('ничего нет');
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
      <ul>
        {results &&
          results.map(({ id, title, poster_path }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <p>{title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Movies;
