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
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!queryName) return;
    async function searchMovies() {
      try {
        setLoading(true);
        const dataFetch = await fetchMovieQuery(queryName, page);

        setResults(prevResults => [...prevResults, ...dataFetch.results]);
        setTotalPages(dataFetch.total_pages);

        if (dataFetch.total_pages === 0)
          return MessageToast('errorfound', 'Nothing found');
      } catch (error) {
        MessageToast('errorloading', 'OOPS! There was an error!');
      } finally {
        setLoading(false);
      }
    }
    searchMovies();
  }, [queryName, page]);

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
      {totalPages > results.length && !loading && (
        <LoadMore onClick={onloadMore} />
      )}
    </>
  );
};

export default Movies;
