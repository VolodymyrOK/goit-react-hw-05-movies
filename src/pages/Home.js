import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchMovies } from 'components/Api/Api';

const Home = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getDataMovies() {
      try {
        const dataFetch = await fetchMovies();
        setResults(dataFetch.results);
      } catch (error) {
        console.error(error.code);
      }
    }
    getDataMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {results &&
          results.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
