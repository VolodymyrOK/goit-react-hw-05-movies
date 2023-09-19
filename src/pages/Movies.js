import { fetchMovieQuery } from 'components/Api/Api';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MessageToast } from 'components/Messages/Messages';
import SearchMovie from 'components/Search/Search';

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
        MessageToast('errorloading', 'OOPS! There was an error!');
      }
    }
    searchMovies();
  }, [queryName]);

  const onSearchSubmit = evt => {
    evt.preventDefault();
    if (queryMovie.trim() === '')
      MessageToast('emptysearch', 'Enter data to Search');
    // !results.length && MessageToast('errorfound', 'Nothing found');
    setSearchParams({ query: queryMovie });
  };
  const onSearchInput = evt => {
    setQueryMovie(evt.target.value.toLowerCase());
  };

  return (
    <div>
      {results && (
        <SearchMovie
          results={results}
          query={queryMovie}
          onSearch={onSearchInput}
          onSubmit={onSearchSubmit}
          location={location}
        />
      )}
    </div>
  );
};

export default Movies;
