import { useEffect, useState } from 'react';
import { fetchMovies } from 'components/Api/Api';
import { MessageToast } from 'components/Messages/Messages';
import { H1 } from './Home.styled';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getDataMovies() {
      try {
        const dataFetch = await fetchMovies();
        setResults(dataFetch.results);
      } catch (error) {
        MessageToast('errorloading', 'OOPS! There was an error!');
      } finally {
      }
    }
    getDataMovies();
  }, []);

  return (
    <div>
      <H1>Trending today</H1>
      {results && <MoviesList results={results} />}
    </div>
  );
};

export default Home;
