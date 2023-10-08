import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { fetchMovies } from 'components/Api/Api';
import { MessageToast } from 'components/Messages/Messages';
import { H1 } from './Home.styled';
import MoviesList from 'components/MoviesList/MoviesList';
import { LoadMore } from 'components/LoadMore/LoadMore';

const Home = () => {
  const [results, setResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function getDataMovies() {
      try {
        setLoading(true);
        const dataFetch = await fetchMovies(page, {
          signal: controller.signal,
        });

        setResults(prevResults => [...prevResults, ...dataFetch.results]);
        setTotalResults(dataFetch.total_results);
      } catch (error) {
        MessageToast('errorloading', 'OOPS! There was an error!');
      } finally {
        setLoading(false);
      }
    }
    getDataMovies();
    return () => {
      controller.abort();
    };
  }, [page]);

  const onloadMore = () => {
    setPage(prev => prev + 1);
    scroll.scrollMore(500);
  };

  return (
    <>
      <H1>Trending today</H1>
      {results && <MoviesList results={results} />}
      {totalResults > results.length && !loading && (
        <LoadMore onClick={onloadMore} />
      )}
    </>
  );
};

export default Home;
