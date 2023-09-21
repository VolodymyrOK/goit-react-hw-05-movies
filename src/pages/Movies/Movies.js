import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieQuery } from 'components/Api/Api';
import { H1, H2 } from './Movies.styled';
import MoviesList from 'components/MoviesList/MoviesList';
import { MessageToast } from 'components/Messages/Messages';
import FormApp from 'components/FormApp/FormApp';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const queryName = searchParams.get('query') ?? '';

  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!queryName) return;
    async function searchMovies() {
      try {
        const dataFetch = await fetchMovieQuery(queryName);

        setResults(dataFetch.results);

        if (results.length === 0) return;
        !dataFetch.results.length &&
          MessageToast('errorfound', 'Nothing found!');
      } catch (error) {
        MessageToast('errorloading', 'OOPS! There was an error!');
      }
    }
    searchMovies();
  }, [queryName, results.length]);

  return (
    <>
      <H1>Search Films</H1>
      <FormApp />
      {results.length > 0 && <H2>Searching results</H2>}
      {results.length > 0 && <MoviesList results={results} />}
    </>
  );
};

export default Movies;
