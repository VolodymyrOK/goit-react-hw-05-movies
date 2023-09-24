import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieQuery } from 'components/Api/Api';
import { FormWrapper, H1, H2 } from './Movies.styled';
import MoviesList from 'components/MoviesList/MoviesList';
import { MessageToast } from 'components/Messages/Messages';
import FormApp from 'components/FormApp/FormApp';
import { LoadMore } from 'components/LoadMore/LoadMore';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const queryName = searchParams.get('query') ?? '';

  const [, setSearchParams] = useSearchParams();

  const [results, setResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!queryName) return;
    async function searchMovies() {
      try {
        setLoading(true);
        const dataFetch = await fetchMovieQuery(queryName, page);

        if (dataFetch.total_results === 0) {
          setResults([]);
          return MessageToast('errorfound', 'Nothing found');
        }

        setResults(prevResults => [...prevResults, ...dataFetch.results]);
        console.log(dataFetch.results);

        setTotalResults(dataFetch.total_results);
      } catch (error) {
        MessageToast('errorloading', 'OOPS! There was an error!');
      } finally {
        setLoading(false);
      }
    }
    searchMovies();
  }, [queryName, page, searchParams]);

  useEffect(() => {
    if (page === 1 && totalResults)
      MessageToast('foundok', `Found  ${totalResults} movies`);

    if (page >= totalResults / 20 && totalResults)
      MessageToast('foundok', `Search completed. There is nothing more.`);
  }, [page, totalResults]);

  const onloadMore = () => {
    setPage(prev => prev + 1);
    scroll.scrollMore(500);
  };

  const clearResults = queryName => {
    setResults([]);
    setPage(1);
    setSearchParams({ query: queryName });
  };

  return (
    <>
      <FormWrapper>
        <H1>Search Films</H1>
        <FormApp onClear={clearResults} />
      </FormWrapper>
      {results.length > 0 && (
        <H2>Searching results - Total found: {totalResults} movies</H2>
      )}
      {results.length > 0 && <MoviesList results={results} />}
      {totalResults > results.length && !loading && results.length !== 0 && (
        <LoadMore onClick={onloadMore} />
      )}
    </>
  );
};

export default Movies;
