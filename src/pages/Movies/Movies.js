import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieQuery } from 'components/Api/Api';
import { H1, H2 } from './Movies.styled';
import MoviesList from 'components/MoviesList/MoviesList';
import { MessageToast } from 'components/Messages/Messages';
import FormApp from 'components/FormApp/FormApp';
import { LoadMore } from 'components/LoadMore/LoadMore';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const queryName = searchParams.get('query') ?? '';

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

        if (dataFetch.results === 0)
          return MessageToast('errorfound', 'Nothing found');

        if (page === 1) {
          MessageToast('foundok', `Found ${dataFetch.total_results} movies`);
          setResults(dataFetch.results);
        } else {
          setResults(prevResults => [...prevResults, ...dataFetch.results]);
        }
        setTotalResults(dataFetch.total_results);
      } catch (error) {
        MessageToast('errorloading', 'OOPS! There was an error!');
      } finally {
        setLoading(false);
      }
    }
    searchMovies();
  }, [queryName, page]);

  useEffect(() => {
    if (results.length === totalResults && totalResults !== 0)
      MessageToast('foundok', `Search completed. There is nothing more.`);
    if (results.length > totalResults)
      MessageToast(
        'foundok',
        `Search completed. The number of requested images has exceeded the maximum allowed.`
      );
  }, [results.length, totalResults]);

  const onloadMore = () => {
    setPage(prev => prev + 1);
    scroll.scrollMore(500);
  };

  return (
    <>
      <H1>Search Films</H1>
      <FormApp />
      {results.length > 0 && <H2>Searching results</H2>}
      {results.length > 0 && <MoviesList results={results} />}
      {totalResults > results.length && !loading && (
        <LoadMore onClick={onloadMore} />
      )}
    </>
  );
};

export default Movies;
