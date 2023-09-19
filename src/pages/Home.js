import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMovies } from 'components/Api/Api';
import Trending from 'components/Trending/Trending';
import { MessageToast } from 'components/Messages/Messages';

const Home = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();

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
      {results && (
        <Trending
          title={'Trending today'}
          results={results}
          location={location}
        />
      )}
    </div>
  );
};

export default Home;
