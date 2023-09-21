import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { fetchMovies } from 'components/Api/Api';
import { MessageToast } from 'components/Messages/Messages';
import { H1 } from './Home.styled';
import MoviesList from 'components/MoviesList/MoviesList';
import { LoadMore } from 'components/LoadMore/LoadMore';

const Home = () => {
  const [results, setResults] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getDataMovies() {
      try {
        setLoading(true);
        const dataFetch = await fetchMovies(page);
        setResults(dataFetch.results);

        if (dataFetch.total_pages === 0)
          return MessageToast('errorfound', 'Nothing found');

        if (page === 1)
          MessageToast('foundok', `Found ${dataFetch.total_pages} movies`);

        setResults(prevResults => [...prevResults, ...dataFetch.results]);
        setTotalPages(dataFetch.total_pages);
        console.log('dataFetch.total_pages', dataFetch.total_pages);
        console.log('dataFetch.results', dataFetch.results);
      } catch (error) {
        MessageToast('errorloading', 'OOPS! There was an error!');
      } finally {
        setLoading(false);
      }
    }
    getDataMovies();
  }, [page]);

  // useEffect(() => {
  //   if (results.length === totalPages && totalPages !== 0)
  //     MessageToast('foundok', `Search completed. There is nothing more.`);
  //   if (results.length > totalPages)
  //     MessageToast(
  //       'foundok',
  //       `Search completed. The number of requested images has exceeded the maximum allowed.`
  //     );
  // }, [results.length, totalPages]);

  const onloadMore = () => {
    setPage(prev => prev + 1);
    console.log(page);
    scroll.scrollMore(500);
  };

  return (
    <div>
      <H1>Trending today</H1>
      {results && <MoviesList results={results} />}
      {totalPages > results.length && !loading && (
        <LoadMore onClick={onloadMore} />
      )}
    </div>
  );
};

export default Home;
